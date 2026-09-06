'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import {
  ChevronRightIcon,
  ChevronDownIcon,
  MenuIcon,
  XIcon,
  TerminalIcon,
  BotIcon,
  LayersIcon,
  CpuIcon,
  AwardIcon,
  UsersIcon,
  GraduationCapIcon
} from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'
import { HoverMark } from '@/components/hover-mark'
import { BracketTitle, Corners } from '@/components/frame'
import { TerminalDrawer } from '@/components/terminal-drawer'
import { PortfolioAIAgent } from '@/components/portfolio-ai-agent'

const primarySections = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' }
]

const dropdownSections = [
  {
    id: 'pillars',
    label: 'Core Pillars',
    subtitle: 'Platform, LLMOps & MCP',
    icon: LayersIcon
  },
  {
    id: 'products',
    label: 'AI Products',
    subtitle: 'Autonomous Agents & IDP',
    icon: BotIcon
  },
  {
    id: 'architecture',
    label: 'Architecture',
    subtitle: 'Interactive Cloud Canvas',
    icon: CpuIcon
  },
  {
    id: 'certifications',
    label: 'Certifications',
    subtitle: 'Verified CNCF, AWS & IaC',
    icon: AwardIcon
  },
  {
    id: 'community',
    label: 'Community',
    subtitle: '250k+ Readers Worldwide',
    icon: UsersIcon
  },
  {
    id: 'education',
    label: 'Education',
    subtitle: 'Academic Background',
    icon: GraduationCapIcon
  }
]

const allSections = [...primarySections, ...dropdownSections]

export function NavigationMenu() {
  const [activeSection, setActiveSection] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [isTerminalOpen, setIsTerminalOpen] = useState(false)
  const [isAgentOpen, setIsAgentOpen] = useState(false)

  const isDropdownActive = dropdownSections.some((s) => s.id === activeSection)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (
        ['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName) ||
        (e.target as HTMLElement)?.isContentEditable
      ) {
        return
      }
      if (e.key === '`') {
        e.preventDefault()
        setIsTerminalOpen((prev) => !prev)
      }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'j') {
        e.preventDefault()
        setIsAgentOpen((prev) => !prev)
      }
    }
    const handleOpenTerminal = () => setIsTerminalOpen(true)
    const handleOpenAgent = () => setIsAgentOpen(true)

    window.addEventListener('keydown', handleKey)
    window.addEventListener('open-terminal', handleOpenTerminal)
    window.addEventListener('open-ai-agent', handleOpenAgent)
    return () => {
      window.removeEventListener('keydown', handleKey)
      window.removeEventListener('open-terminal', handleOpenTerminal)
      window.removeEventListener('open-ai-agent', handleOpenAgent)
    }
  }, [])

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActiveSection(visible.target.id)
      },
      { rootMargin: '-30% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] }
    )

    allSections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }
    setTimeout(() => {
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur()
      }
    }, 50)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <header
      className="fixed top-0 right-0 left-0 z-50 print:hidden pointer-events-none right-scroll-bar-position"
      style={{ right: 'var(--removed-body-scroll-bar-size, 0px)' }}
    >
      <div className="site-shell pt-3 sm:pt-4">
        <div className="relative flex h-12 items-center justify-between overflow-visible border border-border bg-background/80 backdrop-blur-md px-4 pointer-events-auto sm:h-14 sm:px-5">
          <Corners />

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="relative z-10 text-sm font-semibold tracking-[0.18em] uppercase"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Image
                src="/android-chrome-192x192.png"
                alt="Harshhaa logo"
                width={32}
                height={32}
                className="block size-8 shrink-0 object-contain"
              />
              <BracketTitle>Harshhaa</BracketTitle>
            </span>
          </button>

          <nav className="hidden items-center gap-1 md:flex">
            {primarySections.map((section) => (
              <HoverMark
                key={section.id}
                className="flex items-center px-2.5 py-1.5"
                onMouseLeave={() => {
                  if (document.activeElement instanceof HTMLElement) {
                    document.activeElement.blur()
                  }
                }}
              >
                <button
                  type="button"
                  onClick={() => scrollTo(section.id)}
                  onMouseLeave={(e) => e.currentTarget.blur()}
                  onPointerUp={(e) => e.currentTarget.blur()}
                  className={cn(
                    'inline-flex items-center text-xs font-medium tracking-wide leading-none transition-colors cursor-pointer',
                    activeSection === section.id
                      ? 'text-foreground font-semibold'
                      : 'text-muted-foreground group-hover/mark:text-foreground'
                  )}
                >
                  {section.label}
                </button>
              </HoverMark>
            ))}

            {/* Dropdown Menu for More Sections */}
            <DropdownMenu.Root>
              <HoverMark
                className="flex items-center px-2.5 py-1.5"
                onMouseLeave={() => {
                  if (document.activeElement instanceof HTMLElement) {
                    document.activeElement.blur()
                  }
                }}
              >
                <DropdownMenu.Trigger asChild>
                  <button
                    type="button"
                    onMouseLeave={(e) => e.currentTarget.blur()}
                    onPointerUp={(e) => e.currentTarget.blur()}
                    className={cn(
                      'group inline-flex items-center gap-1 text-xs font-medium tracking-wide leading-none transition-colors outline-none cursor-pointer',
                      isDropdownActive
                        ? 'text-foreground font-semibold'
                        : 'text-muted-foreground group-hover/mark:text-foreground'
                    )}
                    aria-label="More navigation links"
                  >
                    <span>More</span>
                    <ChevronDownIcon className="size-3 opacity-60 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </button>
                </DropdownMenu.Trigger>
              </HoverMark>
              <DropdownMenu.Portal>
                <DropdownMenu.Content
                  align="center"
                  sideOffset={10}
                  onCloseAutoFocus={(e) => e.preventDefault()}
                  className="relative z-50 min-w-[220px] border border-border bg-background/95 p-1.5 shadow-2xl backdrop-blur-md outline-none duration-150 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[side=bottom]:slide-in-from-top-2"
                >
                  <Corners />
                  <div className="border-b border-border/80 px-2.5 py-1 mb-1">
                    <span className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
                      More Sections
                    </span>
                  </div>
                  {dropdownSections.map((item) => {
                    const IconComp = item.icon
                    const isActive = activeSection === item.id
                    return (
                      <DropdownMenu.Item
                        key={item.id}
                        onSelect={() => scrollTo(item.id)}
                        className={cn(
                          'flex cursor-pointer items-start gap-2.5 rounded-none px-2.5 py-2 text-xs outline-none transition-colors hover:bg-muted/50 focus:bg-muted/50',
                          isActive && 'bg-muted/40 font-medium text-primary'
                        )}
                      >
                        <div className="mt-0.5 flex size-4 shrink-0 items-center justify-center text-muted-foreground">
                          <IconComp className="size-3.5" />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span
                            className={cn(
                              'text-xs font-medium',
                              isActive ? 'text-primary' : 'text-foreground'
                            )}
                          >
                            {item.label}
                          </span>
                          <span className="text-[10px] text-muted-foreground truncate">
                            {item.subtitle}
                          </span>
                        </div>
                      </DropdownMenu.Item>
                    )
                  })}
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          </nav>

          <div className="relative z-10 flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsAgentOpen(true)}
              className="h-9 gap-1.5 px-2.5 font-mono text-xs tracking-wider"
              aria-label="Ask Harshhaa's AI Agent"
              title="Ask Harshhaa's AI Agent (⌘J)"
            >
              <BotIcon className="size-3.5 text-primary" />
              <span className="hidden sm:inline">Agent</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsTerminalOpen(true)}
              className="h-9 gap-1.5 px-2.5 font-mono text-xs tracking-wider"
              aria-label="Open CLI Terminal"
              title="Open CLI Terminal (`)"
            >
              <TerminalIcon className="size-3.5 text-primary" />
              <span className="hidden sm:inline">CLI</span>
            </Button>
            <ThemeToggle className="hidden md:inline-flex" />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <XIcon className="size-4" />
              ) : (
                <MenuIcon className="size-4" />
              )}
            </Button>
          </div>
        </div>

        {isOpen && (
          <nav
            className="relative -mt-px overflow-visible border border-t-0 border-border bg-background/95 pointer-events-auto md:hidden"
            aria-label="Mobile Navigation"
          >
            <Corners />
            <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
              <span className="font-mono text-[10px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                Jump To Section
              </span>
              <span className="font-mono text-[10px] text-muted-foreground/60">
                {allSections.length} Sections
              </span>
            </div>

            {/* 2 options per line grid */}
            <div className="grid grid-cols-2 gap-px bg-border">
              {allSections.map((section, index) => {
                const active = activeSection === section.id
                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => scrollTo(section.id)}
                    className={cn(
                      'flex items-center justify-between gap-1.5 bg-background px-3 py-2.5 text-left transition-colors hover:bg-muted/40 active:bg-muted/60',
                      active
                        ? 'text-primary font-semibold bg-muted/20'
                        : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span
                        className={cn(
                          'font-mono text-[10px] tracking-wider tabular-nums shrink-0',
                          active
                            ? 'text-primary font-bold'
                            : 'text-muted-foreground/50'
                        )}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="truncate text-xs font-medium">
                        {section.label}
                      </span>
                    </div>
                    <ChevronRightIcon
                      className={cn(
                        'size-3 shrink-0',
                        active ? 'text-primary opacity-90' : 'opacity-30'
                      )}
                    />
                  </button>
                )
              })}
            </div>

            {/* Quick Actions (Agent & CLI side-by-side) */}
            <div className="grid grid-cols-2 gap-px bg-border border-t border-border">
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false)
                  setIsAgentOpen(true)
                }}
                className="flex items-center justify-center gap-2 bg-background px-3 py-2.5 text-xs font-mono text-foreground transition-colors hover:bg-muted/40 active:bg-muted/60"
              >
                <BotIcon className="size-3.5 text-primary" />
                <span>Agent (⌘J)</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false)
                  setIsTerminalOpen(true)
                }}
                className="flex items-center justify-center gap-2 bg-background px-3 py-2.5 text-xs font-mono text-foreground transition-colors hover:bg-muted/40 active:bg-muted/60"
              >
                <TerminalIcon className="size-3.5 text-primary" />
                <span>CLI (` )</span>
              </button>
            </div>

            {/* Theme Toggle footer */}
            <div className="flex items-center justify-between border-t border-border bg-muted/20 px-4 py-2">
              <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">
                Theme Mode
              </span>
              <ThemeToggle />
            </div>
          </nav>
        )}
      </div>

      <TerminalDrawer
        open={isTerminalOpen}
        onOpenChange={setIsTerminalOpen}
      />
      <PortfolioAIAgent
        open={isAgentOpen}
        onOpenChange={setIsAgentOpen}
      />
    </header>
  )
}

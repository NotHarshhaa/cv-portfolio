'use client'

import * as React from 'react'
import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut
} from '@/components/ui/command'
import { Button } from './ui/button'
import { Corners } from '@/components/frame'
import { 
	CommandIcon, 
	SunIcon, 
	MoonIcon, 
	MailIcon, 
	PhoneIcon, 
	GlobeIcon, 
	LinkIcon,
	ArrowUpIcon,
	CopyIcon,
	CheckIcon,
	ExternalLinkIcon,
	PrinterIcon,
	TerminalIcon,
	BotIcon,
	LayersIcon,
	UserIcon,
	CpuIcon,
	SparklesIcon,
	BriefcaseIcon,
	AwardIcon,
	FolderGit2Icon,
	UsersIcon,
	GraduationCapIcon,
	HashIcon
} from 'lucide-react'
import { GitHubIcon, LinkedInIcon, TelegramIcon } from '@/components/icons'
import { useTheme } from 'next-themes'

interface Link {
	url: string
	title: string
	tag?: string
}

interface Props {
	links: Link[]
}

const RECENT_STORAGE_KEY = 'recent_pages'

// Portfolio main sections with metadata
const SECTIONS = [
	{ id: 'about', label: 'About & Overview', icon: UserIcon, shortcut: '01' },
	{ id: 'pillars', label: 'Engineering Pillars', icon: CpuIcon, shortcut: '02' },
	{ id: 'products', label: 'Featured Products & Innovations', icon: SparklesIcon, shortcut: '03' },
	{ id: 'work', label: 'Work Experience & History', icon: BriefcaseIcon, shortcut: '04' },
	{ id: 'architecture', label: 'Cloud & AI Architecture (Interactive)', icon: LayersIcon, shortcut: '05' },
	{ id: 'skills', label: 'Technical Skills & Competencies', icon: TerminalIcon, shortcut: '06' },
	{ id: 'certifications', label: 'Certifications & Credentials', icon: AwardIcon, shortcut: '07' },
	{ id: 'projects', label: 'Open Source & Featured Projects', icon: FolderGit2Icon, shortcut: '08' },
	{ id: 'community', label: 'Speaking & Community Leadership', icon: UsersIcon, shortcut: '09' },
	{ id: 'education', label: 'Education & Background', icon: GraduationCapIcon, shortcut: '10' },
]

// Icon mapping for different link types
const getLinkIcon = (url: string, title: string) => {
	if (url.includes('github.com')) return <GitHubIcon className='mr-2 h-4 w-4 shrink-0' />
	if (url.includes('linkedin.com')) return <LinkedInIcon className='mr-2 h-4 w-4 shrink-0' />
	if (url.includes('t.me') || url.includes('telegram')) return <TelegramIcon className='mr-2 h-4 w-4 shrink-0' />
	if (url.startsWith('mailto:')) return <MailIcon className='mr-2 h-4 w-4 shrink-0' />
	if (url.startsWith('tel:')) return <PhoneIcon className='mr-2 h-4 w-4 shrink-0' />
	if (title.toLowerCase().includes('portfolio') || title.toLowerCase().includes('website')) return <GlobeIcon className='mr-2 h-4 w-4 shrink-0' />
	return <LinkIcon className='mr-2 h-4 w-4 shrink-0' />
}

// Categorize links
const categorizeLink = (link: Link): string => {
	if (link.tag) return link.tag
	if (link.url.includes('github.com')) return 'GitHub'
	if (link.url.includes('linkedin.com')) return 'Professional'
	if (link.url.startsWith('mailto:')) return 'Contact'
	if (link.url.startsWith('tel:')) return 'Contact'
	if (link.title.toLowerCase().includes('portfolio') || link.title.toLowerCase().includes('website')) return 'Portfolio'
	return 'Links'
}

export function CommandMenu({ links }: Props) {
	const [open, setOpen] = React.useState(false)
	const [recentPages, setRecentPages] = React.useState<Link[]>([])
	const [copiedUrl, setCopiedUrl] = React.useState<string | null>(null)
	const { theme, setTheme } = useTheme()

	React.useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
				e.preventDefault()
				setOpen((open) => !open)
			}
		}
		const handleOpen = () => setOpen(true)
		document.addEventListener('keydown', down)
		window.addEventListener('open-command-menu', handleOpen)
		return () => {
			document.removeEventListener('keydown', down)
			window.removeEventListener('open-command-menu', handleOpen)
		}
	}, [])

	React.useEffect(() => {
		const stored = localStorage.getItem(RECENT_STORAGE_KEY)
		if (stored) {
			try {
				setRecentPages(JSON.parse(stored))
			} catch {
				// Invalid JSON, ignore
			}
		}
	}, [])

	const handleLinkSelect = (link: Link) => {
		setOpen(false)
		if (link.url.startsWith('mailto:') || link.url.startsWith('tel:')) {
			window.location.assign(link.url)
		} else {
			window.open(link.url, '_blank', 'noopener,noreferrer')
		}

		const updated = [link, ...recentPages.filter((l) => l.url !== link.url)].slice(0, 5)
		setRecentPages(updated)
		localStorage.setItem(RECENT_STORAGE_KEY, JSON.stringify(updated))
	}

	const handleSectionSelect = (sectionId: string) => {
		setOpen(false)
		const element = document.getElementById(sectionId)
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
		}
	}

	const handleCopyLink = (e: React.MouseEvent, url: string) => {
		e.stopPropagation()
		const textToCopy = url.replace('mailto:', '').replace('tel:', '')
		void navigator.clipboard.writeText(textToCopy)
		setCopiedUrl(url)
		setTimeout(() => {
			setCopiedUrl(null)
		}, 2000)
	}

	const handleScrollToTop = () => {
		setOpen(false)
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	const grouped = links.reduce<Record<string, Link[]>>((acc, link) => {
		const tag = categorizeLink(link)
		acc[tag] = acc[tag] || []
		acc[tag].push(link)
		return acc
	}, {})

	return (
		<>
			{/* Desktop bottom trigger bar */}
			<button
				type='button'
				onClick={() => setOpen(true)}
				className='fixed bottom-0 left-0 right-0 z-40 hidden border-t border-border bg-background/90 backdrop-blur-sm py-1.5 px-4 text-center font-mono text-[11px] text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-colors print:hidden right-scroll-bar-position xl:flex items-center justify-center gap-2 cursor-pointer group'
				style={{ right: 'var(--removed-body-scroll-bar-size, 0px)' }}
				aria-label='Open command palette'
			>
				<span className='size-1.5 bg-primary/80 group-hover:bg-primary transition-colors' />
				<span>Press</span>
				<kbd className='pointer-events-none inline-flex h-5 select-none items-center gap-1 border border-border bg-muted/60 px-1.5 font-mono text-[10px] font-medium text-foreground group-hover:border-primary/50 transition-colors'>
					<span>Ctrl</span>
					<span className='text-muted-foreground/60'>/</span>
					<span>⌘</span>
					<span>K</span>
				</kbd>
				<span>to open Command Palette</span>
				<span className='text-muted-foreground/40 hidden 2xl:inline'>{'//'}</span>
				<span className='text-[10px] text-muted-foreground/70 hidden 2xl:inline'>Navigate sections, launch tools, search links</span>
			</button>

			{/* Mobile floating trigger button */}
			<button
				type='button'
				onClick={() => setOpen(true)}
				className='fixed right-4 bottom-18 z-50 flex items-center gap-1.5 border border-border bg-background/95 px-2.5 py-1.5 font-mono text-xs shadow-xl backdrop-blur-md hover:border-primary active:bg-muted transition-all print:hidden xl:hidden cursor-pointer group'
				style={{ right: 'calc(1rem + var(--removed-body-scroll-bar-size, 0px))' }}
				aria-label='Open command palette'
			>
				<Corners className='size-1' />
				<CommandIcon className='size-3.5 text-primary group-hover:scale-110 transition-transform' />
				<span className='font-semibold text-[11px] tracking-wide text-foreground'>CMD</span>
				<kbd className='border border-border/80 bg-muted/60 px-1 py-0.5 text-[9px] text-muted-foreground'>⌘K</kbd>
			</button>

			{/* Upgraded Command Dialog */}
			<CommandDialog open={open} onOpenChange={setOpen}>
				{/* Terminal Header Bar */}
				<div className='flex items-center justify-between border-b border-border bg-muted/40 px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground select-none'>
					<div className='flex items-center gap-2'>
						<span className='relative flex size-2'>
							<span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75' />
							<span className='relative inline-flex size-2 rounded-full bg-emerald-500' />
						</span>
						<span className='text-foreground font-semibold'>HARSHHAA</span>
						<span className='text-muted-foreground/60'>{'//'}</span>
						<span>COMMAND PALETTE</span>
					</div>
					<div className='flex items-center gap-2 text-[10px] text-muted-foreground'>
						<span className='hidden sm:inline border border-border/80 bg-background/60 px-1.5 py-0.5'>SYS.READY</span>
						<span className='border border-border/80 bg-background/60 px-1.5 py-0.5'>ESC TO CLOSE</span>
					</div>
				</div>

				<CommandInput placeholder='Type a command, search sections, or jump to link...' />

				<CommandList>
					<CommandEmpty>
						<div className='flex flex-col items-center justify-center py-10 text-center font-mono'>
							<div className='mb-2 size-8 border border-dashed border-muted-foreground/40 flex items-center justify-center text-muted-foreground'>
								!
							</div>
							<p className='text-xs uppercase tracking-wider text-foreground font-semibold'>NO MATCHING COMMANDS FOUND</p>
							<p className='mt-1 text-[11px] text-muted-foreground'>Try searching for a section name, action, or social link.</p>
						</div>
					</CommandEmpty>

					{/* System Tools & Actions */}
					<CommandGroup heading='System Actions & Tools'>
						<CommandItem
							onSelect={() => {
								setOpen(false)
								window.dispatchEvent(new CustomEvent('open-ai-agent'))
							}}
						>
							<BotIcon className='text-primary' />
							<span className='flex-1 font-medium'>Ask Harshhaa’s Agent (AI Assistant)</span>
							<CommandShortcut>⌘J</CommandShortcut>
						</CommandItem>

						<CommandItem
							onSelect={() => {
								setOpen(false)
								window.dispatchEvent(new CustomEvent('open-terminal'))
							}}
						>
							<TerminalIcon />
							<span className='flex-1 font-medium'>Open Blueprint Terminal</span>
							<CommandShortcut>`</CommandShortcut>
						</CommandItem>

						<CommandItem
							onSelect={() => {
								setTheme(theme === 'dark' ? 'light' : 'dark')
								setOpen(false)
							}}
						>
							{theme === 'dark' ? (
								<>
									<SunIcon className='text-amber-500' />
									<span className='flex-1'>Switch to Light Theme</span>
								</>
							) : (
								<>
									<MoonIcon className='text-blue-500' />
									<span className='flex-1'>Switch to Dark Theme</span>
								</>
							)}
						</CommandItem>

						<CommandItem
							onSelect={() => {
								setOpen(false)
								window.print()
							}}
						>
							<PrinterIcon />
							<span className='flex-1'>Print Resume / Export PDF</span>
							<CommandShortcut>⌘P</CommandShortcut>
						</CommandItem>

						<CommandItem onSelect={handleScrollToTop}>
							<ArrowUpIcon />
							<span className='flex-1'>Scroll to Top of Page</span>
							<CommandShortcut>↑</CommandShortcut>
						</CommandItem>
					</CommandGroup>

					{/* Navigation / Page Sections */}
					<CommandSeparator />
					<CommandGroup heading='Jump To Section'>
						{SECTIONS.map((section) => {
							const SectionIcon = section.icon
							return (
								<CommandItem
									key={section.id}
									onSelect={() => handleSectionSelect(section.id)}
								>
									<SectionIcon className='text-muted-foreground' />
									<span className='flex-1'>{section.label}</span>
									<span className='font-mono text-[10px] text-muted-foreground/60 mr-1'>#{section.id}</span>
									<CommandShortcut>{section.shortcut}</CommandShortcut>
								</CommandItem>
							)
						})}
					</CommandGroup>

					{/* Recently Visited */}
					{recentPages.length > 0 && (
						<>
							<CommandSeparator />
							<CommandGroup heading='Recently Visited'>
								{recentPages.map((link) => (
									<CommandItem 
										key={link.url} 
										onSelect={() => handleLinkSelect(link)}
									>
										{getLinkIcon(link.url, link.title)}
										<span className='flex-1'>{link.title}</span>
										<button
											type='button'
											className='inline-flex h-6 w-6 items-center justify-center border border-border/60 bg-background/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors'
											onClick={(e) => handleCopyLink(e, link.url)}
											aria-label={`Copy ${link.title}`}
											title='Copy address'
										>
											{copiedUrl === link.url ? (
												<CheckIcon className='h-3 w-3 text-emerald-500' />
											) : (
												<CopyIcon className='h-3 w-3' />
											)}
										</button>
										<ExternalLinkIcon className='ml-1.5 h-3 w-3 opacity-40' />
									</CommandItem>
								))}
							</CommandGroup>
						</>
					)}

					{/* External Links & Socials */}
					{Object.entries(grouped)
						.sort(([a], [b]) => {
							if (a === 'Contact') return -1
							if (b === 'Contact') return 1
							return a.localeCompare(b)
						})
						.map(([tag, tagLinks]) => (
							<React.Fragment key={tag}>
								<CommandSeparator />
								<CommandGroup heading={tag}>
									{tagLinks.map((link) => (
										<CommandItem 
											key={link.url} 
											onSelect={() => handleLinkSelect(link)}
										>
											{getLinkIcon(link.url, link.title)}
											<span className='flex-1'>{link.title}</span>
											<button
												type='button'
												className='inline-flex h-6 w-6 items-center justify-center border border-border/60 bg-background/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors'
												onClick={(e) => handleCopyLink(e, link.url)}
												aria-label={`Copy ${link.title}`}
												title='Copy link'
											>
												{copiedUrl === link.url ? (
													<CheckIcon className='h-3 w-3 text-emerald-500' />
												) : (
													<CopyIcon className='h-3 w-3' />
												)}
											</button>
											<ExternalLinkIcon className='ml-1.5 h-3 w-3 opacity-40' />
										</CommandItem>
									))}
								</CommandGroup>
							</React.Fragment>
						))}
				</CommandList>

				{/* Bottom Keyboard Hint Footer */}
				<div className='flex items-center justify-between border-t border-border bg-muted/20 px-3.5 py-2 font-mono text-[10px] text-muted-foreground select-none'>
					<div className='flex items-center gap-3'>
						<span className='flex items-center gap-1'>
							<kbd className='border border-border bg-background px-1 py-0.5 text-[9px]'>↑</kbd>
							<kbd className='border border-border bg-background px-1 py-0.5 text-[9px]'>↓</kbd>
							<span className='hidden sm:inline'>NAVIGATE</span>
						</span>
						<span className='flex items-center gap-1'>
							<kbd className='border border-border bg-background px-1.5 py-0.5 text-[9px]'>↵</kbd>
							<span>SELECT</span>
						</span>
						<span className='hidden sm:flex items-center gap-1'>
							<kbd className='border border-border bg-background px-1 py-0.5 text-[9px]'>ESC</kbd>
							<span>CLOSE</span>
						</span>
					</div>
					<div className='flex items-center gap-1.5'>
						<span className='size-1 bg-primary/70' />
						<span className='tracking-wider text-[9px] sm:text-[10px]'>SYSTEM v2.6.0</span>
					</div>
				</div>
			</CommandDialog>
		</>
	)
}

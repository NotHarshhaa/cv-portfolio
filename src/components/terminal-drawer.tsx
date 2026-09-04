'use client'

import React, { useState, useEffect, useRef } from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { Corners } from '@/components/frame'
import { Button } from '@/components/ui/button'
import { TerminalIcon, XIcon, CornerDownLeftIcon } from 'lucide-react'
import { RESUME_DATA } from '@/data/resume-data'
import { useTheme } from 'next-themes'

interface TerminalDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

interface CommandHistoryItem {
  command: string
  output: React.ReactNode
}

export function TerminalDrawer({ open, onOpenChange }: TerminalDrawerProps) {
  const { theme, setTheme } = useTheme()
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<CommandHistoryItem[]>([])
  const [historyIndex, setHistoryIndex] = useState<number>(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 80)
    }
  }, [open])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  const executeCommand = (cmdStr: string) => {
    const raw = cmdStr.trim()
    if (!raw) return

    const [cmd, ...args] = raw.toLowerCase().split(/\s+/)
    let output: React.ReactNode = null

    switch (cmd) {
      case 'help':
        output = (
          <div className="space-y-1 text-xs">
            <p className="text-muted-foreground">Available commands:</p>
            <div className="grid grid-cols-[9rem_1fr] gap-x-2 gap-y-1 font-mono pt-1">
              <span className="text-primary font-semibold">whoami</span>
              <span>Display identity and engineer profile</span>
              <span className="text-primary font-semibold">kubectl get pods</span>
              <span>Inspect simulated production Kubernetes workloads</span>
              <span className="text-primary font-semibold">docker ps</span>
              <span>List running microservice and agent containers</span>
              <span className="text-primary font-semibold">skills</span>
              <span>View core platform & AI infrastructure stack</span>
              <span className="text-primary font-semibold">projects</span>
              <span>List flagship cloud & DevOps repositories</span>
              <span className="text-primary font-semibold">contact</span>
              <span>Display contact endpoints & social links</span>
              <span className="text-primary font-semibold">theme [light|dark]</span>
              <span>Toggle or set active color theme</span>
              <span className="text-primary font-semibold">clear</span>
              <span>Clear terminal screen buffer</span>
              <span className="text-primary font-semibold">exit</span>
              <span>Close the terminal drawer</span>
            </div>
          </div>
        )
        break

      case 'whoami':
      case 'about':
        output = (
          <div className="space-y-2 text-xs">
            <p className="font-semibold text-foreground">{RESUME_DATA.name}</p>
            <p className="text-muted-foreground">{RESUME_DATA.role}</p>
            <p className="text-muted-foreground">Location: {RESUME_DATA.location}</p>
            <p className="text-muted-foreground">{RESUME_DATA.about}</p>
          </div>
        )
        break

      case 'kubectl':
        if (args.join(' ') === 'get pods' || args[0] === 'get') {
          output = (
            <pre className="overflow-x-auto text-[11px] leading-relaxed text-muted-foreground">
              {`NAME                                    READY   STATUS    RESTARTS   AGE
idp-gateway-service-7d8b59c4-xj92k      1/1     Running   0          18d
mcp-agent-orchestrator-6b8f75-pv82l     1/1     Running   0          6d
argocd-repo-server-5d68d4f9b8-zmn4q     1/1     Running   0          42d
prometheus-k8s-operator-0               2/2     Running   0          94d
grafana-loki-distributor-84c67bf-kx2    1/1     Running   0          94d`}
            </pre>
          )
        } else {
          output = <p className="text-xs text-destructive">kubectl: subcommand not recognized. Try: kubectl get pods</p>
        }
        break

      case 'docker':
        if (args[0] === 'ps') {
          output = (
            <pre className="overflow-x-auto text-[11px] leading-relaxed text-muted-foreground">
              {`CONTAINER ID   IMAGE                   COMMAND                STATUS         PORTS
c3b91a084f72   hashicorp/terraform:1.7 "terraform apply"      Up 3 hours     
e8419b1652f1   langgraph/agent:v2.1    "python agent.py"      Up 5 hours     0.0.0.0:8000->8000/tcp
91a784d852cb   prom/prometheus:latest  "/bin/prometheus..."   Up 14 days     0.0.0.0:9090->9090/tcp`}
            </pre>
          )
        } else {
          output = <p className="text-xs text-destructive">docker: subcommand not recognized. Try: docker ps</p>
        }
        break

      case 'skills':
        output = (
          <div className="space-y-1 text-xs">
            <p className="font-semibold text-foreground">Core Competencies:</p>
            <p className="text-muted-foreground">Platform: {RESUME_DATA.skills.slice(0, 6).join(', ')}</p>
            <p className="text-muted-foreground">Cloud & K8s: AWS, Azure, GCP, Kubernetes, Helm, Docker</p>
            <p className="text-muted-foreground">IaC & CI/CD: Terraform, Ansible, ArgoCD, GitHub Actions</p>
            <p className="text-muted-foreground">AI & Agents: MLOps, LLMOps, LangGraph, Model Context Protocol (MCP)</p>
          </div>
        )
        break

      case 'projects':
        output = (
          <div className="space-y-2 text-xs">
            {RESUME_DATA.projects.slice(0, 6).map((p, idx) => (
              <div key={p.title} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                <span className="font-mono text-primary">[{idx + 1}] {p.title}</span>
                <span className="text-muted-foreground">{p.link?.href}</span>
              </div>
            ))}
          </div>
        )
        break

      case 'contact':
        output = (
          <div className="space-y-1 text-xs">
            <p>Email: <a href={`mailto:${RESUME_DATA.contact.email.at}`} className="text-primary underline">{RESUME_DATA.contact.email.at}</a></p>
            <p>Phone: {RESUME_DATA.contact.tel.phoneNumber}</p>
            <p>GitHub: <a href="https://github.com/NotHarshhaa" target="_blank" rel="noreferrer" className="text-primary underline">github.com/NotHarshhaa</a></p>
            <p>LinkedIn: <a href="https://linkedin.com/in/harshhaa-vardhan-reddy" target="_blank" rel="noreferrer" className="text-primary underline">linkedin.com/in/harshhaa-vardhan-reddy</a></p>
          </div>
        )
        break

      case 'theme':
        if (args[0] === 'dark' || args[0] === 'light') {
          setTheme(args[0])
          output = <p className="text-xs text-green-500">Theme switched to {args[0]}</p>
        } else {
          const next = theme === 'dark' ? 'light' : 'dark'
          setTheme(next)
          output = <p className="text-xs text-green-500">Theme toggled to {next}</p>
        }
        break

      case 'clear':
        setHistory([])
        setInput('')
        return

      case 'exit':
        onOpenChange(false)
        return

      default:
        output = (
          <p className="text-xs text-destructive">
            command not found: {cmd}. Type &quot;help&quot; for a list of valid commands.
          </p>
        )
    }

    setHistory((prev) => [...prev, { command: raw, output }])
    setInput('')
    setHistoryIndex(-1)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(input)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (history.length > 0) {
        const nextIdx = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1)
        setHistoryIndex(nextIdx)
        setInput(history[nextIdx]?.command || '')
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex !== -1) {
        const nextIdx = historyIndex + 1
        if (nextIdx < history.length) {
          setHistoryIndex(nextIdx)
          setInput(history[nextIdx]?.command || '')
        } else {
          setHistoryIndex(-1)
          setInput('')
        }
      }
    }
  }

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs duration-150 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          className="fixed bottom-0 left-0 right-0 z-50 mx-auto flex h-[82vh] max-h-[640px] w-full max-w-4xl flex-col border-t border-border bg-background/95 font-mono shadow-2xl backdrop-blur-md duration-200 outline-none sm:bottom-6 sm:h-[70vh] sm:border data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom"
          aria-describedby="terminal-drawer-desc"
        >
          <Corners />

          {/* Terminal Title Bar */}
          <div className="flex h-11 items-center justify-between border-b border-border bg-muted/40 px-4 sm:px-6">
            <div className="flex items-center gap-2.5">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <DialogPrimitive.Title className="text-xs font-semibold tracking-wider uppercase text-foreground">
                [ harshhaa@cloud-node:~ ]
              </DialogPrimitive.Title>
            </div>

            <div className="flex items-center gap-2">
              <span className="hidden font-mono text-[10px] text-muted-foreground sm:inline">
                press ESC or type &apos;exit&apos;
              </span>
              <DialogPrimitive.Close asChild>
                <Button variant="ghost" size="icon-xs" aria-label="Close terminal">
                  <XIcon className="size-3.5" />
                </Button>
              </DialogPrimitive.Close>
            </div>
          </div>

          <p id="terminal-drawer-desc" className="sr-only">
            Interactive cloud and DevOps terminal emulator for Harshhaa Vardhan Reddy
          </p>

          {/* Terminal Content Buffer */}
          <div
            className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 text-xs"
            onClick={() => inputRef.current?.focus()}
          >
            <div className="rounded border border-border/60 bg-muted/20 p-3 text-[11px] leading-relaxed text-muted-foreground">
              <p className="font-semibold text-foreground">
                HARSHHAA VARDHAN REDDY // CLOUD & AGENTIC SYSTEMS CLI
              </p>
              <p>Type <span className="text-primary font-semibold">&quot;help&quot;</span> to inspect infrastructure, projects, pods, and skills.</p>
            </div>

            {history.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <span>harshhaa@cloud-node:~$</span>
                  <span className="text-foreground font-normal">{item.command}</span>
                </div>
                <div className="pl-4">{item.output}</div>
              </div>
            ))}

            {/* Active Command Input Line */}
            <div className="flex items-center gap-2 pt-1 text-primary font-semibold">
              <span className="shrink-0">harshhaa@cloud-node:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent text-foreground font-normal outline-none"
                placeholder="type a command... (e.g. help, kubectl get pods, skills)"
                autoComplete="off"
                spellCheck={false}
              />
              <button
                type="button"
                onClick={() => executeCommand(input)}
                className="text-muted-foreground hover:text-foreground opacity-60 hover:opacity-100"
                aria-label="Submit command"
              >
                <CornerDownLeftIcon className="size-3.5" />
              </button>
            </div>

            <div ref={bottomRef} />
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}

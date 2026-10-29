'use client'

import React, { useEffect, useRef, useState } from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import {
  BotIcon,
  DownloadIcon,
  RotateCcwIcon,
  SparklesIcon,
  XIcon
} from 'lucide-react'
import { Corners } from '@/components/frame'
import { Button } from '@/components/ui/button'
import { ChatInput } from './chat-input'
import { PRESET_QUESTIONS, PROJECT_COUNT } from './knowledge-base'
import { MessageBubble, ThinkingIndicator } from './message-bubble'
import { useAgentChat } from './use-agent-chat'

export interface PortfolioAIAgentProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

/**
 * "Ask Harshhaa's Agent" drawer: a simulated agentic chat that streams
 * reasoned answers about the portfolio, with preset inquiries, follow-up
 * suggestions, and transcript export. Composed from the modules in this
 * folder (knowledge-base, agent-engine, markdown, use-agent-chat, UI parts).
 */
export function PortfolioAIAgent({ open, onOpenChange }: PortfolioAIAgentProps) {
  const {
    messages,
    phase,
    pending,
    copiedId,
    isBusy,
    send,
    reset,
    copyMessage,
    exportTranscript
  } = useAgentChat()

  const [input, setInput] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const t = setTimeout(() => inputRef.current?.focus(), 100)
    return () => clearTimeout(t)
  }, [open])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, phase])

  // Latest completed agent message index — suggestions render only there.
  const latestAgentMessageId = [...messages]
    .reverse()
    .find((m) => m.role === 'agent' && !m.streaming)?.id

  const handleSend = (text?: string) => {
    const query = text ?? input
    send(query)
    setInput('')
  }

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs duration-150 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          className="fixed inset-y-0 right-0 z-50 flex w-full max-w-2xl flex-col border-l border-border bg-background/95 font-sans shadow-2xl backdrop-blur-md duration-200 outline-none sm:max-w-2xl data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:animate-in data-[state=open]:slide-in-from-right right-scroll-bar-position"
          style={{ right: 'var(--removed-body-scroll-bar-size, 0px)' }}
          aria-describedby="portfolio-agent-desc"
        >
          <Corners />

          {/* Header */}
          <div className="flex items-center justify-between border-b border-border px-5 py-4 sm:px-6">
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center border border-primary/40 bg-primary/10 text-primary">
                <BotIcon className="size-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <DialogPrimitive.Title className="font-heading text-base font-semibold tracking-tight">
                    Ask Harshhaa’s Agent
                  </DialogPrimitive.Title>
                  <span className="flex items-center gap-1 border border-primary/40 bg-primary/10 px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase text-primary">
                    <span className="size-1.5 animate-pulse bg-primary" />
                    Online
                  </span>
                </div>
                <p
                  id="portfolio-agent-desc"
                  className="text-xs text-muted-foreground"
                >
                  AI Context Engine: {PROJECT_COUNT} Projects • Platform &amp;
                  LLMOps Architecture
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <Button
                variant="ghost"
                size="icon"
                onClick={exportTranscript}
                title="Export transcript as Markdown"
                aria-label="Export transcript as Markdown"
                className="size-8 text-muted-foreground hover:text-foreground"
              >
                <DownloadIcon className="size-3.5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={reset}
                title="Reset conversation"
                aria-label="Reset conversation"
                className="size-8 text-muted-foreground hover:text-foreground"
              >
                <RotateCcwIcon className="size-3.5" />
              </Button>
              <DialogPrimitive.Close asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-8"
                  aria-label="Close Agent Drawer"
                >
                  <XIcon className="size-4" />
                </Button>
              </DialogPrimitive.Close>
            </div>
          </div>

          {/* Quick Prompt Chips */}
          <div className="border-b border-border bg-muted/40 px-5 py-2.5 sm:px-6">
            <div className="no-scrollbar flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
              <span className="shrink-0 font-mono text-[10px] uppercase text-muted-foreground">
                Inquire:
              </span>
              {PRESET_QUESTIONS.map((q) => (
                <button
                  key={q.label}
                  type="button"
                  onClick={() => handleSend(q.prompt)}
                  disabled={isBusy}
                  className="inline-flex shrink-0 items-center gap-1 border border-border bg-background/80 px-2.5 py-1 text-xs text-muted-foreground transition-all hover:border-primary/50 hover:bg-muted hover:text-foreground disabled:pointer-events-none disabled:opacity-50"
                >
                  <SparklesIcon className="size-2.5 shrink-0 text-primary" />
                  <span>{q.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Messages Container */}
          <div
            className="flex-1 space-y-4 overflow-y-auto p-5 sm:p-6"
            aria-live="polite"
          >
            {messages.map((m) => (
              <MessageBubble
                key={m.id}
                message={m}
                copied={copiedId === m.id}
                onCopy={copyMessage}
                onSuggestion={handleSend}
                showSuggestions={
                  !isBusy && m.id === latestAgentMessageId && m.id !== 'welcome' && m.id !== 'welcome-reset'
                }
              />
            ))}

            {phase === 'thinking' && pending && (
              <ThinkingIndicator
                steps={pending.steps}
                visibleSteps={pending.visibleSteps}
              />
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Footer Input */}
          <ChatInput
            value={input}
            onChange={setInput}
            onSubmit={() => handleSend()}
            disabled={isBusy}
            inputRef={inputRef}
          />
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}

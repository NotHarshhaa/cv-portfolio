'use client'

import React, { useEffect, useState } from 'react'
import {
  CheckIcon,
  ChevronDownIcon,
  CopyIcon,
  CornerDownRightIcon,
  ExternalLinkIcon,
  LayersIcon,
  TerminalIcon
} from 'lucide-react'
import { MarkdownMessage } from './markdown'
import type { Message } from './types'

interface MessageBubbleProps {
  message: Message
  copied: boolean
  onCopy: (id: string, text: string) => void
  onSuggestion: (prompt: string) => void
  /** Follow-up suggestions render only on the latest completed agent message. */
  showSuggestions: boolean
}

export function MessageBubble({
  message,
  copied,
  onCopy,
  onSuggestion,
  showSuggestions
}: MessageBubbleProps) {
  const isAgent = message.role === 'agent'
  const isStreaming = Boolean(message.streaming)
  const [traceOpen, setTraceOpen] = useState(isStreaming)

  // Collapse the reasoning trace once the answer completes; expand again
  // if a re-render starts a new stream on this bubble.
  useEffect(() => {
    setTraceOpen(isStreaming)
  }, [isStreaming])

  const hasTrace = isAgent && Boolean(message.thinkingSteps?.length)
  const trace = message.thinkingSteps ?? []

  return (
    <div
      className={`flex flex-col gap-1.5 ${
        isAgent ? 'items-start' : 'items-end'
      }`}
    >
      <div className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground">
        <span>{isAgent ? 'Harshhaa Agent' : 'You'}</span>
        <span aria-hidden>•</span>
        <span className="tabular-nums">{message.timestamp}</span>
        {isStreaming && (
          <span className="text-primary">streaming…</span>
        )}
      </div>

      <div
        className={`relative max-w-[92%] border p-3.5 text-xs leading-relaxed sm:p-4 sm:text-sm ${
          isAgent
            ? 'border-border bg-card text-card-foreground shadow-xs'
            : 'border-primary/30 bg-primary/5 text-foreground'
        }`}
      >
        {/* Execution reasoning trace */}
        {hasTrace && (
          <div className="mb-2.5 border-b border-border pb-2 font-mono text-[11px]">
            <button
              type="button"
              onClick={() => setTraceOpen((v) => !v)}
              className="flex w-full items-center gap-1.5 text-left font-semibold text-primary transition-colors hover:text-primary/80"
              aria-expanded={traceOpen}
            >
              <TerminalIcon className="size-3 shrink-0" />
              <span>Execution Reasoning Trace</span>
              <ChevronDownIcon
                className={`ml-auto size-3 transition-transform duration-200 ${
                  traceOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {traceOpen && (
              <div className="mt-1.5 space-y-1">
                {trace.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-1.5 text-muted-foreground/80"
                  >
                    <span className="shrink-0 text-primary/70" aria-hidden>
                      ›
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Content + streaming cursor */}
        <div aria-live={isStreaming ? 'polite' : undefined}>
          <MarkdownMessage content={message.content} />
          {isStreaming && (
            <span
              aria-hidden
              className="ml-0.5 inline-block h-3.5 w-[7px] animate-pulse bg-primary align-middle"
            />
          )}
        </div>

        {/* Cited projects (revealed once streaming completes) */}
        {isAgent &&
          !isStreaming &&
          message.citedProjects &&
          message.citedProjects.length > 0 && (
            <div className="mt-3.5 border-t border-border pt-3">
              <p className="mb-1.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Referenced Repositories &amp; Deployments:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {message.citedProjects.map((p, idx) => (
                  <a
                    key={idx}
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 border border-border bg-muted/40 px-2 py-1 font-mono text-[11px] text-foreground transition-colors hover:border-primary/60 hover:bg-muted"
                  >
                    <LayersIcon className="size-3 shrink-0 text-primary" />
                    <span>{p.title}</span>
                    {p.category && (
                      <span className="text-[9px] text-muted-foreground">
                        [{p.category}]
                      </span>
                    )}
                    <ExternalLinkIcon className="size-2.5 opacity-60 transition-opacity group-hover:opacity-100" />
                  </a>
                ))}
              </div>
            </div>
          )}

        {/* Copy action (completed agent messages only) */}
        {isAgent && !isStreaming && message.id !== 'welcome' && message.id !== 'welcome-reset' && (
          <div className="mt-3 flex justify-end border-t border-border/50 pt-2">
            <button
              type="button"
              onClick={() => onCopy(message.id, message.content)}
              className="inline-flex items-center gap-1 font-mono text-[10px] text-muted-foreground transition-colors hover:text-foreground"
            >
              {copied ? (
                <>
                  <CheckIcon className="size-3 text-primary" />
                  <span className="text-primary">Copied</span>
                </>
              ) : (
                <>
                  <CopyIcon className="size-3" />
                  <span>Copy response</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Follow-up suggestions */}
      {showSuggestions &&
        !isStreaming &&
        isAgent &&
        message.suggestions &&
        message.suggestions.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-0.5">
            {message.suggestions.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() => onSuggestion(suggestion)}
                className="inline-flex items-center gap-1 border border-border/70 bg-background/60 px-2 py-1 text-[11px] text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <CornerDownRightIcon className="size-3 shrink-0" />
                <span>{suggestion}</span>
              </button>
            ))}
          </div>
        )}
    </div>
  )
}

interface ThinkingIndicatorProps {
  steps: string[]
  visibleSteps: number
}

/** Staged thinking bubble: steps appear one by one while retrieving. */
export function ThinkingIndicator({
  steps,
  visibleSteps
}: ThinkingIndicatorProps) {
  return (
    <div className="flex flex-col items-start gap-1.5">
      <div className="font-mono text-[10px] text-muted-foreground">
        Harshhaa Agent • Retrieving…
      </div>
      <div className="relative w-full max-w-[92%] border border-border bg-card px-4 py-3 font-mono text-[11px] text-muted-foreground shadow-xs">
        <div className="flex items-center gap-2">
          <span
            aria-hidden
            className="size-2 shrink-0 animate-ping bg-primary"
          />
          <span className="text-primary">Executing reasoning trace…</span>
        </div>
        <div className="mt-2 space-y-1">
          {steps.slice(0, visibleSteps).map((step, idx) => (
            <div key={idx} className="flex items-start gap-1.5">
              <span className="shrink-0 text-primary/70" aria-hidden>
                ›
              </span>
              <span>{step}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

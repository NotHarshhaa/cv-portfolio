'use client'

import React from 'react'
import { SendIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PROJECT_COUNT } from './knowledge-base'

interface ChatInputProps {
  value: string
  onChange: (value: string) => void
  onSubmit: () => void
  disabled: boolean
  inputRef: React.RefObject<HTMLInputElement>
}

export function ChatInput({
  value,
  onChange,
  onSubmit,
  disabled,
  inputRef
}: ChatInputProps) {
  return (
    <div className="border-t border-border bg-background p-4 sm:p-5">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          onSubmit()
        }}
        className="flex items-center gap-2"
      >
        <div className="relative flex-1">
          <input
            ref={inputRef}
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Ask about Kubernetes, Terraform, LLMOps, GitOps, or skills..."
            disabled={disabled}
            aria-label="Ask the portfolio agent a question"
            className="w-full border border-border bg-muted/40 px-3.5 py-2.5 font-sans text-xs text-foreground transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:bg-background focus:outline-none disabled:opacity-60 sm:text-sm"
          />
        </div>
        <Button
          type="submit"
          size="sm"
          disabled={!value.trim() || disabled}
          className="h-10 gap-1.5 px-4 font-mono text-xs font-semibold uppercase"
        >
          <SendIcon className="size-3.5" />
          <span className="hidden sm:inline">Inquire</span>
        </Button>
      </form>
      <div className="mt-2 flex items-center justify-between font-mono text-[10px] text-muted-foreground">
        <span>Press Enter to inquire</span>
        <span>
          Context: {PROJECT_COUNT} Projects • IDP &amp; AI Infrastructure
        </span>
      </div>
    </div>
  )
}

import React from 'react'

interface InlinePart {
  type: 'text' | 'bold' | 'italic' | 'code'
  text: string
}

export function parseInline(text: string): InlinePart[] {
  const regex = /(`[^`]+`|\*\*[^*]+?\*\*|\*[^*]+?\*)/g
  const parts = text.split(regex)
  return parts.filter(Boolean).map((part) => {
    if (part.startsWith('`') && part.endsWith('`')) {
      return { type: 'code', text: part.slice(1, -1) }
    }
    if (part.startsWith('**') && part.endsWith('**')) {
      return { type: 'bold', text: part.slice(2, -2) }
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return { type: 'italic', text: part.slice(1, -1) }
    }
    return { type: 'text', text: part }
  })
}

export function renderInlineParts(parts: InlinePart[]) {
  return parts.map((part, idx) => {
    if (part.type === 'code') {
      return (
        <code
          key={idx}
          className="border border-border bg-muted/80 px-1.5 py-0.5 font-mono text-[11px] text-primary"
        >
          {part.text}
        </code>
      )
    }
    if (part.type === 'bold') {
      return (
        <strong key={idx} className="font-semibold text-foreground">
          {part.text}
        </strong>
      )
    }
    if (part.type === 'italic') {
      return (
        <em key={idx} className="italic text-foreground/90">
          {part.text}
        </em>
      )
    }
    return <React.Fragment key={idx}>{part.text}</React.Fragment>
  })
}

const isBulletLine = (line: string) =>
  line.startsWith('* ') || line.startsWith('- ')

const isNumberedLine = (line: string) => /^\d+\.\s/.test(line)

/**
 * Minimal markdown renderer for agent responses: headers, bullet lists,
 * numbered lists, mixed blocks, and inline bold/italic/code. Tolerates
 * partial content while a response is streaming in.
 */
export function MarkdownMessage({ content }: { content: string }) {
  const rawBlocks = content.split(/\n\n+/)

  return (
    <div className="space-y-3 font-sans leading-relaxed">
      {rawBlocks.map((block, blockIdx) => {
        const lines = block
          .split('\n')
          .map((l) => l.trim())
          .filter(Boolean)
        if (lines.length === 0) return null

        const firstLine = lines[0]

        if (firstLine.startsWith('#')) {
          const text = firstLine.replace(/^#+\s*/, '')
          return (
            <h4
              key={blockIdx}
              className="pt-1 font-heading text-sm font-semibold tracking-tight text-foreground sm:text-base"
            >
              {renderInlineParts(parseInline(text))}
            </h4>
          )
        }

        const isBulletList = lines.every(isBulletLine)
        if (isBulletList) {
          return (
            <ul key={blockIdx} className="my-1.5 space-y-1.5 pl-1">
              {lines.map((l, lIdx) => (
                <li
                  key={lIdx}
                  className="flex items-start gap-2 text-xs leading-relaxed text-card-foreground/90 sm:text-sm"
                >
                  <span className="mt-1.5 size-1.5 shrink-0 bg-primary" />
                  <span className="flex-1">
                    {renderInlineParts(parseInline(l.replace(/^[*\-]\s+/, '')))}
                  </span>
                </li>
              ))}
            </ul>
          )
        }

        const isNumberedList = lines.every(isNumberedLine)
        if (isNumberedList) {
          return (
            <ol key={blockIdx} className="my-1.5 space-y-1.5 pl-1">
              {lines.map((l, lIdx) => {
                const num = l.match(/^\d+/)?.[0]
                return (
                  <li
                    key={lIdx}
                    className="flex items-start gap-2 text-xs leading-relaxed text-card-foreground/90 sm:text-sm"
                  >
                    <span className="shrink-0 font-mono text-xs font-semibold text-primary">
                      {num}.
                    </span>
                    <span className="flex-1">
                      {renderInlineParts(parseInline(l.replace(/^\d+\.\s+/, '')))}
                    </span>
                  </li>
                )
              })}
            </ol>
          )
        }

        const hasListItems = lines.some(
          (l) => isBulletLine(l) || isNumberedLine(l)
        )
        if (hasListItems) {
          return (
            <div key={blockIdx} className="space-y-2">
              {lines.map((line, lineIdx) => {
                if (isBulletLine(line)) {
                  return (
                    <div
                      key={lineIdx}
                      className="flex items-start gap-2 pl-1 text-xs leading-relaxed text-card-foreground/90 sm:text-sm"
                    >
                      <span className="mt-1.5 size-1.5 shrink-0 bg-primary" />
                      <div className="flex-1">
                        {renderInlineParts(
                          parseInline(line.replace(/^[*\-]\s+/, ''))
                        )}
                      </div>
                    </div>
                  )
                }
                if (isNumberedLine(line)) {
                  const num = line.match(/^\d+/)?.[0]
                  return (
                    <div
                      key={lineIdx}
                      className="flex items-start gap-2 pl-1 text-xs leading-relaxed text-card-foreground/90 sm:text-sm"
                    >
                      <span className="shrink-0 font-mono text-xs font-semibold text-primary">
                        {num}.
                      </span>
                      <div className="flex-1">
                        {renderInlineParts(
                          parseInline(line.replace(/^\d+\.\s+/, ''))
                        )}
                      </div>
                    </div>
                  )
                }
                return (
                  <p
                    key={lineIdx}
                    className="text-xs leading-relaxed text-card-foreground/90 sm:text-sm"
                  >
                    {renderInlineParts(parseInline(line))}
                  </p>
                )
              })}
            </div>
          )
        }

        return (
          <p
            key={blockIdx}
            className="text-xs leading-relaxed text-card-foreground/90 sm:text-sm"
          >
            {renderInlineParts(parseInline(lines.join(' ')))}
          </p>
        )
      })}
    </div>
  )
}

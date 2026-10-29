import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Badge } from './ui/badge'
import { HoverMark } from '@/components/hover-mark'

interface Props {
  title: string
  description: string
  tags: readonly string[]
  link?: string
  isNew?: boolean
  onDeepDive?: () => void
}

export const ProjectCard = React.memo(function ProjectCard({
  title,
  description,
  tags,
  link,
  isNew,
  onDeepDive
}: Props) {
  return (
    <HoverMark
      as="li"
      label={link ? 'Open link' : undefined}
      disabled={!link}
      className="h-full border border-border bg-background/60 transition-colors duration-200 hover:border-primary/40"
      onClick={
        link
          ? (e) => {
              if ((e.target as HTMLElement).closest('a')) return
              window.open(link, '_blank', 'noopener,noreferrer')
            }
          : undefined
      }
    >
      <span
        aria-hidden
        className="absolute top-0 left-0 z-20 h-0.5 w-0 bg-primary transition-all duration-300 group-hover/mark:w-full"
      />
      <div className="flex h-full flex-col gap-3 px-4 py-6 sm:px-5">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-base font-medium transition-colors hover:text-primary"
            >
              {title}
              <ArrowUpRight className="size-3.5 opacity-40 transition-opacity group-hover/mark:opacity-100" />
            </a>
          ) : (
            <h3 className="text-base font-medium">{title}</h3>
          )}
          {isNew && <Badge variant="secondary">New</Badge>}
          {link && (
            <span className="hidden font-mono text-xs text-muted-foreground print:inline">
              {link
                .replace('https://', '')
                .replace('www.', '')
                .replace(/\/$/, '')}
            </span>
          )}
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>

        <div className="mt-auto flex flex-col gap-3 pt-3 sm:flex-row sm:items-end sm:justify-between">
          <ul className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <li
                key={tag}
                className="border border-border/60 bg-muted/30 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
              >
                {tag}
              </li>
            ))}
          </ul>

          {onDeepDive && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                onDeepDive()
              }}
              className="inline-flex shrink-0 items-center gap-1.5 self-start border border-border bg-background px-2.5 py-1.5 font-mono text-[11px] font-medium tracking-wide text-muted-foreground transition-all hover:border-primary/60 hover:bg-primary/5 hover:text-primary active:scale-95 sm:self-auto"
              aria-label={`View architecture details for ${title}`}
            >
              <span>[ Architecture ]</span>
            </button>
          )}
        </div>
      </div>
    </HoverMark>
  )
})

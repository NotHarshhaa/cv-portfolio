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
  isLast?: boolean
}

export const ProjectCard = React.memo(function ProjectCard({
  title,
  description,
  tags,
  link,
  isNew,
  isLast
}: Props) {
  return (
    <HoverMark
      as="li"
      label={link ? 'Open link' : undefined}
      disabled={!link}
      className={isLast ? undefined : 'border-b border-border'}
      onClick={
        link
          ? (e) => {
              if ((e.target as HTMLElement).closest('a')) return
              window.open(link, '_blank', 'noopener,noreferrer')
            }
          : undefined
      }
    >
      <div className="flex flex-col gap-4 px-4 py-7 sm:flex-row sm:items-start sm:justify-between sm:gap-10 sm:px-6 sm:py-8">
        <div className="min-w-0 flex-1 space-y-3">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-base font-medium"
              >
                {title}
                <ArrowUpRight className="size-3.5 opacity-40" />
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

          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>

          <ul className="flex flex-wrap gap-x-3 gap-y-1">
            {tags.map((tag) => (
              <li key={tag} className="text-xs text-muted-foreground/80">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </HoverMark>
  )
})

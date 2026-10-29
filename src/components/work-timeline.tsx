'use client'

import { ArrowUpRight } from 'lucide-react'
import { HoverMark } from '@/components/hover-mark'
import { cn } from '@/lib/utils'

interface Work {
  company: string
  link?: string
  badges: string[]
  jobs: {
    title: string
    start: string
    end: string
    description: string[]
  }[]
}

interface WorkTimelineProps {
  work: Work[]
}

export function WorkTimeline({ work }: WorkTimelineProps) {
  return (
    <ul>
      {work.map((workItem, index) => {
        const isLast = index === work.length - 1
        return (
          <HoverMark
            as="li"
            key={workItem.company}
            label={workItem.link ? 'Open link' : undefined}
            disabled={!workItem.link}
            className={cn(!isLast && 'border-b border-border')}
            onClick={
              workItem.link
                ? (e) => {
                    if ((e.target as HTMLElement).closest('a')) return
                    window.open(workItem.link, '_blank', 'noopener,noreferrer')
                  }
                : undefined
            }
          >
            {/* Timeline spine running from this node down to the next row */}
            {!isLast && (
              <span
                aria-hidden
                className="absolute top-[47px] bottom-0 left-[15px] hidden w-px bg-border sm:block"
              />
            )}
            <span
              aria-hidden
              className={cn(
                'absolute top-[43px] left-[11px] hidden size-2.5 border-2 border-primary sm:block',
                index === 0 ? 'bg-primary' : 'bg-background'
              )}
            />
            <div className="grid gap-6 px-4 py-8 sm:grid-cols-[11rem_1fr] sm:gap-10 sm:px-6 sm:py-10">
              <div>
                {workItem.link ? (
                  <a
                    href={workItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-base font-medium"
                  >
                    {workItem.company}
                    <ArrowUpRight className="size-3.5 opacity-40" />
                  </a>
                ) : (
                  <p className="text-base font-medium">{workItem.company}</p>
                )}
                {workItem.badges.length > 0 && (
                  <p className="mt-1 text-xs text-muted-foreground">
                    {workItem.badges.join(' · ')}
                  </p>
                )}
              </div>

              <div className="space-y-8">
                {workItem.jobs.map((job, jobIndex) => {
                  const isCurrent = /present/i.test(job.end)
                  return (
                    <div key={`${job.title}-${jobIndex}`}>
                      <div className="mb-3 flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                        <h4 className="text-base font-medium">{job.title}</h4>
                        <div className="flex shrink-0 items-center gap-2">
                          {isCurrent && (
                            <span className="inline-flex items-center gap-1.5 border border-primary/40 bg-primary/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-primary">
                              <span className="relative flex size-1.5">
                                <span
                                  aria-hidden
                                  className="absolute inline-flex size-full animate-ping bg-primary opacity-60"
                                />
                                <span
                                  aria-hidden
                                  className="relative inline-flex size-1.5 bg-primary"
                                />
                              </span>
                              Current
                            </span>
                          )}
                          <time className="font-mono text-xs text-muted-foreground tabular-nums">
                            {job.start} — {job.end}
                          </time>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {job.description.map((item, descIndex) => (
                          <li
                            key={descIndex}
                            className="text-sm leading-relaxed text-muted-foreground"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>
            </div>
          </HoverMark>
        )
      })}
    </ul>
  )
}

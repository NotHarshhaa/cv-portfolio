'use client'

import { ArrowUpRight } from 'lucide-react'

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
      {work.map((workItem, index) => (
        <li
          key={workItem.company}
          className={
            index < work.length - 1 ? 'border-b border-border' : undefined
          }
        >
          <div className="grid gap-6 px-4 py-8 sm:grid-cols-[11rem_1fr] sm:gap-10 sm:px-6 sm:py-10">
            <div>
              {workItem.link ? (
                <a
                  href={workItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-base font-medium transition-opacity hover:opacity-60"
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
              {workItem.jobs.map((job, jobIndex) => (
                <div key={jobIndex}>
                  <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <h4 className="text-base font-medium">{job.title}</h4>
                    <time
                      className="shrink-0 font-mono text-xs text-muted-foreground tabular-nums"
                      dateTime={`${job.start}/${job.end}`}
                    >
                      {job.start} — {job.end}
                    </time>
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
              ))}
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

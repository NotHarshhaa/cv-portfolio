'use client'

import React from 'react'
import { AwardIcon, ArrowUpRightIcon, CheckCircleIcon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import type { CertificationEntry } from '@/types'

interface CertificationsSectionProps {
  certifications?: CertificationEntry[]
}

export function CertificationsSection({ certifications }: CertificationsSectionProps) {
  if (!certifications || certifications.length === 0) return null

  return (
    <ul className="grid grid-cols-1 gap-px bg-border md:grid-cols-2">
      {certifications.map((cert) => (
        <li
          key={cert.title}
          className="group flex flex-col bg-background p-4 transition-colors hover:bg-muted/30 sm:p-5"
        >
          <div className="flex min-w-0 flex-1 items-start gap-3.5">
            <div className="flex size-9 shrink-0 items-center justify-center border border-border bg-muted/40 text-primary transition-colors group-hover:border-primary/40 group-hover:bg-primary/10">
              <AwardIcon className="size-4.5" />
            </div>

            <div className="min-w-0 flex-1 space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-sm font-semibold tracking-tight text-foreground sm:text-base">
                  {cert.title}
                </h3>
                {cert.badges?.map((b) => (
                  <Badge key={b} variant="secondary" className="font-mono text-[10px]">
                    {b}
                  </Badge>
                ))}
              </div>

              <p className="text-xs text-muted-foreground sm:text-sm">
                {cert.issuer}
              </p>

              {cert.skills && cert.skills.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="border border-border/60 bg-muted/30 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between gap-3 border-t border-border/60 pt-3">
            <span className="font-mono text-xs text-muted-foreground tabular-nums">
              {cert.issueDate}
            </span>
            {cert.credentialUrl && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-mono text-xs text-primary hover:underline"
                aria-label={`Verify credential for ${cert.title}`}
              >
                <CheckCircleIcon className="size-3 text-primary" />
                <span>Verify</span>
                <ArrowUpRightIcon className="size-3 opacity-60 transition-opacity group-hover:opacity-100" />
              </a>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}

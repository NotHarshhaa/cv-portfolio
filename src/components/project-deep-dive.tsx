'use client'

import React, { useState } from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Corners } from '@/components/frame'
import { ExternalLinkIcon, XIcon, CheckIcon, CopyIcon, LayersIcon } from 'lucide-react'
import type { Project } from '@/types'

interface ProjectDeepDiveProps {
  project: Project | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProjectDeepDive({
  project,
  open,
  onOpenChange
}: ProjectDeepDiveProps) {
  const [copied, setCopied] = useState(false)

  if (!project) return null

  const handleCopy = () => {
    if (project.link?.href) {
      void navigator.clipboard.writeText(project.link.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs duration-150 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          className="fixed inset-y-0 right-0 z-50 flex w-full max-w-xl flex-col border-l border-border bg-background/95 p-6 shadow-2xl backdrop-blur-md duration-200 outline-none sm:p-8 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right"
          aria-describedby="project-deep-dive-desc"
        >
          <Corners />

          {/* Header */}
          <div className="flex items-start justify-between gap-4 border-b border-border pb-5">
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                {project.category && (
                  <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                    {project.category}
                  </span>
                )}
                {project.isNew && <Badge variant="secondary">New</Badge>}
              </div>
              <DialogPrimitive.Title className="font-heading text-xl font-semibold tracking-tight sm:text-2xl">
                {project.title}
              </DialogPrimitive.Title>
            </div>

            <DialogPrimitive.Close asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                className="shrink-0"
                aria-label="Close deep dive"
              >
                <XIcon className="size-4" />
              </Button>
            </DialogPrimitive.Close>
          </div>

          {/* Scrollable Body */}
          <div className="flex-1 space-y-6 overflow-y-auto py-6 pr-1">
            {/* Overview */}
            <div className="space-y-2">
              <h3 className="font-mono text-xs font-semibold tracking-wider text-foreground uppercase">
                Overview
              </h3>
              <p
                id="project-deep-dive-desc"
                className="text-sm leading-relaxed text-muted-foreground"
              >
                {project.description}
              </p>
            </div>

            {/* Architecture Section */}
            {project.architecture && (
              <div className="space-y-2 rounded-none border border-border/80 bg-muted/30 p-4">
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase">
                  <LayersIcon className="size-3.5 text-primary" />
                  <span>Architecture & Infrastructure</span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.architecture}
                </p>
              </div>
            )}

            {/* Metrics */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="space-y-2">
                <h3 className="font-mono text-xs font-semibold tracking-wider text-foreground uppercase">
                  Key Metrics
                </h3>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {project.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="border border-border bg-card p-3 text-center"
                    >
                      <p className="font-mono text-lg font-semibold tabular-nums text-foreground sm:text-xl">
                        {metric.value}
                      </p>
                      <p className="mt-0.5 text-[11px] text-muted-foreground uppercase">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="space-y-2">
                <h3 className="font-mono text-xs font-semibold tracking-wider text-foreground uppercase">
                  Engineering Highlights
                </h3>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-1.5 size-1.5 shrink-0 bg-primary" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            <div className="space-y-2">
              <h3 className="font-mono text-xs font-semibold tracking-wider text-foreground uppercase">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopy}
              className="gap-1.5"
            >
              {copied ? (
                <>
                  <CheckIcon className="size-3.5 text-green-500" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <CopyIcon className="size-3.5" />
                  <span>Copy Link</span>
                </>
              )}
            </Button>

            {project.link?.href && (
              <Button size="sm" asChild className="gap-1.5">
                <a
                  href={project.link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Open Resource</span>
                  <ExternalLinkIcon className="size-3.5" />
                </a>
              </Button>
            )}
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}

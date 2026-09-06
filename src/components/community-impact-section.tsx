'use client'

import React from 'react'
import { BookOpenIcon, GitBranchIcon, UsersIcon, TrophyIcon, ArrowUpRightIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

const IMPACT_STATS = [
  {
    label: 'Global Readers',
    value: '250K+',
    description: 'Engineers reached worldwide across Hashnode & DEV.to',
    icon: UsersIcon
  },
  {
    label: 'Technical Guides',
    value: '120+',
    description: 'In-depth architecture blueprints and troubleshooting tutorials',
    icon: BookOpenIcon
  },
  {
    label: 'Open Source Repos',
    value: '40+',
    description: 'Production templates, Helm charts, and IaC blueprints',
    icon: GitBranchIcon
  },
  {
    label: 'Community Awards',
    value: 'Top Author',
    description: 'Recognized technical voice & DevOps ambassador',
    icon: TrophyIcon
  }
]

export function CommunityImpactSection() {
  return (
    <div className="space-y-6">
      {/* 4 Stat Cards */}
      <div className="grid grid-cols-2 border border-border md:grid-cols-4">
        {IMPACT_STATS.map((stat, index) => {
          const IconComponent = stat.icon
          return (
            <div
              key={stat.label}
              className={`p-4 sm:p-5 ${
                index % 2 === 0 ? 'border-r border-border' : ''
              } ${
                index < 2 ? 'border-b border-border md:border-b-0' : ''
              } ${index < 3 ? 'md:border-r md:border-border' : 'md:border-r-0'}`}
            >
              <div className="flex items-center justify-between text-muted-foreground mb-2">
                <IconComponent className="size-4 text-primary" />
                <span className="font-mono text-[10px] uppercase tracking-wider">
                  Impact
                </span>
              </div>
              <p className="font-mono text-2xl font-semibold tabular-nums text-foreground sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {stat.label}
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground/80 leading-relaxed">
                {stat.description}
              </p>
            </div>
          )
        })}
      </div>

      {/* Narrative & Channel links */}
      <div className="space-y-4 pt-2">
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          Dedicated to demystifying enterprise Platform Engineering, GitOps automation, and production Agentic AI systems through open-source blueprints and reproducible architectures. Championing developer experience, continuous learning, and practical production engineering for the global tech community.
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          <Button variant="outline" size="sm" asChild className="gap-1.5 font-mono text-xs">
            <a href="https://dev.to/notharshhaa" target="_blank" rel="noopener noreferrer">
              <span>DEV.to Profile</span>
              <ArrowUpRightIcon className="size-3 opacity-60" />
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild className="gap-1.5 font-mono text-xs">
            <a href="https://hashnode.com/@prodevopsguy" target="_blank" rel="noopener noreferrer">
              <span>Hashnode Blog</span>
              <ArrowUpRightIcon className="size-3 opacity-60" />
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild className="gap-1.5 font-mono text-xs">
            <a href="https://github.com/NotHarshhaa" target="_blank" rel="noopener noreferrer">
              <span>GitHub Repositories</span>
              <ArrowUpRightIcon className="size-3 opacity-60" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

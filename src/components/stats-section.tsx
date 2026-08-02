'use client'

import { RESUME_DATA } from '@/data/resume-data'

export function StatsSection() {
  const stats = [
    {
      label: 'Years',
      value: new Date().getFullYear() - 2020,
      description: 'Experience'
    },
    {
      label: 'Projects',
      value: RESUME_DATA.projects.length,
      description: 'Shipped'
    },
    {
      label: 'Companies',
      value: RESUME_DATA.work.length,
      description: 'Roles'
    },
    {
      label: 'Skills',
      value: RESUME_DATA.skills.length,
      description: 'Technologies'
    }
  ]

  return (
    <div className="grid grid-cols-2 border border-border md:grid-cols-4">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className={`px-4 py-5 ${
            index % 2 === 0 ? 'border-r border-border' : ''
          } ${
            index < 2 ? 'border-b border-border md:border-b-0' : ''
          } ${index < 3 ? 'md:border-r md:border-border' : 'md:border-r-0'}`}
        >
          <p className="font-mono text-2xl font-semibold tabular-nums tracking-tight sm:text-3xl">
            {stat.value}+
          </p>
          <p className="mt-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
            {stat.label}
          </p>
          <p className="mt-0.5 text-xs text-muted-foreground/80">
            {stat.description}
          </p>
        </div>
      ))}
    </div>
  )
}

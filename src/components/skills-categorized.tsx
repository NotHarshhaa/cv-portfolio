'use client'

import { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SkillsCategorizedProps {
  skills: string[]
}

const skillCategories: Record<string, string[]> = {
  'Platform Engineering': [
    'Platform Engineering',
    'Internal Developer Platforms',
    'Developer Experience',
    'GitOps',
    'ArgoCD'
  ],
  'Cloud Platforms': ['AWS', 'Azure', 'GCP', 'Cloud Infrastructure'],
  'Container & Orchestration': ['Kubernetes', 'Docker', 'Helm'],
  'Infrastructure as Code': [
    'Terraform',
    'Ansible',
    'Infrastructure as Code'
  ],
  'CI/CD Tools': [
    'Jenkins',
    'GitHub Actions',
    'GitLab CI',
    'Azure DevOps',
    'CI/CD'
  ],
  Observability: ['Prometheus', 'Grafana', 'Observability'],
  'AI Infrastructure & MLOps': [
    'MLOps',
    'LLMOps',
    'MLflow',
    'AI Infrastructure',
    'Generative AI',
    'RAG'
  ],
  'AI Agents & Agentic Systems': [
    'AI Agents',
    'Agentic AI Systems',
    'Model Context Protocol (MCP)',
    'Agent2Agent (A2A)',
    'LangGraph',
    'LangChain',
    'Prompt Engineering',
    'Context Engineering',
    'AI Automation'
  ],
  'Scripting & Languages': ['Python', 'Bash', 'Linux'],
  'Soft Skills': [
    'DevOps',
    'Open Source',
    'Community Engagement'
  ]
}

export function SkillsCategorized({ skills }: SkillsCategorizedProps) {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set([
      'Platform Engineering',
      'Cloud Platforms',
      'AI Infrastructure & MLOps',
      'AI Agents & Agentic Systems'
    ])
  )

  const categorizedSkills: Record<string, string[]> = {}
  const uncategorized: string[] = []

  skills.forEach((skill) => {
    let found = false
    for (const [category, categorySkills] of Object.entries(skillCategories)) {
      if (
        categorySkills.some(
          (catSkill) =>
            skill.toLowerCase().includes(catSkill.toLowerCase()) ||
            catSkill.toLowerCase().includes(skill.toLowerCase())
        )
      ) {
        if (!categorizedSkills[category]) {
          categorizedSkills[category] = []
        }
        categorizedSkills[category].push(skill)
        found = true
        break
      }
    }
    if (!found) {
      uncategorized.push(skill)
    }
  })

  const entries = Object.entries(categorizedSkills)
  if (uncategorized.length > 0) {
    entries.push(['Other Skills', uncategorized])
  }

  const toggleCategory = (category: string) => {
    const next = new Set(expandedCategories)
    if (next.has(category)) next.delete(category)
    else next.add(category)
    setExpandedCategories(next)
  }

  return (
    <ul className="-mx-4 border-t border-border sm:-mx-6">
      {entries.map(([category, categorySkills], index) => {
        const isOpen =
          category === 'Other Skills' || expandedCategories.has(category)
        const isLast = index === entries.length - 1

        return (
          <li
            key={category}
            className={cn(!isLast && 'border-b border-border')}
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition-colors hover:bg-muted/40 sm:px-6"
              onClick={() =>
                category !== 'Other Skills' && toggleCategory(category)
              }
              disabled={category === 'Other Skills'}
            >
              <span className="text-sm font-medium">{category}</span>
              {category !== 'Other Skills' &&
                (isOpen ? (
                  <ChevronUpIcon className="size-4 shrink-0 text-muted-foreground" />
                ) : (
                  <ChevronDownIcon className="size-4 shrink-0 text-muted-foreground" />
                ))}
            </button>
            {isOpen && (
              <ul className="flex flex-wrap gap-x-3 gap-y-1.5 px-4 pb-5 sm:px-6">
                {categorySkills.map((skill) => (
                  <li
                    key={skill}
                    className="text-xs text-muted-foreground/90 sm:text-sm"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            )}
          </li>
        )
      })}
    </ul>
  )
}

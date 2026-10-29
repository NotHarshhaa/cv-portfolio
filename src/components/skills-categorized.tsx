'use client'

import { useState, useMemo } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SkillsCategorizedProps {
  skills: string[]
}

const skillCategories: Record<string, string[]> = {
  'Platform Engineering & IDP': [
    'Platform Engineering',
    'Internal Developer Platforms (IDP)',
    'Internal Developer Platforms',
    'Backstage',
    'Developer Experience (DevEx)',
    'Developer Experience',
    'GitOps',
    'ArgoCD',
    'Self-Service Portals',
    'Golden Paths'
  ],
  'DevOps & CI/CD': [
    'DevOps',
    'CI/CD Pipelines',
    'CI/CD',
    'GitHub Actions',
    'Azure DevOps',
    'GitLab CI',
    'Jenkins',
    'Helm',
    'Argo Rollouts',
    'Release Automation'
  ],
  'AI Infrastructure & LLMOps': [
    'AI Infrastructure',
    'LLMOps',
    'MLOps',
    'vLLM',
    'Ollama',
    'MLflow',
    'Vector Databases (Qdrant/Milvus/pgvector)',
    'Vector Databases',
    'RAG Pipelines',
    'RAG Architecture',
    'RAG',
    'GPU Cluster Management',
    'GPU Orchestration'
  ],
  'GenAI, AI Agents & MCP': [
    'Generative AI',
    'AI Agents',
    'Agentic AI Systems',
    'Model Context Protocol (MCP)',
    'Agent2Agent (A2A)',
    'LangGraph',
    'LangChain',
    'Prompt Engineering',
    'Context Engineering',
    'Autonomous Workflows',
    'AI Automation'
  ],
  'AI Product Development': [
    'AI Product Development',
    'Full-Stack AI Apps',
    'FastAPI',
    'Next.js AI SDK',
    'Interactive AI Agents',
    'Tool Calling & Function Calling',
    'Semantic Search'
  ],
  'Cloud & Containers': [
    'Kubernetes (EKS/AKS)',
    'Kubernetes',
    'Docker',
    'AWS',
    'Azure',
    'GCP',
    'Karpenter',
    'Container Optimization',
    'Cloud Infrastructure'
  ],
  'Infrastructure as Code': [
    'Terraform',
    'OpenTofu',
    'Ansible',
    'Infrastructure as Code (IaC)',
    'Infrastructure as Code',
    'Terragrunt',
    'Policy as Code (OPA)'
  ],
  'Observability & SRE': [
    'Prometheus',
    'Grafana',
    'OpenTelemetry (OTel)',
    'Loki',
    'Alertmanager',
    'Incident Management',
    'Observability'
  ],
  'Languages & Scripting': [
    'Python',
    'Bash / Shell Scripting',
    'Bash',
    'Go (Golang)',
    'Linux Administration & Networking',
    'Linux',
    'REST & gRPC APIs'
  ],
  'Community & Open Source': [
    'Open Source Leadership',
    'Open Source',
    'Technical Writing',
    'Community Mentorship',
    'Community Engagement',
    'DevOps Blueprints'
  ]
}

export function SkillsCategorized({ skills }: SkillsCategorizedProps) {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set([
      'Platform Engineering & IDP',
      'DevOps & CI/CD',
      'AI Infrastructure & LLMOps',
      'GenAI, AI Agents & MCP',
      'AI Product Development'
    ])
  )

  const entries = useMemo(() => {
    const categorizedSkills: Record<string, string[]> = {}
    const uncategorized: string[] = []

    skills.forEach((skill) => {
      const normalized = skill.trim().toLowerCase()
      let matchedCategory: string | null = null

      // Pass 1: exact match
      for (const [category, categorySkills] of Object.entries(skillCategories)) {
        if (categorySkills.some((catSkill) => catSkill.toLowerCase() === normalized)) {
          matchedCategory = category
          break
        }
      }

      // Pass 2: fallback substring match if not exactly matched
      if (!matchedCategory) {
        for (const [category, categorySkills] of Object.entries(skillCategories)) {
          if (
            categorySkills.some(
              (catSkill) =>
                normalized.includes(catSkill.toLowerCase()) ||
                catSkill.toLowerCase().includes(normalized)
            )
          ) {
            matchedCategory = category
            break
          }
        }
      }

      if (matchedCategory) {
        if (!categorizedSkills[matchedCategory]) {
          categorizedSkills[matchedCategory] = []
        }
        categorizedSkills[matchedCategory].push(skill)
      } else {
        uncategorized.push(skill)
      }
    })

    const result = Object.entries(categorizedSkills)
    if (uncategorized.length > 0) {
      result.push(['Other Skills', uncategorized])
    }
    return result
  }, [skills])

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev)
      if (next.has(category)) next.delete(category)
      else next.add(category)
      return next
    })
  }

  return (
    <ul className="-mx-4 border-t border-border sm:-mx-6">
      {entries.map(([category, categorySkills], index) => {
        const isOther = category === 'Other Skills'
        const isOpen = isOther || expandedCategories.has(category)
        const isLast = index === entries.length - 1
        const sectionId = `skills-cat-${category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`

        return (
          <li
            key={category}
            className={cn(!isLast && 'border-b border-border')}
          >
            {isOther ? (
              <div className="flex w-full items-center gap-3 px-4 py-4 sm:px-6">
                <span className="font-mono text-[10px] tracking-wider text-muted-foreground/50 tabular-nums">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-sm font-medium">{category}</span>
                <span className="ml-auto font-mono text-[10px] text-muted-foreground/60 tabular-nums">
                  {categorySkills.length}
                </span>
              </div>
            ) : (
              <button
                type="button"
                className="group flex w-full items-center gap-3 px-4 py-4 text-left transition-colors hover:bg-muted/40 sm:px-6"
                onClick={() => toggleCategory(category)}
                aria-expanded={isOpen}
                aria-controls={sectionId}
              >
                <span className="font-mono text-[10px] tracking-wider text-muted-foreground/50 tabular-nums">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-sm font-medium transition-colors group-hover:text-foreground">
                  {category}
                </span>
                <span className="font-mono text-[10px] text-muted-foreground/60 tabular-nums">
                  ({categorySkills.length})
                </span>
                {isOpen ? (
                  <ChevronUpIcon className="ml-auto size-4 shrink-0 text-primary" />
                ) : (
                  <ChevronDownIcon className="ml-auto size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
                )}
              </button>
            )}
            {isOpen && (
              <ul
                id={sectionId}
                className="flex flex-wrap gap-1.5 px-4 pb-5 sm:px-6 sm:pl-[4.25rem]"
              >
                {categorySkills.map((skill) => (
                  <li
                    key={skill}
                    className="cursor-default border border-border/70 bg-muted/30 px-2 py-1 font-mono text-[10px] text-muted-foreground transition-colors hover:border-primary/50 hover:bg-primary/5 hover:text-foreground sm:text-[11px]"
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

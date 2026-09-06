'use client'

import React from 'react'
import { LayersIcon, CpuIcon, BotIcon, TerminalIcon, CheckCircle2Icon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

interface Pillar {
  id: string
  title: string
  subtitle: string
  icon: React.ComponentType<{ className?: string }>
  metric: { value: string; label: string }
  badge: string
  highlights: string[]
  tags: string[]
}

const PILLARS: Pillar[] = [
  {
    id: 'idp',
    title: 'Platform Engineering & IDP',
    subtitle: 'Self-Service Developer Portals & Golden Paths',
    icon: LayersIcon,
    badge: 'Core Focus',
    metric: { value: '< 2 Days', label: 'Squad Onboarding' },
    highlights: [
      'Self-service templates for one-click ephemeral preview environments with ArgoCD',
      'Unified developer portals and Backstage service catalog reducing cognitive load',
      'Standardized golden paths enforcing zero-drift declarative baselines',
      'Automated policy-as-code guardrails ensuring compliance without gatekeeping'
    ],
    tags: ['Platform Engineering', 'Internal Developer Platforms', 'ArgoCD', 'Backstage', 'GitOps']
  },
  {
    id: 'ai-infra',
    title: 'AI Infrastructure & LLMOps',
    subtitle: 'High-Throughput Model Serving & GPU Clusters',
    icon: CpuIcon,
    badge: 'LLMOps',
    metric: { value: 'vLLM / Ollama', label: 'Local Inference' },
    highlights: [
      'Production inference serving with vLLM, Ollama, and Triton on GPU Kubernetes nodes',
      'Dynamic GPU scheduling and node autoscaling with Karpenter',
      'Semantic search retrieval pipelines with Qdrant, Milvus, and pgvector embeddings',
      'Experiment tracking, prompt versioning, and latency benchmarks with MLflow'
    ],
    tags: ['AI Infrastructure', 'LLMOps', 'vLLM', 'Ollama', 'Qdrant', 'MLflow']
  },
  {
    id: 'agents-mcp',
    title: 'GenAI, AI Agents & MCP',
    subtitle: 'Autonomous Agentic Systems & Direct Tool Calling',
    icon: BotIcon,
    badge: 'Agentic AI',
    metric: { value: 'MCP Native', label: 'Tool Protocol' },
    highlights: [
      'Custom Model Context Protocol (MCP) servers exposing Kubernetes & cloud APIs to LLMs',
      'Stateful multi-agent orchestrations with LangGraph and memory checkpoints',
      'Autonomous incident diagnostics, root-cause investigation, and triage runbooks',
      'Context engineering, human-in-the-loop approvals, and multi-agent coordination'
    ],
    tags: ['Model Context Protocol (MCP)', 'LangGraph', 'AI Agents', 'GenAI', 'FastAPI']
  },
  {
    id: 'devops-cloud',
    title: 'DevOps & Multi-Cloud Automation',
    subtitle: 'Declarative IaC & Resilient Delivery Pipelines',
    icon: TerminalIcon,
    badge: 'Multi-Cloud',
    metric: { value: '65% Faster', label: 'Release Velocity' },
    highlights: [
      'Modular Terraform & OpenTofu architecture with multi-region DynamoDB state locks',
      'Keyless GitHub Actions & Jenkins pipelines utilizing OIDC role federation',
      'Production multi-tenant Amazon EKS & Azure AKS cluster administration',
      'Full distributed observability with Prometheus, Grafana, OpenTelemetry, and Loki'
    ],
    tags: ['Terraform', 'GitHub Actions', 'AWS', 'Azure', 'Kubernetes', 'OpenTelemetry']
  }
]

export function CorePillars() {
  return (
    <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
      {PILLARS.map((pillar) => {
        const IconComponent = pillar.icon
        return (
          <div
            key={pillar.id}
            className="flex flex-col justify-between bg-background p-6 transition-colors hover:bg-muted/20 sm:p-8"
          >
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center border border-border bg-muted/40 text-primary">
                    <IconComponent className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold tracking-tight text-foreground">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {pillar.subtitle}
                    </p>
                  </div>
                </div>
                <Badge variant="outline" className="font-mono text-[10px] tracking-wider uppercase">
                  {pillar.badge}
                </Badge>
              </div>

              {/* Metric Callout */}
              <div className="flex items-center justify-between border-y border-border/60 py-2.5">
                <span className="font-mono text-xs font-semibold text-primary">
                  {pillar.metric.value}
                </span>
                <span className="font-mono text-[11px] text-muted-foreground uppercase">
                  {pillar.metric.label}
                </span>
              </div>

              {/* Highlights */}
              <ul className="space-y-2">
                {pillar.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs leading-relaxed text-muted-foreground sm:text-sm"
                  >
                    <CheckCircle2Icon className="mt-0.5 size-3.5 shrink-0 text-primary/70" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-1.5 pt-2">
              {pillar.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-border/70 bg-muted/40 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

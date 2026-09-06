'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowUpRightIcon, BotIcon, LayersIcon, GlobeIcon, SparklesIcon } from 'lucide-react'

interface Product {
  id: string
  title: string
  tagline: string
  icon: React.ComponentType<{ className?: string }>
  badges: string[]
  architecture: string
  highlights: string[]
  metrics: { label: string; value: string }[]
  link: { label: string; href: string }
}

const FEATURED_PRODUCTS: Product[] = [
  {
    id: 'ai-agent-mcp',
    title: 'DevOps Incident & Diagnostics AI Agent',
    tagline: 'Autonomous Kubernetes incident triage powered by LangGraph & Model Context Protocol',
    icon: BotIcon,
    badges: ['AI Product', 'MCP Protocol', 'LangGraph'],
    architecture:
      'FastAPI orchestration runtime coupling a stateful LangGraph agent graph with a custom Model Context Protocol (MCP) server that securely queries live Kubernetes APIs, Prometheus metrics, and vector embeddings.',
    highlights: [
      'Automated root-cause analysis for CrashLoopBackOff, OOMKilled pods, and ingress network partitions',
      'Custom Model Context Protocol (MCP) server exposing cluster readouts directly as LLM tools',
      'Human-in-the-loop validation checkpoints before triggering any corrective patch commands'
    ],
    metrics: [
      { label: 'MTTD Reduction', value: '45%' },
      { label: 'Tool Protocol', value: 'MCP Native' },
      { label: 'Framework', value: 'LangGraph' }
    ],
    link: {
      label: 'View Repository on GitHub',
      href: 'https://github.com/NotHarshhaa'
    }
  },
  {
    id: 'idp-platform',
    title: 'Self-Service Internal Developer Platform (IDP)',
    tagline: 'Standardized golden paths and automated ephemeral environments for engineering squads',
    icon: LayersIcon,
    badges: ['Platform Product', 'ArgoCD', 'GitOps'],
    architecture:
      'Declarative developer portal combining Backstage service catalog, ArgoCD ApplicationSets, and Kubernetes Helm automation to deploy isolated ephemeral preview environments per Git pull request.',
    highlights: [
      'Self-service web portal enabling developers to spin up isolated preview stacks in under 2 minutes',
      'Standardized golden paths with pre-wired Prometheus metrics, Grafana dashboards, and Vault secrets',
      'Drastically compressed engineering onboarding from 3 weeks to under 2 days'
    ],
    metrics: [
      { label: 'Onboarding Time', value: '< 2 Days' },
      { label: 'Preview Deploy', value: '< 2 Mins' },
      { label: 'Reliability', value: '99.99%' }
    ],
    link: {
      label: 'Explore IDP Architecture',
      href: 'https://projects.prodevopsguytech.com'
    }
  },
  {
    id: 'blueprints-hub',
    title: 'Real-Time DevOps & Multi-Cloud Projects Hub',
    tagline: 'Enterprise production blueprints platform serving 250,000+ engineers worldwide',
    icon: GlobeIcon,
    badges: ['Live Platform', 'AWS / Azure', 'Terraform'],
    architecture:
      'Production platform featuring automated GitHub Actions CI/CD workflows, modular multi-provider Terraform workspaces, and interactive architectural diagrams for hands-on learning.',
    highlights: [
      'Curated 40+ production-grade blueprints across Kubernetes, GitOps, IaC, and observability',
      'Integrated security scanning using Trivy, SonarQube, and OWASP dependency verification',
      'Empowering a global community of over 250,000+ practicing DevOps and Platform engineers'
    ],
    metrics: [
      { label: 'Blueprints', value: '40+' },
      { label: 'Global Reach', value: '250k+' },
      { label: 'IaC Coverage', value: '100% Terraform' }
    ],
    link: {
      label: 'Launch Live Platform',
      href: 'https://projects.prodevopsguytech.com'
    }
  }
]

export function FeaturedProducts() {
  return (
    <div className="space-y-6">
      {FEATURED_PRODUCTS.map((product, index) => {
        const IconComponent = product.icon
        return (
          <div
            key={product.id}
            className={`space-y-5 px-4 py-6 sm:px-6 sm:py-8 ${
              index < FEATURED_PRODUCTS.length - 1 ? 'border-b border-border' : ''
            }`}
          >
            {/* Header & Badges */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center border border-border bg-muted/40 text-primary">
                  <IconComponent className="size-5" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-heading text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                      {product.title}
                    </h3>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                    {product.tagline}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1 sm:pt-0">
                {product.badges.map((b) => (
                  <Badge key={b} variant="secondary" className="font-mono text-[10px] tracking-wide">
                    {b}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Architecture description */}
            <div className="rounded-none border border-border/80 bg-muted/20 p-4">
              <div className="flex items-center gap-1.5 font-mono text-[11px] font-semibold tracking-wider text-foreground uppercase">
                <SparklesIcon className="size-3 text-primary" />
                <span>Architecture & Implementation</span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {product.architecture}
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-2">
              {product.metrics.map((metric) => (
                <div key={metric.label} className="border border-border bg-card p-3 text-center">
                  <p className="font-mono text-base font-semibold tabular-nums text-foreground sm:text-lg">
                    {metric.value}
                  </p>
                  <p className="mt-0.5 text-[10px] text-muted-foreground uppercase tracking-wider">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <ul className="space-y-1.5">
              {product.highlights.map((highlight, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground sm:text-sm"
                >
                  <span className="mt-1.5 size-1.5 shrink-0 bg-primary" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            {/* Link */}
            <div className="pt-2">
              <Button variant="outline" size="sm" asChild className="gap-1.5">
                <a href={product.link.href} target="_blank" rel="noopener noreferrer">
                  <span>{product.link.label}</span>
                  <ArrowUpRightIcon className="size-3.5 opacity-60" />
                </a>
              </Button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

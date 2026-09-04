'use client'

import React, { useState } from 'react'
import { Corners } from '@/components/frame'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  LayersIcon,
  GitBranchIcon,
  ServerIcon,
  CpuIcon,
  ActivityIcon,
  ExternalLinkIcon,
  CodeIcon,
  ShieldCheckIcon,
  ZapIcon,
  CheckCircle2Icon,
  TerminalIcon
} from 'lucide-react'

type LayerType = 'all' | 'cicd' | 'infra' | 'ai' | 'observability'

interface TopologyNode {
  id: string
  label: string
  sublabel: string
  layer: 'cicd' | 'infra' | 'ai' | 'observability'
  x: number
  y: number
  status: 'Synced' | 'Running' | 'Active' | 'Optimal'
  tech: string[]
  role: string
  specs: string[]
  codeSnippet: {
    language: string
    code: string
  }
  repoLink?: string
}

const TOPOLOGY_NODES: TopologyNode[] = [
  // Layer 1: CI/CD & GitOps
  {
    id: 'github-actions',
    label: 'GitHub Actions CI',
    sublabel: 'Matrix Build & Security Gates',
    layer: 'cicd',
    x: 40,
    y: 80,
    status: 'Synced',
    tech: ['GitHub Actions', 'Docker Buildx', 'Trivy', 'Cosign'],
    role: 'Automated continuous integration pipeline executing linters, security audits, container image builds, and cryptographic supply chain signing.',
    specs: [
      'Multi-stage Docker builds with persistent GitHub Actions cache',
      'Vulnerability scanning via Trivy with fail-on-critical thresholds',
      'Cosign signature verification before artifact registry ingestion'
    ],
    codeSnippet: {
      language: 'yaml',
      code: `name: Build & Security Audit
on: [push, pull_request]
jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Scan Vulnerabilities
        uses: aquasecurity/trivy-action@master
        with:
          severity: 'CRITICAL,HIGH'
          exit-code: '1'`
    },
    repoLink: 'https://github.com/NotHarshhaa'
  },
  {
    id: 'ecr-registry',
    label: 'Container Registry',
    sublabel: 'AWS ECR / GHCR Immutable Storage',
    layer: 'cicd',
    x: 230,
    y: 80,
    status: 'Running',
    tech: ['AWS ECR', 'OCI Artifacts', 'KMS Encryption'],
    role: 'Centralized immutable storage for microservice and LLM serving container images with KMS encryption and automated CVE scanning.',
    specs: [
      'KMS-managed customer master key encryption at rest',
      'Automated lifecycle policies purging untagged artifacts >14 days',
      'Replicated across multi-region EKS cluster endpoints'
    ],
    codeSnippet: {
      language: 'hcl',
      code: `resource "aws_ecr_repository" "agent_service" {
  name                 = "harshhaa/agent-runtime"
  image_tag_mutability = "IMMUTABLE"
  image_scanning_configuration {
    scan_on_push = true
  }
}`
    },
    repoLink: 'https://github.com/NotHarshhaa'
  },
  {
    id: 'argocd',
    label: 'ArgoCD GitOps',
    sublabel: 'Declarative State Controller',
    layer: 'cicd',
    x: 420,
    y: 80,
    status: 'Synced',
    tech: ['ArgoCD', 'Helm', 'Kustomize', 'GitOps'],
    role: 'Continuous delivery engine enforcing git-driven single source of truth for all Kubernetes clusters, preventing drift and enabling automated rollouts.',
    specs: [
      'App-of-Apps architectural hierarchy managing 50+ services',
      'Automated self-healing and zero-touch cluster synchronization',
      'Argo Rollouts integration for automated canary traffic shifting'
    ],
    codeSnippet: {
      language: 'yaml',
      code: `apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: platform-ingress
  namespace: argocd
spec:
  project: default
  source:
    repoURL: 'https://github.com/NotHarshhaa/k8s-gitops'
    targetRevision: HEAD
    path: apps/ingress
  destination:
    server: 'https://kubernetes.default.svc'
  syncPolicy:
    automated:
      prune: true
      selfHeal: true`
    },
    repoLink: 'https://github.com/NotHarshhaa'
  },

  // Layer 2: Cloud & Kubernetes Infrastructure
  {
    id: 'terraform-iac',
    label: 'Terraform / OpenTofu',
    sublabel: 'Multi-Cloud Infrastructure as Code',
    layer: 'infra',
    x: 40,
    y: 230,
    status: 'Synced',
    tech: ['Terraform', 'OpenTofu', 'AWS VPC', 'IAM OIDC'],
    role: 'Provisions compliant multi-region networking, EKS clusters, managed node groups, and zero-trust IAM OIDC mappings.',
    specs: [
      'Modularized VPC configuration across 3 Availability Zones',
      'S3 remote state backend with DynamoDB distributed locking',
      'Automated drift detection via scheduled GitHub Actions'
    ],
    codeSnippet: {
      language: 'hcl',
      code: `module "eks_cluster" {
  source          = "terraform-aws-modules/eks/aws"
  version         = "~> 20.0"
  cluster_name    = "prod-platform-cluster"
  cluster_version = "1.30"
  subnet_ids      = module.vpc.private_subnets
  enable_irsa     = true
}`
    },
    repoLink: 'https://github.com/NotHarshhaa'
  },
  {
    id: 'k8s-cluster',
    label: 'Production EKS / AKS',
    sublabel: 'Multi-Tenant K8s Engine',
    layer: 'infra',
    x: 230,
    y: 230,
    status: 'Running',
    tech: ['Kubernetes 1.30', 'AWS EKS', 'Karpenter', 'Cilium eBPF'],
    role: 'High-availability compute cluster orchestrating stateless web services, background workers, and GPU inference pods.',
    specs: [
      'Cilium eBPF CNI for lightning-fast container networking & L7 policy',
      'Karpenter autoscaling provisioning EC2 spot & on-demand in seconds',
      'Multi-tenant namespace isolation with hard CPU/Memory ResourceQuotas'
    ],
    codeSnippet: {
      language: 'yaml',
      code: `apiVersion: karpenter.sh/v1beta1
kind: NodePool
metadata:
  name: gpu-inference-pool
spec:
  template:
    spec:
      requirements:
        - key: "node.kubernetes.io/instance-type"
          operator: In
          values: ["g5.xlarge", "g5.2xlarge"]`
    },
    repoLink: 'https://github.com/NotHarshhaa'
  },
  {
    id: 'ingress-cilium',
    label: 'Cilium & Ingress-NGINX',
    sublabel: 'eBPF Routing & mTLS Gateway',
    layer: 'infra',
    x: 420,
    y: 230,
    status: 'Active',
    tech: ['Cilium', 'Ingress-NGINX', 'cert-manager', 'Let’s Encrypt'],
    role: 'Manages external ingress traffic, SSL termination, and fine-grained zero-trust pod network security policies at kernel level.',
    specs: [
      'Automated TLS certificate issuance & renewal via cert-manager',
      'DDoS mitigation and IP rate-limiting at edge ingress layer',
      'Full eBPF observability and packet flow tracing without sidecars'
    ],
    codeSnippet: {
      language: 'yaml',
      code: `apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: api-ingress
  annotations:
    cert-manager.io/cluster-issuer: letsencrypt-prod
spec:
  ingressClassName: nginx
  rules:
    - host: api.platform.internal
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: agent-gateway
                port:
                  number: 8000`
    },
    repoLink: 'https://github.com/NotHarshhaa'
  },

  // Layer 3: AI Agent & LLMOps Engine
  {
    id: 'langgraph-router',
    label: 'LangGraph Orchestrator',
    sublabel: 'Multi-Agent State Machine',
    layer: 'ai',
    x: 40,
    y: 380,
    status: 'Active',
    tech: ['LangGraph', 'Python 3.12', 'StateGraph', 'AsyncIO'],
    role: 'Orchestrates complex multi-agent workflows with state persistence, human-in-the-loop checkpoints, and dynamic tool invocation.',
    specs: [
      'Stateful checkpointing backed by PostgreSQL / Redis',
      'Dynamic routing between DevOps triage, code analysis, and query agents',
      'Deterministic error recovery and fallback retry policies'
    ],
    codeSnippet: {
      language: 'python',
      code: `from langgraph.graph import StateGraph, END
from typing import TypedDict, Annotated

class AgentState(TypedDict):
    query: str
    context: list[str]
    solution: str

workflow = StateGraph(AgentState)
workflow.add_node("retrieve", fetch_docs)
workflow.add_node("reason", agentic_reasoning)
workflow.add_edge("retrieve", "reason")
workflow.set_entry_point("retrieve")`
    },
    repoLink: 'https://github.com/NotHarshhaa'
  },
  {
    id: 'mcp-server',
    label: 'Model Context Protocol (MCP)',
    sublabel: 'Standardized Tool Interface',
    layer: 'ai',
    x: 230,
    y: 380,
    status: 'Optimal',
    tech: ['MCP SDK', 'FastAPI', 'Kubernetes API', 'Prometheus SDK'],
    role: 'Exposes cloud infrastructure APIs, log streams, and metrics to LLMs through secure, standardized protocol tools.',
    specs: [
      'Read-only Kubernetes pod logs and deployment status tools',
      'PromQL metric execution tools for automated incident diagnosis',
      'Granular permission scopes protecting production resources'
    ],
    codeSnippet: {
      language: 'python',
      code: `@mcp.tool()
async def query_cluster_status(namespace: str = "default") -> str:
    """Inspect pods and deployment health in real-time."""
    pods = k8s_client.list_namespaced_pod(namespace)
    return format_pod_health(pods.items)`
    },
    repoLink: 'https://github.com/NotHarshhaa'
  },
  {
    id: 'vector-inference',
    label: 'Vector DB & vLLM Serving',
    sublabel: 'Qdrant & GPU Inference Engine',
    layer: 'ai',
    x: 420,
    y: 380,
    status: 'Running',
    tech: ['Qdrant', 'vLLM', 'NVIDIA GPUs', 'PagedAttention'],
    role: 'High-throughput self-hosted model serving engine paired with low-latency vector similarity search for production RAG.',
    specs: [
      'Qdrant vector cluster with HNSW indexing and hybrid dense/sparse search',
      'vLLM high-concurrency serving with continuous batching & PagedAttention',
      'Direct GPU memory utilization metrics exposed to Prometheus'
    ],
    codeSnippet: {
      language: 'yaml',
      code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: vllm-inference
spec:
  template:
    spec:
      containers:
        - name: vllm
          image: vllm/vllm-openai:latest
          resources:
            limits:
              nvidia.com/gpu: "1"`
    },
    repoLink: 'https://github.com/NotHarshhaa'
  },

  // Layer 4: Observability & Telemetry
  {
    id: 'prometheus-otel',
    label: 'Prometheus & OpenTelemetry',
    sublabel: 'Metrics & Distributed Tracing',
    layer: 'observability',
    x: 130,
    y: 530,
    status: 'Running',
    tech: ['Prometheus Operator', 'OpenTelemetry', 'Alertmanager'],
    role: 'Scrapes container, node, and LLM latency metrics while collecting end-to-end distributed traces across agent pipelines.',
    specs: [
      'Custom Prometheus ServiceMonitors for agent token latency and error rates',
      'OpenTelemetry Collector traces capturing token throughput and tool latency',
      'Alertmanager alerting with Slack & PagerDuty webhook routing'
    ],
    codeSnippet: {
      language: 'yaml',
      code: `apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  name: agent-service-monitor
spec:
  selector:
    matchLabels:
      app: agent-gateway
  endpoints:
    - port: metrics
      interval: 15s`
    },
    repoLink: 'https://github.com/NotHarshhaa'
  },
  {
    id: 'grafana-sloth',
    label: 'Grafana Dashboards & SLOs',
    sublabel: 'SLO Tracking & Golden Signals',
    layer: 'observability',
    x: 330,
    y: 530,
    status: 'Active',
    tech: ['Grafana', 'Sloth SLOs', 'Loki Logs', 'Tempo Traces'],
    role: 'Unified single-pane-of-glass observability visualizing cluster health, agent throughput, error budgets, and system availability.',
    specs: [
      'Sloth SLO generation defining 99.9% availability error budgets',
      'Correlated log, trace, and metric drilldowns in Grafana Tempo/Loki',
      'Real-time P95/P99 latency tracking for API gateways and LLM serving'
    ],
    codeSnippet: {
      language: 'yaml',
      code: `version: "prometheus/v1"
service: "agent-gateway"
slos:
  - name: "requests-availability"
    objective: 99.9
    sli:
      events:
        error_query: sum(rate(http_requests_total{code=~"5.."}[5m]))
        total_query: sum(rate(http_requests_total[5m]))`
    },
    repoLink: 'https://github.com/NotHarshhaa'
  }
]

interface TopologyConnection {
  from: string
  to: string
  label?: string
}

const CONNECTIONS: TopologyConnection[] = [
  { from: 'github-actions', to: 'ecr-registry', label: 'Push Image' },
  { from: 'ecr-registry', to: 'argocd', label: 'Image Updated' },
  { from: 'argocd', to: 'k8s-cluster', label: 'GitOps Sync' },
  { from: 'terraform-iac', to: 'k8s-cluster', label: 'Provision EKS' },
  { from: 'k8s-cluster', to: 'ingress-cilium', label: 'Route Pods' },
  { from: 'ingress-cilium', to: 'langgraph-router', label: 'L7 Ingress' },
  { from: 'langgraph-router', to: 'mcp-server', label: 'Tool Exec' },
  { from: 'langgraph-router', to: 'vector-inference', label: 'RAG & Inference' },
  { from: 'k8s-cluster', to: 'prometheus-otel', label: 'Telemetry' },
  { from: 'vector-inference', to: 'prometheus-otel', label: 'Tokens/Sec' },
  { from: 'prometheus-otel', to: 'grafana-sloth', label: 'Alerts & Dashboards' }
]

export function ArchitectureVisualizer() {
  const [activeLayer, setActiveLayer] = useState<LayerType>('all')
  const [selectedNodeId, setSelectedNodeId] = useState<string>('k8s-cluster')

  const filteredNodes = TOPOLOGY_NODES.filter((node) => {
    if (activeLayer === 'all') return true
    return node.layer === activeLayer
  })

  const selectedNode =
    TOPOLOGY_NODES.find((n) => n.id === selectedNodeId) || TOPOLOGY_NODES[0]

  return (
    <div className="space-y-6">
      {/* Subheader & Layer Filters */}
      <div className="flex flex-col gap-4 border-b border-border pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="font-heading text-lg font-semibold tracking-tight sm:text-xl">
            Internal Developer Platform (IDP) & AI Agent Topology
          </h3>
          <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
            End-to-end production architecture: GitOps CI/CD → Kubernetes Multi-Cloud → Autonomous AI Agents → Observability.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
          <Button
            variant={activeLayer === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveLayer('all')}
            className="h-8 text-xs font-medium"
          >
            All Layers
          </Button>
          <Button
            variant={activeLayer === 'cicd' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveLayer('cicd')}
            className="h-8 gap-1 text-xs font-medium"
          >
            <GitBranchIcon className="size-3" />
            <span>GitOps CI/CD</span>
          </Button>
          <Button
            variant={activeLayer === 'infra' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveLayer('infra')}
            className="h-8 gap-1 text-xs font-medium"
          >
            <ServerIcon className="size-3" />
            <span>K8s & Cloud</span>
          </Button>
          <Button
            variant={activeLayer === 'ai' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveLayer('ai')}
            className="h-8 gap-1 text-xs font-medium"
          >
            <CpuIcon className="size-3" />
            <span>AI & LLMOps</span>
          </Button>
          <Button
            variant={activeLayer === 'observability' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveLayer('observability')}
            className="h-8 gap-1 text-xs font-medium"
          >
            <ActivityIcon className="size-3" />
            <span>Observability</span>
          </Button>
        </div>
      </div>

      {/* Main Grid: Interactive Canvas + Live Node Inspector */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Topology Interactive SVG Canvas */}
        <div className="relative border border-border bg-card/60 p-4 shadow-xs lg:col-span-7 xl:col-span-8">
          <Corners />

          <div className="mb-3 flex items-center justify-between font-mono text-[11px] text-muted-foreground">
            <span className="flex items-center gap-1.5 font-semibold text-foreground">
              <ZapIcon className="size-3 text-primary animate-pulse" />
              <span>LIVE CLOUD ARCHITECTURE CANVAS</span>
            </span>
            <span>Click any node to inspect manifest & specs</span>
          </div>

          <div className="relative overflow-x-auto rounded-none border border-border/70 bg-background/90 p-4">
            <svg
              viewBox="0 0 580 650"
              className="h-auto w-full min-w-[520px] max-w-full select-none"
            >
              <defs>
                {/* Flow Animation Marker */}
                <marker
                  id="arrow"
                  viewBox="0 0 10 10"
                  refX="6"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1 L 8 5 L 0 9 z" fill="currentColor" className="text-muted-foreground/60" />
                </marker>
                <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--foreground)" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="var(--foreground)" stopOpacity="0.2" />
                </linearGradient>
              </defs>

              {/* Layer Region Demarcations */}
              <g className="text-muted-foreground/15">
                <rect x="20" y="30" width="540" height="120" rx="0" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeDasharray="3 3" />
                <text x="35" y="52" className="fill-muted-foreground font-mono text-[10px] uppercase tracking-widest">
                  Layer 1: Continuous Delivery & GitOps Pipeline
                </text>

                <rect x="20" y="180" width="540" height="120" rx="0" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeDasharray="3 3" />
                <text x="35" y="202" className="fill-muted-foreground font-mono text-[10px] uppercase tracking-widest">
                  Layer 2: Multi-Cloud Kubernetes & Network Infrastructure
                </text>

                <rect x="20" y="330" width="540" height="120" rx="0" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeDasharray="3 3" />
                <text x="35" y="352" className="fill-muted-foreground font-mono text-[10px] uppercase tracking-widest">
                  Layer 3: Autonomous AI Agent & LLMOps Runtime
                </text>

                <rect x="20" y="480" width="540" height="130" rx="0" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeDasharray="3 3" />
                <text x="35" y="502" className="fill-muted-foreground font-mono text-[10px] uppercase tracking-widest">
                  Layer 4: Unified Observability, SLOs & Telemetry
                </text>
              </g>

              {/* Connecting Data Flow Lines */}
              <g>
                {CONNECTIONS.map((c, i) => {
                  const src = TOPOLOGY_NODES.find((n) => n.id === c.from)
                  const dst = TOPOLOGY_NODES.find((n) => n.id === c.to)
                  if (!src || !dst) return null

                  const isVisible =
                    activeLayer === 'all' ||
                    src.layer === activeLayer ||
                    dst.layer === activeLayer

                  const isHighlighted =
                    selectedNodeId === c.from || selectedNodeId === c.to

                  return (
                    <g key={i} className={`transition-opacity duration-200 ${isVisible ? 'opacity-100' : 'opacity-10'}`}>
                      <line
                        x1={src.x + 65}
                        y1={src.y + 25}
                        x2={dst.x + 65}
                        y2={dst.y + 25}
                        stroke={isHighlighted ? 'var(--foreground)' : 'var(--border)'}
                        strokeWidth={isHighlighted ? '2' : '1.2'}
                        strokeDasharray={isHighlighted ? '4 3' : '3 3'}
                        className={isHighlighted ? 'animate-pulse' : ''}
                        markerEnd="url(#arrow)"
                      />
                    </g>
                  )
                })}
              </g>

              {/* Topology Nodes */}
              {TOPOLOGY_NODES.map((node) => {
                const isSelected = selectedNodeId === node.id
                const isVisible = activeLayer === 'all' || node.layer === activeLayer

                return (
                  <g
                    key={node.id}
                    transform={`translate(${node.x}, ${node.y})`}
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`cursor-pointer transition-all duration-150 ${
                      isVisible ? 'opacity-100' : 'opacity-25'
                    }`}
                  >
                    {/* Node Box */}
                    <rect
                      x="0"
                      y="0"
                      width="130"
                      height="50"
                      fill={isSelected ? 'var(--background)' : 'var(--card)'}
                      stroke={isSelected ? 'var(--foreground)' : 'var(--border)'}
                      strokeWidth={isSelected ? '2' : '1'}
                      className="transition-colors hover:stroke-foreground"
                    />

                    {/* Active Accent Tag */}
                    {isSelected && (
                      <rect x="0" y="0" width="3" height="50" fill="var(--primary)" />
                    )}

                    {/* Node Text */}
                    <text
                      x="10"
                      y="20"
                      className="fill-foreground font-sans text-[11px] font-semibold tracking-tight"
                    >
                      {node.label.length > 18 ? node.label.slice(0, 16) + '…' : node.label}
                    </text>
                    <text
                      x="10"
                      y="34"
                      className="fill-muted-foreground font-mono text-[8.5px]"
                    >
                      {node.sublabel.length > 21 ? node.sublabel.slice(0, 19) + '…' : node.sublabel}
                    </text>

                    {/* Status Pill */}
                    <circle
                      cx="118"
                      cy="15"
                      r="3.5"
                      className={
                        node.status === 'Synced'
                          ? 'fill-emerald-500'
                          : node.status === 'Running'
                          ? 'fill-blue-500'
                          : 'fill-purple-500'
                      }
                    />
                  </g>
                )
              })}
            </svg>
          </div>
        </div>

        {/* Live Node Inspector Panel */}
        <div className="relative flex flex-col border border-border bg-card p-5 shadow-xs lg:col-span-5 xl:col-span-4">
          <Corners />

          <div className="flex items-center justify-between border-b border-border pb-3.5">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">
                Node Inspector
              </span>
              <span className="flex items-center gap-1 border border-emerald-500/30 bg-emerald-500/10 px-1.5 py-0.5 font-mono text-[9px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase">
                <CheckCircle2Icon className="size-2.5" />
                {selectedNode.status}
              </span>
            </div>
            <span className="font-mono text-[10px] text-muted-foreground">
              Layer: {selectedNode.layer.toUpperCase()}
            </span>
          </div>

          <div className="mt-4 space-y-4">
            <div>
              <h4 className="font-heading text-lg font-semibold tracking-tight">
                {selectedNode.label}
              </h4>
              <p className="mt-0.5 font-mono text-xs text-muted-foreground">
                {selectedNode.sublabel}
              </p>
            </div>

            <p className="text-xs leading-relaxed text-foreground/90 sm:text-sm">
              {selectedNode.role}
            </p>

            {/* Tech Stack Badges */}
            <div>
              <span className="font-mono text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                Technology Stack:
              </span>
              <div className="mt-1.5 flex flex-wrap gap-1">
                {selectedNode.tech.map((t) => (
                  <Badge key={t} variant="outline" className="font-mono text-[10px]">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Engineering Specifications */}
            <div>
              <span className="font-mono text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                Architectural Specifications:
              </span>
              <ul className="mt-1.5 space-y-1.5 text-xs text-muted-foreground">
                {selectedNode.specs.map((s, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-primary font-bold">›</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Live Code / Manifest Preview */}
            <div className="border border-border bg-muted/50 p-3">
              <div className="mb-2 flex items-center justify-between font-mono text-[10px] text-muted-foreground">
                <div className="flex items-center gap-1 text-primary">
                  <CodeIcon className="size-3" />
                  <span>Config Snippet ({selectedNode.codeSnippet.language})</span>
                </div>
              </div>
              <pre className="max-h-36 overflow-x-auto font-mono text-[11px] leading-relaxed text-foreground/90">
                <code>{selectedNode.codeSnippet.code}</code>
              </pre>
            </div>

            {/* Action Repository Link */}
            {selectedNode.repoLink && (
              <div className="pt-2">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full gap-1.5 font-mono text-xs tracking-wider uppercase"
                >
                  <a
                    href={selectedNode.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>View Repository Implementations</span>
                    <ExternalLinkIcon className="size-3" />
                  </a>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

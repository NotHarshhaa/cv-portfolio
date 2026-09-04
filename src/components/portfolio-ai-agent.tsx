'use client'

import React, { useState, useRef, useEffect } from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { Corners } from '@/components/frame'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  BotIcon,
  XIcon,
  SendIcon,
  CopyIcon,
  CheckIcon,
  RotateCcwIcon,
  SparklesIcon,
  ChevronRightIcon,
  ExternalLinkIcon,
  LayersIcon,
  TerminalIcon
} from 'lucide-react'
import { RESUME_DATA } from '@/data/resume-data'

interface Message {
  id: string
  role: 'user' | 'agent'
  content: string
  thinkingSteps?: string[]
  citedProjects?: { title: string; link: string; category?: string }[]
  timestamp: string
}

const PRESET_QUESTIONS = [
  {
    label: 'Kubernetes in Production',
    prompt: "What is Harshhaa's experience with Kubernetes in production?"
  },
  {
    label: 'Terraform & AWS Stack',
    prompt: 'Which projects involve Terraform and AWS?'
  },
  {
    label: 'LLMOps & LangGraph',
    prompt: 'Has he worked with LLMOps, LangGraph, or Model Context Protocol (MCP)?'
  },
  {
    label: 'GitOps & ArgoCD',
    prompt: 'How does Harshhaa handle CI/CD, GitOps, and ArgoCD pipelines?'
  },
  {
    label: 'Executive Summary',
    prompt: 'Can you summarize Harshhaa’s background, career trajectory, and core strengths?'
  }
]

// Pre-indexed knowledge synthesis engine
function generateAgentResponse(query: string): {
  content: string
  thinkingSteps: string[]
  citedProjects: { title: string; link: string; category?: string }[]
} {
  const q = query.toLowerCase()

  if (q.includes('kubernetes') || q.includes('k8s') || q.includes('container') || q.includes('pod')) {
    return {
      thinkingSteps: [
        'Parsing semantic intent: Kubernetes production architecture & container orchestration',
        'Filtering 41 repositories for EKS, AKS, Helm charts, and cluster hardening',
        'Extracting metrics from production workloads and cluster multi-tenancy'
      ],
      content: `**Harshhaa's Kubernetes & Container Orchestration Expertise:**

Harshhaa builds and operates enterprise-grade Kubernetes infrastructure across AWS (EKS) and Azure (AKS) with deep production focus on reliability, security, and developer velocity:

* **Production Clusters & Multi-Tenancy**: Engineered multi-cluster EKS/AKS environments with automated node provisioning, Karpenter autoscaling, Cilium eBPF networking, and strict network security policies.
* **GitOps & Delivery**: Automated zero-touch cluster synchronization using **ArgoCD**, declarative Helm/Kustomize charts, and canary progressive delivery via Argo Rollouts.
* **Service Mesh & Ingress**: Deployed Ingress-NGINX and Istio service mesh for mutual TLS, rate limiting, circuit breaking, and traffic shadowing.
* **Observability & Health**: Prometheus Operator, Grafana dashboards, Alertmanager PagerDuty routing, and OpenTelemetry collector daemonsets.

**Production Metrics**:
- Maintained 99.95%+ uptime on mission-critical microservice workloads.
- Automated node autoscaling reducing cloud compute spend by ~35%.`,
      citedProjects: [
        {
          title: '3-Tier Microservices on EKS',
          link: 'https://github.com/NotHarshhaa',
          category: 'Kubernetes'
        },
        {
          title: 'ArgoCD GitOps Production Blueprint',
          link: 'https://github.com/NotHarshhaa',
          category: 'CI/CD & GitOps'
        },
        {
          title: 'Multi-Cluster Service Mesh with Istio',
          link: 'https://github.com/NotHarshhaa',
          category: 'Cloud Native'
        }
      ]
    }
  }

  if (q.includes('terraform') || q.includes('aws') || q.includes('cloud') || q.includes('infrastructure as code') || q.includes('iac')) {
    return {
      thinkingSteps: [
        'Querying AWS VPC, Terraform modules, and Multi-Cloud IaC inventory',
        'Analyzing modular Terraform state management, DynamoDB locks, and remote backends',
        'Validating cost optimization & security compliance policies'
      ],
      content: `**Terraform & AWS Cloud Engineering:**

Harshhaa leverages **Terraform (and OpenTofu)** as the foundational Infrastructure as Code (IaC) layer to provision multi-region, compliant cloud estates:

* **AWS Architecture**: Deep proficiency with VPC peering, Transit Gateway, EKS, RDS PostgreSQL Multi-AZ, S3 lifecycle policies, IAM zero-trust roles with OIDC, CloudFront CDN, and Route53.
* **Reusable IaC Modules**: Designed battle-tested, versioned Terraform modules for VPCs, EKS clusters, and database tiers with automated ` + '`tflint`' + `, ` + '`checkov`' + `, and ` + '`tfsec`' + ` security scans in CI/CD.
* **Remote State & Governance**: S3 backend with DynamoDB state locking, workspace segregation for dev/stage/prod, and automated drift detection pipelines.
* **Multi-Cloud Capabilities**: In addition to AWS, Harshhaa has extensive Azure experience (AKS, Azure Virtual Networks, Blob Storage, Managed Identities).`,
      citedProjects: [
        {
          title: 'AWS Automated Multi-Region VPC with Terraform',
          link: 'https://github.com/NotHarshhaa',
          category: 'Infrastructure as Code'
        },
        {
          title: 'Complete EKS Cluster via Terraform & Helm',
          link: 'https://github.com/NotHarshhaa',
          category: 'AWS & Cloud'
        },
        {
          title: 'Zero-Trust IAM & OIDC Automation',
          link: 'https://github.com/NotHarshhaa',
          category: 'Cloud Security'
        }
      ]
    }
  }

  if (q.includes('llm') || q.includes('ai') || q.includes('agent') || q.includes('langgraph') || q.includes('mcp') || q.includes('rag')) {
    return {
      thinkingSteps: [
        'Accessing Agentic Systems & LLMOps knowledge graph',
        'Scanning LangGraph multi-agent architectures, MCP tools, and vector databases',
        'Evaluating model serving latency and inference infrastructure (vLLM, Ollama)'
      ],
      content: `**Agentic AI Systems & LLMOps Infrastructure:**

Harshhaa designs end-to-end infrastructure for autonomous AI agents and production LLM applications:

* **Agent Orchestration**: Builds multi-agent state machines using **LangGraph**, LangChain, and Python, implementing human-in-the-loop validation, memory checkpoints, and error recovery.
* **Model Context Protocol (MCP)**: Implements custom MCP servers exposing internal DevOps databases, Kubernetes APIs, and cloud logs directly to generative models as standard tools.
* **Vector DB & RAG Pipelines**: High-performance semantic search pipelines using Qdrant, Milvus, and pgvector with hybrid sparse/dense retrieval and re-ranking.
* **Model Serving & GPU Infra**: Deploys high-throughput self-hosted inference servers with **vLLM** and Ollama on GPU-accelerated Kubernetes nodes with paged attention optimization.`,
      citedProjects: [
        {
          title: 'Autonomous DevOps Incident Investigator Agent',
          link: 'https://github.com/NotHarshhaa',
          category: 'Agentic AI'
        },
        {
          title: 'Model Context Protocol (MCP) Cloud Tools Server',
          link: 'https://github.com/NotHarshhaa',
          category: 'LLMOps'
        },
        {
          title: 'Hybrid RAG Pipeline with Qdrant & FastAPI',
          link: 'https://github.com/NotHarshhaa',
          category: 'GenAI'
        }
      ]
    }
  }

  if (q.includes('gitops') || q.includes('argo') || q.includes('ci/cd') || q.includes('pipeline') || q.includes('jenkins') || q.includes('actions')) {
    return {
      thinkingSteps: [
        'Analyzing continuous delivery pipelines & GitOps specifications',
        'Checking GitHub Actions matrix workflows, security scanning, and image signing',
        'Inspecting ArgoCD application-of-applications deployment patterns'
      ],
      content: `**CI/CD & GitOps Delivery Strategy:**

Harshhaa advocates for zero-drift declarative continuous delivery:

* **Git as Single Source of Truth**: Uses **ArgoCD** with the App-of-Apps pattern, ensuring all cluster manifests, secrets (via Sealed Secrets / External Secrets Operator), and configs are version-controlled in Git.
* **GitHub Actions CI**: Robust workflows featuring matrix testing, Docker multi-stage builds with Buildx caching, Cosign image signing, and automated PR preview environments.
* **Security in Pipeline**: Shift-left security automation using Trivy (vulnerability scanning), SonarQube (code quality), Gitleaks (secret detection), and OpenSSF Scorecard compliance.`,
      citedProjects: [
        {
          title: 'Enterprise GitOps Pipeline with ArgoCD & GitHub Actions',
          link: 'https://github.com/NotHarshhaa',
          category: 'CI/CD'
        },
        {
          title: 'Secure Container Supply Chain with Cosign & Trivy',
          link: 'https://github.com/NotHarshhaa',
          category: 'DevSecOps'
        }
      ]
    }
  }

  // Default synthesis / general profile query
  return {
    thinkingSteps: [
      'Aggregating complete profile data across Platform, AI Infrastructure, and Cloud',
      'Correlating 41 open-source projects, community publications, and production roles',
      'Synthesizing core competencies for technical evaluator'
    ],
    content: `**Summary of Harshhaa Vardhan Reddy:**

* **Role**: Platform Engineer specializing in **Cloud Platforms**, **AI Infrastructure**, and **Agentic Systems**.
* **Location**: Hyderabad, India (open to remote & global opportunities).
* **Core Philosophy**: Building Internal Developer Platforms (IDPs) and intelligent agent automations that empower engineering teams to deploy safely and ship at scale.
* **Flagship Capabilities**:
  1. **Platform & Cloud**: Kubernetes (EKS/AKS), Terraform/OpenTofu, Docker, Helm, Cilium, AWS, Azure.
  2. **GitOps & Delivery**: ArgoCD, GitHub Actions, Jenkins, GitOps App-of-Apps, Canary Rollouts.
  3. **AI & LLMOps**: LangGraph, Model Context Protocol (MCP), Vector Search (Qdrant), vLLM, Agentic Workflows.
  4. **Observability**: Prometheus, Grafana, OpenTelemetry, Alertmanager, Sloth SLOs.
* **Track Record**: Author of **41+ open-source cloud-native projects**, platform engineering documentation, and hands-on production automation.`,
    citedProjects: [
      {
        title: 'Production Multi-Cloud IDP Blueprint',
        link: 'https://github.com/NotHarshhaa',
        category: 'Platform Engineering'
      },
      {
        title: 'Autonomous DevOps & Kubernetes Agent',
        link: 'https://github.com/NotHarshhaa',
        category: 'Agentic AI'
      }
    ]
  }
}

interface PortfolioAIAgentProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function PortfolioAIAgent({ open, onOpenChange }: PortfolioAIAgentProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'agent',
      content: `Hello! I am **Harshhaa's Portfolio Agent**.\n\nI have complete indexation of Harshhaa's **production experience**, **41 repositories**, **Kubernetes architectures**, **Terraform cloud setups**, and **Agentic AI systems**.\n\nSelect a preset inquiry below or type any question to evaluate his qualifications:`,
      timestamp: 'Ready'
    }
  ])
  const [input, setInput] = useState('')
  const [isThinking, setIsThinking] = useState(false)
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const messageCounterRef = useRef(0)

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [open])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isThinking])

  const handleSend = (textToSend?: string) => {
    const query = (textToSend ?? input).trim()
    if (!query || isThinking) return

    messageCounterRef.current += 1
    const userMsgId = `user-${messageCounterRef.current}`

    const userMessage: Message = {
      id: userMsgId,
      role: 'user',
      content: query,
      timestamp: 'Sent'
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsThinking(true)

    // Simulate agentic retrieval and reasoning
    setTimeout(() => {
      messageCounterRef.current += 1
      const agentMsgId = `agent-${messageCounterRef.current}`
      const response = generateAgentResponse(query)
      const agentMessage: Message = {
        id: agentMsgId,
        role: 'agent',
        content: response.content,
        thinkingSteps: response.thinkingSteps,
        citedProjects: response.citedProjects,
        timestamp: 'Generated'
      }
      setMessages((prev) => [...prev, agentMessage])
      setIsThinking(false)
    }, 700)
  }

  const handleCopy = (id: string, text: string) => {
    void navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const handleReset = () => {
    setMessages([
      {
        id: 'welcome-reset',
        role: 'agent',
        content: `Conversation buffer reset. How else can I assist in reviewing Harshhaa's platform engineering and AI background?`,
        timestamp: 'Ready'
      }
    ])
  }

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs duration-150 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          className="fixed inset-y-0 right-0 z-50 flex w-full max-w-2xl flex-col border-l border-border bg-background/95 font-sans shadow-2xl backdrop-blur-md duration-200 outline-none sm:max-w-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right right-scroll-bar-position"
          style={{ right: 'var(--removed-body-scroll-bar-size, 0px)' }}
          aria-describedby="portfolio-agent-desc"
        >
          <Corners />

          {/* Header */}
          <div className="flex items-center justify-between border-b border-border px-5 py-4 sm:px-6">
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center border border-primary/40 bg-primary/10 text-primary">
                <BotIcon className="size-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <DialogPrimitive.Title className="font-heading text-base font-semibold tracking-tight">
                    Ask Harshhaa’s Agent
                  </DialogPrimitive.Title>
                  <span className="flex items-center gap-1 border border-emerald-500/30 bg-emerald-500/10 px-1.5 py-0.2 font-mono text-[9px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase">
                    <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Online
                  </span>
                </div>
                <p id="portfolio-agent-desc" className="text-xs text-muted-foreground">
                  AI Context Engine: 41 Projects • Platform & LLMOps Architecture
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleReset}
                title="Reset conversation"
                aria-label="Reset conversation"
                className="size-8 text-muted-foreground hover:text-foreground"
              >
                <RotateCcwIcon className="size-3.5" />
              </Button>
              <DialogPrimitive.Close asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-8"
                  aria-label="Close Agent Drawer"
                >
                  <XIcon className="size-4" />
                </Button>
              </DialogPrimitive.Close>
            </div>
          </div>

          {/* Quick Prompt Chips */}
          <div className="border-b border-border bg-muted/40 px-5 py-2.5 sm:px-6">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs no-scrollbar">
              <span className="shrink-0 font-mono text-[10px] text-muted-foreground uppercase">
                Inquire:
              </span>
              {PRESET_QUESTIONS.map((q) => (
                <button
                  key={q.label}
                  type="button"
                  onClick={() => handleSend(q.prompt)}
                  className="inline-flex shrink-0 items-center gap-1 border border-border bg-background/80 px-2.5 py-1 text-xs text-muted-foreground transition-all hover:border-primary/50 hover:text-foreground hover:bg-muted"
                >
                  <SparklesIcon className="size-2.5 text-primary" />
                  <span>{q.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 space-y-4 overflow-y-auto p-5 sm:p-6">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col gap-1.5 ${
                  m.role === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground">
                  <span>{m.role === 'user' ? 'You' : 'Harshhaa Agent'}</span>
                  <span>•</span>
                  <span>{m.timestamp}</span>
                </div>

                <div
                  className={`relative max-w-[92%] border p-3.5 sm:p-4 text-xs sm:text-sm leading-relaxed ${
                    m.role === 'user'
                      ? 'border-primary/30 bg-primary/5 text-foreground'
                      : 'border-border bg-card text-card-foreground shadow-xs'
                  }`}
                >
                  {/* Agent Thinking Trace */}
                  {m.thinkingSteps && m.thinkingSteps.length > 0 && (
                    <div className="mb-3 space-y-1 border-b border-border pb-2.5 font-mono text-[11px] text-muted-foreground">
                      <div className="flex items-center gap-1.5 font-semibold text-primary">
                        <TerminalIcon className="size-3" />
                        <span>Execution Reasoning Trace</span>
                      </div>
                      {m.thinkingSteps.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-muted-foreground/80">
                          <span className="text-primary/70">›</span>
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Message Content */}
                  <div className="space-y-2 whitespace-pre-wrap font-sans">
                    {m.content.split('\n\n').map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>

                  {/* Cited Projects */}
                  {m.citedProjects && m.citedProjects.length > 0 && (
                    <div className="mt-3.5 border-t border-border pt-3">
                      <p className="mb-1.5 font-mono text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                        Referenced Repositories & Deployments:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {m.citedProjects.map((p, idx) => (
                          <a
                            key={idx}
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-1.5 border border-border bg-muted/40 px-2 py-1 text-[11px] font-mono text-foreground hover:border-primary/60 hover:bg-muted"
                          >
                            <LayersIcon className="size-3 text-primary" />
                            <span>{p.title}</span>
                            {p.category && (
                              <span className="text-[9px] text-muted-foreground">
                                [{p.category}]
                              </span>
                            )}
                            <ExternalLinkIcon className="size-2.5 opacity-60 group-hover:opacity-100" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Copy Button */}
                  {m.role === 'agent' && m.id !== 'welcome' && (
                    <div className="mt-3 flex justify-end border-t border-border/50 pt-2">
                      <button
                        type="button"
                        onClick={() => handleCopy(m.id, m.content)}
                        className="inline-flex items-center gap-1 font-mono text-[10px] text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {copiedId === m.id ? (
                          <>
                            <CheckIcon className="size-3 text-emerald-500" />
                            <span className="text-emerald-500">Copied</span>
                          </>
                        ) : (
                          <>
                            <CopyIcon className="size-3" />
                            <span>Copy response</span>
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isThinking && (
              <div className="flex flex-col items-start gap-1.5">
                <div className="text-[10px] font-mono text-muted-foreground">
                  Harshhaa Agent • Synthesizing...
                </div>
                <div className="flex items-center gap-2 border border-border bg-card px-4 py-3 text-xs text-muted-foreground">
                  <span className="size-2 rounded-full bg-primary animate-ping" />
                  <span className="font-mono">Analyzing architecture graph and project metrics...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Footer Input */}
          <div className="border-t border-border bg-background p-4 sm:p-5">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSend()
              }}
              className="flex items-center gap-2"
            >
              <div className="relative flex-1">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Kubernetes, Terraform, LLMOps, GitOps, or skills..."
                  disabled={isThinking}
                  className="w-full border border-border bg-muted/40 px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:bg-background focus:outline-none sm:text-sm font-sans"
                />
              </div>
              <Button
                type="submit"
                size="sm"
                disabled={!input.trim() || isThinking}
                className="h-10 gap-1.5 px-4 font-mono text-xs font-semibold uppercase"
              >
                <SendIcon className="size-3.5" />
                <span className="hidden sm:inline">Inquire</span>
              </Button>
            </form>
            <div className="mt-2 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
              <span>Press Enter to inquire</span>
              <span>Context: 41 Projects • IDP & AI Infrastructure</span>
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}

import { RESUME_DATA } from '@/data/resume-data'
import type { KnowledgeTopic, PresetQuestion } from './types'

export const PROJECT_COUNT = RESUME_DATA.projects.length

export const PRESET_QUESTIONS: PresetQuestion[] = [
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
    label: 'Certifications',
    prompt: 'Which certifications and credentials does Harshhaa hold?'
  },
  {
    label: 'Work Experience',
    prompt: "Walk me through Harshhaa's work experience and career trajectory."
  },
  {
    label: 'Executive Summary',
    prompt: 'Can you summarize Harshhaa’s background, career trajectory, and core strengths?'
  },
  {
    label: 'Contact & Links',
    prompt: 'How can I contact or reach Harshhaa?'
  }
]

const certLines = RESUME_DATA.certifications
  .map((cert) => `* **${cert.title}** — ${cert.issuer} (${cert.issueDate})`)
  .join('\n')

const workLines = RESUME_DATA.work
  .filter((item) => item.jobs.length > 0)
  .map((item) => {
    const job = item.jobs[0]
    return `* **${job.title}** @ ${item.company} (${job.start} — ${job.end})`
  })
  .join('\n')

export const KNOWLEDGE_TOPICS: KnowledgeTopic[] = [
  {
    id: 'kubernetes',
    keywords: [
      'kubernetes',
      'k8s',
      'eks',
      'aks',
      'container',
      'docker',
      'pod',
      'helm',
      'cluster'
    ],
    thinkingSteps: [
      'Parsing semantic intent: Kubernetes production architecture & container orchestration',
      `Filtering ${PROJECT_COUNT} repositories for EKS, AKS, Helm charts, and cluster hardening`,
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
        title: 'CI/CD on EKS using GitHub Actions',
        link: 'https://github.com/NotHarshhaa/CI-CD_EKS-GitHub_Actions',
        category: 'Kubernetes'
      },
      {
        title: 'Amazon EKS Cluster with Terraform',
        link: 'https://github.com/NotHarshhaa/eks-cluster-terraform',
        category: 'Kubernetes'
      },
      {
        title: 'Kubernetes Learning Path',
        link: 'https://github.com/NotHarshhaa/kubernetes-learning-path',
        category: 'Container Orchestration'
      }
    ],
    suggestions: [
      'How does Harshhaa handle CI/CD, GitOps, and ArgoCD pipelines?',
      'Which certifications and credentials does Harshhaa hold?',
      "Walk me through Harshhaa's work experience and career trajectory."
    ]
  },
  {
    id: 'iac-cloud',
    keywords: [
      'terraform',
      'aws',
      'azure',
      'cloud',
      'opentofu',
      'infrastructure as code',
      'iac',
      'vpc',
      's3',
      'iam'
    ],
    thinkingSteps: [
      'Querying AWS VPC, Terraform modules, and Multi-Cloud IaC inventory',
      'Analyzing modular Terraform state management, DynamoDB locks, and remote backends',
      'Validating cost optimization & security compliance policies'
    ],
    content: `**Terraform & AWS Cloud Engineering:**

Harshhaa leverages **Terraform (and OpenTofu)** as the foundational Infrastructure as Code (IaC) layer to provision multi-region, compliant cloud estates:

* **AWS Architecture**: Deep proficiency with VPC peering, Transit Gateway, EKS, RDS PostgreSQL Multi-AZ, S3 lifecycle policies, IAM zero-trust roles with OIDC, CloudFront CDN, and Route53.
* **Reusable IaC Modules**: Designed battle-tested, versioned Terraform modules for VPCs, EKS clusters, and database tiers with automated \`tflint\`, \`checkov\`, and \`tfsec\` security scans in CI/CD.
* **Remote State & Governance**: S3 backend with DynamoDB state locking, workspace segregation for dev/stage/prod, and automated drift detection pipelines.
* **Multi-Cloud Capabilities**: In addition to AWS, Harshhaa has extensive Azure experience (AKS, Azure Virtual Networks, Blob Storage, Managed Identities).`,
    citedProjects: [
      {
        title: 'AWS Terraform Workshop',
        link: 'https://github.com/NotHarshhaa/AWS-Terraform-Workshop',
        category: 'Infrastructure as Code'
      },
      {
        title: 'Amazon EKS Cluster with Terraform',
        link: 'https://github.com/NotHarshhaa/eks-cluster-terraform',
        category: 'AWS & Cloud'
      },
      {
        title: 'AWS Real-Time Projects',
        link: 'https://github.com/NotHarshhaa/AWS-Projects',
        category: 'Cloud Engineering'
      }
    ],
    suggestions: [
      "What is Harshhaa's experience with Kubernetes in production?",
      'Which certifications and credentials does Harshhaa hold?',
      'How can I contact or reach Harshhaa?'
    ]
  },
  {
    id: 'ai-llmops',
    keywords: [
      'llm',
      'ai',
      'agent',
      'agentic',
      'langgraph',
      'langchain',
      'mcp',
      'rag',
      'vector',
      'vllm',
      'ollama',
      'genai',
      'model context protocol'
    ],
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
        title: 'DevOps Incident & Diagnostics AI Agent',
        link: 'https://github.com/NotHarshhaa',
        category: 'Agentic AI'
      },
      {
        title: 'Real-Time DevOps Projects Hub',
        link: 'https://projects.prodevopsguytech.com',
        category: 'LLMOps'
      },
      {
        title: 'Ultimate DevOps & Cloud Docs Portal',
        link: 'https://docs.prodevopsguytech.com',
        category: 'GenAI'
      }
    ],
    suggestions: [
      'How does Harshhaa handle CI/CD, GitOps, and ArgoCD pipelines?',
      'Can you summarize Harshhaa’s background, career trajectory, and core strengths?',
      'How can I contact or reach Harshhaa?'
    ]
  },
  {
    id: 'cicd-gitops',
    keywords: [
      'gitops',
      'argo',
      'argocd',
      'ci/cd',
      'cicd',
      'pipeline',
      'jenkins',
      'github actions',
      'deployment',
      'devsecops'
    ],
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
        title: 'CI/CD on EKS using GitHub Actions',
        link: 'https://github.com/NotHarshhaa/CI-CD_EKS-GitHub_Actions',
        category: 'CI/CD'
      },
      {
        title: 'ECR to ECS Deployment with GitHub Actions',
        link: 'https://github.com/NotHarshhaa/tf-ecr-ecs-gh-deploy',
        category: 'CI/CD & Containers'
      },
      {
        title: 'DevOps Monitoring in a Box',
        link: 'https://github.com/NotHarshhaa/devops-monitoring-in-a-box',
        category: 'DevSecOps'
      }
    ],
    suggestions: [
      "What is Harshhaa's experience with Kubernetes in production?",
      'Has he worked with LLMOps, LangGraph, or Model Context Protocol (MCP)?',
      "Walk me through Harshhaa's work experience and career trajectory."
    ]
  },
  {
    id: 'observability',
    keywords: [
      'observability',
      'monitoring',
      'prometheus',
      'grafana',
      'opentelemetry',
      'otel',
      'loki',
      'alerting',
      'slo',
      'sre'
    ],
    thinkingSteps: [
      'Indexing metrics, logging, and tracing stacks across production estates',
      'Correlating SLO definitions, alert routing, and dashboards',
      'Measuring MTTD improvements from distributed tracing rollouts'
    ],
    content: `**Observability & SRE Practice:**

Harshhaa treats observability as a product, not an afterthought:

* **Metrics**: Prometheus Operator with Thanos-style long-term storage, recording rules, and Sloth-generated SLOs with multi-window burn-rate alerting.
* **Dashboards & Alerting**: Grafana dashboards-as-code provisioned via GitOps, with Alertmanager routing to PagerDuty and Slack escalation policies.
* **Logs & Traces**: Loki for aggregated logs and OpenTelemetry collectors for distributed traces across 80+ microservices.
* **Outcome**: Dropped Mean Time to Detection (MTTD) by **45%** and cut alert noise with actionable, runbook-linked alerts.`,
    citedProjects: [
      {
        title: 'DevOps Monitoring in a Box',
        link: 'https://github.com/NotHarshhaa/devops-monitoring-in-a-box',
        category: 'Observability'
      },
      {
        title: 'Real-Time DevOps Projects Hub',
        link: 'https://projects.prodevopsguytech.com',
        category: 'SRE'
      }
    ],
    suggestions: [
      "What is Harshhaa's experience with Kubernetes in production?",
      'Which projects involve Terraform and AWS?',
      'How can I contact or reach Harshhaa?'
    ]
  },
  {
    id: 'certifications',
    keywords: [
      'certification',
      'certifications',
      'certified',
      'cka',
      'credential',
      'certificate',
      'associate',
      'specialization'
    ],
    thinkingSteps: [
      'Retrieving verified credential registry',
      'Cross-checking issuers, dates, and verification URLs',
      'Mapping certifications to practical production domains'
    ],
    content: `**Verified Certifications & Credentials:**

${certLines}

Every credential above is linked to a public verification URL in the Certifications section of this page — no self-claimed badges.`,
    citedProjects: [],
    suggestions: [
      "Walk me through Harshhaa's work experience and career trajectory.",
      "What is Harshhaa's experience with Kubernetes in production?",
      'Which projects involve Terraform and AWS?'
    ]
  },
  {
    id: 'experience',
    keywords: [
      'experience',
      'career',
      'work',
      'job',
      'tcs',
      'ibm',
      'company',
      'companies',
      'role',
      'trajectory',
      'background',
      'years'
    ],
    thinkingSteps: [
      'Traversing employment timeline and role scopes',
      'Quantifying platform impact per engagement',
      'Synthesizing career trajectory narrative'
    ],
    content: `**Professional Experience Timeline:**

${workLines}

* **Focus at TCS**: Leading platform engineering — self-service IDP templates with ArgoCD, enterprise GitOps delivery (65% faster deployments), GenAI developer tooling, and FinOps-driven cost governance (28% monthly savings).
* **Focus at IBM**: Multi-tier AWS provisioning with Terraform, containerizing 25+ microservices, and EKS cluster automation.
* **Community Track**: Technical writer and community lead reaching **250k+ readers** through DEV.to and Hashnode.`,
    citedProjects: [
      {
        title: 'Real-Time DevOps Projects Hub',
        link: 'https://projects.prodevopsguytech.com',
        category: 'Platform Engineering'
      },
      {
        title: 'DevOps Repositories Central Hub',
        link: 'https://repos.prodevopsguytech.com',
        category: 'Open Source'
      }
    ],
    suggestions: [
      'Which certifications and credentials does Harshhaa hold?',
      'Can you summarize Harshhaa’s background, career trajectory, and core strengths?',
      'How can I contact or reach Harshhaa?'
    ]
  },
  {
    id: 'education',
    keywords: [
      'education',
      'university',
      'degree',
      'jntu',
      'bachelor',
      'college',
      'academic',
      'study'
    ],
    thinkingSteps: [
      'Fetching academic records',
      'Relating mechanical engineering foundations to systems thinking',
      'Compiling academic summary'
    ],
    content: `**Education:**

* **Jawaharlal Nehru Technological University Hyderabad (JNTUH)** — Bachelor of Technology, Mechanical Engineering (2015 — 2020).
* Built a strong quantitative foundation in engineering principles, systems dynamics, and algorithmic problem-solving — later pivoted into cloud infrastructure, automated delivery pipelines, and platform engineering.`,
    citedProjects: [],
    suggestions: [
      "Walk me through Harshhaa's work experience and career trajectory.",
      'Can you summarize Harshhaa’s background, career trajectory, and core strengths?',
      'How can I contact or reach Harshhaa?'
    ]
  },
  {
    id: 'community',
    keywords: [
      'community',
      'blog',
      'writing',
      'writer',
      'hashnode',
      'dev.to',
      'article',
      'open source',
      'opensource',
      'mentor',
      'readers'
    ],
    thinkingSteps: [
      'Aggregating publication metrics and community channels',
      'Counting open-source repositories and templates',
      'Summarizing community impact footprint'
    ],
    content: `**Open Source & Community Impact:**

* **250K+ global readers** reached through in-depth DevOps and platform engineering guides on DEV.to and Hashnode.
* **120+ technical guides** covering architecture blueprints and production troubleshooting.
* **40+ open-source repositories**: production templates, Helm charts, and IaC blueprints.
* Recognized as a **Top Author** and DevOps community ambassador; mentors engineers transitioning into platform and AI infrastructure roles.`,
    citedProjects: [
      {
        title: 'Real-Time DevOps Projects Hub',
        link: 'https://projects.prodevopsguytech.com',
        category: 'Community'
      },
      {
        title: 'Ultimate DevOps & Cloud Docs Portal',
        link: 'https://docs.prodevopsguytech.com',
        category: 'Open Source'
      }
    ],
    suggestions: [
      'Has he worked with LLMOps, LangGraph, or Model Context Protocol (MCP)?',
      'Which projects involve Terraform and AWS?',
      'How can I contact or reach Harshhaa?'
    ]
  },
  {
    id: 'contact',
    keywords: [
      'contact',
      'email',
      'phone',
      'reach',
      'hire',
      'resume',
      'cv',
      'linkedin',
      'telegram',
      'availability'
    ],
    thinkingSteps: [
      'Locating contact endpoints and professional profiles',
      'Validating email, phone, and social channel availability',
      'Compiling direct outreach options'
    ],
    content: `**Contact & Reach:**

* **Email**: ${RESUME_DATA.contact.email.at}
* **Phone**: ${RESUME_DATA.contact.tel.phoneNumber}
* **Location**: ${RESUME_DATA.location} (open to remote & global opportunities)
* **Profiles**: GitHub (NotHarshhaa), LinkedIn, Telegram, and his blog are linked in the contact buttons at the top of the page.
* **Portfolio & Links Hub**: ${RESUME_DATA.personalWebsiteUrl.url} and ${RESUME_DATA.contact.link.url}

The fastest way to reach him is email or LinkedIn.`,
    citedProjects: [],
    suggestions: [
      'Can you summarize Harshhaa’s background, career trajectory, and core strengths?',
      "Walk me through Harshhaa's work experience and career trajectory.",
      'Which certifications and credentials does Harshhaa hold?'
    ]
  }
]

/** Fallback synthesis used when no topic keyword matches. */
export const DEFAULT_TOPIC: KnowledgeTopic = {
  id: 'summary',
  keywords: [],
  thinkingSteps: [
    'Aggregating complete profile data across Platform, AI Infrastructure, and Cloud',
    `Correlating ${PROJECT_COUNT} open-source projects, community publications, and production roles`,
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
* **Track Record**: Author of **40+ open-source cloud-native projects**, platform engineering documentation, and hands-on production automation.`,
  citedProjects: [
    {
      title: 'Real-Time DevOps Projects Hub',
      link: 'https://projects.prodevopsguytech.com',
      category: 'Platform Engineering'
    },
    {
      title: 'DevOps Repositories Central Hub',
      link: 'https://repos.prodevopsguytech.com',
      category: 'Open Source'
    }
  ],
  suggestions: [
    "What is Harshhaa's experience with Kubernetes in production?",
    'Has he worked with LLMOps, LangGraph, or Model Context Protocol (MCP)?',
    'How can I contact or reach Harshhaa?'
  ]
}

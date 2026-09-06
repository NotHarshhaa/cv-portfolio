import { GitHubIcon, LinkedInIcon, TelegramIcon } from '@/components/icons'
import { LinkIcon } from 'lucide-react'

export const RESUME_DATA = {
  name: 'Harshhaa Vardhan Reddy',
  initials: 'HR',
  role: 'Platform Engineering • DevOps • AI Infrastructure • GenAI • AI Agents • MCP • LLMOps • AI Product Development',
  location: 'Hyderabad, India',
  locationLink: 'https://www.google.com/maps/place/Hyderabad',
  about:
    'Building scalable developer platforms, production AI infrastructure, autonomous AI agents, MCP ecosystems, and AI products.',
  summary: `Senior Platform & DevOps Engineer with 5+ years of hands-on experience engineering Internal Developer Platforms (IDPs), declarative infrastructure as code, enterprise DevOps delivery pipelines, production AI infrastructure, and autonomous AI agents.

Specializing in multi-cloud platform automation across AWS and Azure, Kubernetes orchestration, GitOps with ArgoCD, and developer experience workflows that dramatically accelerate software delivery cycles while maintaining 99.99% availability.

Pioneering modern AI Product Development, LLMOps, and Agentic Systems — building custom Model Context Protocol (MCP) servers, multi-agent workflows with LangGraph, high-throughput model inference serving with vLLM and Ollama, vector search retrieval pipelines, and end-to-end user-facing AI products.

Prolific open-source author and technical educator behind 40+ production blueprints, comprehensive documentation portals, and a global engineering community of over 250,000+ developers leveraging real-world DevOps and AI architectures.`,
  avatar: '/assets/avatar.png',
  personalWebsiteUrl: {
    name: 'Portfolio',
    url: 'https://harshhaareddy.com'
  },
  contact: {
    link: {
      name: 'Other Links',
      url: 'https://link.harshhaareddy.com'
    },
    email: {
      name: 'Email',
      at: 'harshhaa03@gmail.com'
    },
    tel: {
      name: 'Phone',
      phoneNumber: '+917995905634'
    },
    social: [
      {
        name: 'GitHub',
        url: 'https://github.com/NotHarshhaa',
        icon: GitHubIcon
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/harshhaa-vardhan-reddy',
        icon: LinkedInIcon
      },
      {
        name: 'Telegram',
        url: 'https://t.me/prodevopsguy',
        icon: TelegramIcon
      },
      {
        name: 'Blog',
        url: 'https://blog.harshhaareddy.com',
        icon: LinkIcon
      }
    ]
  },
  education: [
    {
      school: 'Jawaharlal Nehru Technological University Hyderabad (JNTUH)',
      degree: 'Bachelor of Technology, Mechanical Engineering',
      start: 'Jul, 2015',
      end: 'Jun, 2020',
      description: [
        'Built a strong quantitative foundation in engineering principles, systems dynamics, and algorithmic problem-solving.',
        'Pivoted computational modeling and systems logic into cloud infrastructure, automated delivery pipelines, and platform engineering.',
        'Led hands-on technical workshops and collaborative engineering initiatives, fostering an enduring commitment to open-source software delivery.'
      ]
    }
  ],
  work: [
    {
      company: 'Tata Consultancy Services',
      link: 'https://www.tcs.com',
      badges: ['Hybrid', 'Platform & AI Engineering'],
      jobs: [
        {
          title: 'Lead DevOps & Platform Engineer',
          start: 'Mar, 2023',
          end: 'Present',
          description: [
            'Architected and implemented self-service Internal Developer Platform (IDP) templates with ArgoCD and Kubernetes, enabling squads to spin up ephemeral preview environments in minutes and reducing developer onboarding from 3 weeks to under 2 days.',
            'Engineered enterprise GitOps CI/CD delivery pipelines using GitHub Actions, ArgoCD, and Helm across multi-region AWS and Azure estates, accelerating deployment frequency by 65% while keeping deployment failure rates under 0.1%.',
            'Spearheaded internal GenAI developer tools and custom Model Context Protocol (MCP) servers, enabling engineering teams to inspect Kubernetes cluster health and cloud resources using natural language agents.',
            'Provisioned scalable AI infrastructure and LLMOps pipelines for local LLM inference (vLLM/Ollama) and embedding models with optimized container runtimes and GPU cluster scheduling.',
            'Implemented distributed observability and SRE monitoring across 80+ microservices with Prometheus, Grafana, OpenTelemetry, and Loki, dropping Mean Time to Detection (MTTD) by 45%.',
            'Governed multi-account AWS and Azure infrastructure via modular Terraform and policy-as-code, executing FinOps resource rightsizing that yielded 28% monthly cloud cost savings.'
          ]
        }
      ]
    },
    {
      company: 'IBM',
      link: 'https://www.ibm.com',
      badges: ['Remote', 'Cloud & DevOps'],
      jobs: [
        {
          title: 'DevOps & Cloud Engineer',
          start: 'Dec, 2021',
          end: 'Feb, 2023',
          description: [
            'Automated multi-tier AWS cloud infrastructure provisioning (VPCs, EKS clusters, RDS Multi-AZ, ALB) using modular Terraform with DynamoDB state locking, eliminating configuration drift.',
            'Containerized 25+ microservices with multi-stage Docker builds, shrinking artifact image payloads by 65% and significantly accelerating Jenkins automated build and test cycles.',
            'Configured AWS EKS cluster networking, IAM Roles for Service Accounts (IRSA), ingress controllers, and Horizontal Pod Autoscalers (HPA) for high-traffic services.',
            'Automated build, test, and release artifact lifecycles with Jenkins and AWS ECR, integrating automated container vulnerability scanning and blue/green deployment patterns.',
            'Established SRE disaster recovery runbooks and CloudWatch automated alarms with SNS paging, sustaining 99.95% system uptime across client workloads.'
          ]
        }
      ]
    },
    {
      company: 'DEV Community',
      link: 'https://dev.to/notharshhaa',
      badges: ['Community', 'Top Author'],
      jobs: [
        {
          title: 'DevOps & AI Technical Writer / Community Lead',
          start: 'Aug, 2023',
          end: 'Present',
          description: [
            'Authored deep-dive technical articles on DevOps automation, Kubernetes cluster administration, Terraform, GenAI agents, and Model Context Protocol (MCP).',
            'Recognized as a Top Author and Community Leader with over 150,000+ reads and thousands of community discussions on real-world platform patterns.',
            'Created step-by-step hands-on tutorials helping engineers transition from traditional operations to modern Platform Engineering and AI systems.'
          ]
        }
      ]
    },
    {
      company: 'Hashnode',
      link: 'https://hashnode.com/@prodevopsguy',
      badges: ['Community', 'Ambassador'],
      jobs: [
        {
          title: 'Platform Engineering & AI Content Creator',
          start: 'Mar, 2022',
          end: 'Present',
          description: [
            'Published comprehensive architectural guides on GitOps, ArgoCD, LLMOps, autonomous AI agents, and production multi-cloud deployments.',
            'Cultivated a dedicated readership of 100,000+ engineers, delivering production-ready snippets, architecture diagrams, and open-source blueprints.',
            'Organized community learning challenges around Kubernetes, Terraform IaC, and emerging Agentic AI tooling.'
          ]
        }
      ]
    }
  ],
  skills: [
    // Platform Engineering & IDP
    'Platform Engineering',
    'Internal Developer Platforms (IDP)',
    'Backstage',
    'Developer Experience (DevEx)',
    'GitOps',
    'ArgoCD',
    'Self-Service Portals',
    'Golden Paths',

    // DevOps & CI/CD
    'DevOps',
    'CI/CD Pipelines',
    'GitHub Actions',
    'Azure DevOps',
    'GitLab CI',
    'Jenkins',
    'Helm',
    'Argo Rollouts',
    'Release Automation',

    // AI Infrastructure & LLMOps
    'AI Infrastructure',
    'LLMOps',
    'MLOps',
    'vLLM',
    'Ollama',
    'MLflow',
    'Vector Databases (Qdrant/Milvus/pgvector)',
    'RAG Pipelines',
    'GPU Cluster Management',

    // GenAI, AI Agents & MCP
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
    'AI Automation',

    // AI Product Development
    'AI Product Development',
    'Full-Stack AI Apps',
    'FastAPI',
    'Next.js AI SDK',
    'Interactive AI Agents',
    'Tool Calling & Function Calling',
    'Semantic Search',

    // Cloud & Containers
    'Kubernetes (EKS/AKS)',
    'Docker',
    'AWS',
    'Azure',
    'GCP',
    'Karpenter',
    'Container Optimization',
    'Cloud Infrastructure',

    // Infrastructure as Code
    'Terraform',
    'OpenTofu',
    'Ansible',
    'Infrastructure as Code (IaC)',
    'Terragrunt',
    'Policy as Code (OPA)',

    // Observability & SRE
    'Prometheus',
    'Grafana',
    'OpenTelemetry (OTel)',
    'Loki',
    'Alertmanager',
    'Incident Management',
    'Observability',

    // Languages & Scripting
    'Python',
    'Bash / Shell Scripting',
    'Go (Golang)',
    'Linux Administration & Networking',
    'REST & gRPC APIs',

    // Community & Open Source
    'Open Source Leadership',
    'Technical Writing',
    'Community Mentorship',
    'DevOps Blueprints'
  ],
  projects: [
    {
      title: 'Real-Time DevOps Projects Hub',
      techStack: ['AWS', 'Terraform', 'Docker', 'Kubernetes', 'DevOps', 'ArgoCD'],
      description:
        'A dedicated platform featuring real-time enterprise DevOps & Cloud projects, spanning CI/CD, Kubernetes orchestration, Terraform IaC, and SRE monitoring.',
      link: {
        label: 'projects.prodevopsguytech.com',
        href: 'https://projects.prodevopsguytech.com'
      },
      isNew: true,
      category: 'Platform & IDP',
      architecture:
        'Next.js web application deployed via automated GitHub Actions CI/CD workflows, backed by modular Terraform configurations for AWS & Azure multi-cloud sandbox environments.',
      highlights: [
        'Curated 40+ production-grade DevOps & Cloud project blueprints',
        'Complete end-to-end IaC pipelines using Terraform and Ansible',
        'Container orchestration guides with Kubernetes and Helm chart configurations',
        'Full observability integrations with Prometheus, Grafana, and Loki'
      ],
      metrics: [
        { label: 'Projects', value: '40+' },
        { label: 'Cloud Providers', value: 'AWS / Azure' },
        { label: 'Automation', value: '100% CI/CD' }
      ]
    },
    {
      title: 'DevOps Incident & Diagnostics AI Agent',
      techStack: ['Python', 'LangGraph', 'MCP', 'Kubernetes', 'FastAPI', 'LLMOps'],
      description:
        'Autonomous AI agent powered by LangGraph and Model Context Protocol (MCP) to troubleshoot Kubernetes pod failures, inspect cluster logs, and formulate remediation plans.',
      link: {
        label: 'github.com/NotHarshhaa',
        href: 'https://github.com/NotHarshhaa'
      },
      isNew: true,
      category: 'AI Agents & MCP',
      architecture:
        'FastAPI orchestration server integrating LangGraph state machine, local vLLM / Ollama inference, and a custom MCP server connecting directly to Kubernetes API and Prometheus metrics.',
      highlights: [
        'Autonomous root cause analysis for CrashLoopBackOff and OOMKilled incidents',
        'Custom MCP server exposing cluster readouts, logs, and metrics to LLM tools',
        'Multi-step reasoning with human-in-the-loop remediation approval checkpoints',
        'Semantic log parsing and anomaly detection with vector embeddings'
      ],
      metrics: [
        { label: 'MTTD Reduction', value: '45%' },
        { label: 'Protocol', value: 'MCP Native' },
        { label: 'Framework', value: 'LangGraph' }
      ]
    },
    {
      title: 'Ultimate DevOps & Cloud Docs Portal',
      techStack: ['AWS', 'Azure', 'DevOps', 'Docs', 'Platform Engineering'],
      description:
        '900+ handpicked resources, architecture blueprints, and docs for AWS, Azure, and DevOps — learning content for engineers at all levels.',
      link: {
        label: 'docs.prodevopsguytech.com',
        href: 'https://docs.prodevopsguytech.com'
      },
      isNew: true,
      category: 'Knowledge Platform',
      architecture:
        'Automated documentation portal indexed by topic with CI/CD content validation, automated link integrity checking, and markdown parsing.',
      highlights: [
        'Comprehensive documentation hub with 900+ handpicked engineering resources',
        'Structured learning paths for Platform Engineers, DevOps Engineers, and SREs',
        'Interactive architecture diagrams and cheatsheets for rapid reference'
      ],
      metrics: [
        { label: 'Resources', value: '900+' },
        { label: 'Topics', value: '25+' },
        { label: 'Audience', value: 'Global Engineers' }
      ]
    },
    {
      title: 'DevOps Repositories Central Hub',
      techStack: ['GitHub', 'DevOps', 'Terraform', 'Automation'],
      description:
        'Major repositories curated and organized — from automation scripts to infra as code to interview prep.',
      link: {
        label: 'repos.prodevopsguytech.com',
        href: 'https://repos.prodevopsguytech.com'
      },
      isNew: true,
      category: 'Open Source Hub',
      architecture:
        'Static catalog powered by GitHub API webhooks and automated metadata synchronization to showcase open-source repositories and scripts.',
      highlights: [
        'Catalog of open-source automation scripts and Terraform modules',
        'Categorized by Infrastructure as Code, CI/CD, Containerization, and Security',
        'Direct links to cloneable starter repos and deployment templates'
      ],
      metrics: [
        { label: 'Repositories', value: '30+' },
        { label: 'License', value: 'MIT' }
      ]
    },
    {
      title: 'DevOps Real-Time Projects',
      techStack: ['DevOps', 'Projects', 'Kubernetes', 'CI/CD'],
      description:
        'Beginner → advanced real-world DevOps projects for hands-on learning with production architectures.',
      link: {
        label: 'github.com/NotHarshhaa/DevOps-Projects',
        href: 'https://github.com/NotHarshhaa/DevOps-Projects'
      },
      isNew: true,
      category: 'Hands-on Repository',
      architecture:
        'Monorepo containing end-to-end DevOps project implementations with Dockerfiles, Helm charts, Jenkinsfiles, and GitHub Actions workflows.',
      highlights: [
        'Complete three-tier microservice architectures deployed on Kubernetes',
        'Automated security scanning with SonarQube, Trivy, and OWASP Dependency-Check',
        'GitOps deployment pipelines using ArgoCD and automated canary releases'
      ],
      metrics: [
        { label: 'Projects', value: '20+' },
        { label: 'Pipelines', value: 'GitHub Actions / Jenkins' }
      ]
    },
    {
      title: 'AWS Real-Time Projects',
      techStack: ['AWS', 'DevOps', 'Terraform', 'EKS'],
      description:
        'Production-grade AWS deployments and hands-on cloud projects for platform engineering and certification prep.',
      link: {
        label: 'github.com/NotHarshhaa/AWS-Projects',
        href: 'https://github.com/NotHarshhaa/AWS-Projects'
      },
      isNew: true,
      category: 'Cloud Engineering',
      architecture:
        'AWS infrastructure blueprints provisioned via Terraform modules spanning VPCs, EKS clusters, ECS Fargate, ALB, RDS, and CloudWatch alarms.',
      highlights: [
        'High-availability multi-AZ VPC architecture with private subnets and NAT Gateways',
        'Production EKS cluster deployment with managed node groups and IAM Roles for Service Accounts (IRSA)',
        'Serverless microservices with AWS Lambda, API Gateway, and DynamoDB'
      ],
      metrics: [
        { label: 'AWS Services', value: '15+' },
        { label: 'IaC Tool', value: 'Terraform' }
      ]
    },
    {
      title: 'Into the DevOps',
      techStack: ['DevOps', 'Interview', 'Kubernetes', 'Linux'],
      description:
        'Comprehensive DevOps interview guide covering Linux, AWS, Kubernetes, Terraform, Docker, and platform design.',
      link: {
        label: 'github.com/NotHarshhaa/into-the-devops',
        href: 'https://github.com/NotHarshhaa/into-the-devops'
      },
      isNew: true,
      category: 'Technical Guide',
      architecture:
        'Curated technical knowledge base covering real-world scenario questions, architecture trade-offs, and system design for Platform Engineers.',
      highlights: [
        'Deep dives into Linux kernel internals, networking, and system calls',
        'Troubleshooting scenarios for Kubernetes crash looping and OOMKilled pods',
        'Cloud security, IAM least-privilege, and compliance best practices'
      ],
      metrics: [
        { label: 'Questions', value: '550+' },
        { label: 'Domains', value: '8 Core Areas' }
      ]
    },
    {
      title: 'Kubernetes Learning Path',
      techStack: ['Kubernetes', 'Helm', 'Docker', 'GitOps'],
      description:
        'Step-by-step Kubernetes roadmap and CKA preparation from beginner to production cluster administration.',
      link: {
        label: 'github.com/NotHarshhaa/kubernetes-learning-path',
        href: 'https://github.com/NotHarshhaa/kubernetes-learning-path'
      },
      isNew: true,
      category: 'Container Orchestration',
      architecture:
        'Curriculum repository with step-by-step declarative manifests, Kustomize overlays, and Helm charts for learning Kubernetes cluster administration.',
      highlights: [
        'Comprehensive coverage of Pod lifecycle, Deployments, StatefulSets, and DaemonSets',
        'Cluster networking with CoreDNS, CNI plugins (Calico/Flannel), and Ingress Controllers',
        'CKA and CKAD preparation exercises with simulated exam challenges'
      ],
      metrics: [
        { label: 'Modules', value: '12' },
        { label: 'Labs', value: '50+' }
      ]
    },
    {
      title: 'From Docker to Kubernetes',
      techStack: ['Docker', 'Kubernetes', 'Containers'],
      description:
        'Hands-on learning path from containerization fundamentals to real-world Kubernetes deployments.',
      link: {
        label: 'github.com/NotHarshhaa/From-Docker-to-Kubernetes',
        href: 'https://github.com/NotHarshhaa/From-Docker-to-Kubernetes'
      },
      isNew: true,
      category: 'Containers & Microservices',
      architecture:
        'Hands-on tutorial series guiding engineers from multi-stage Dockerfiles and container optimization to Kubernetes cluster manifests.',
      highlights: [
        'Multi-stage Docker builds reducing image sizes by over 70%',
        'Local cluster development with Minikube, KinD, and Docker Desktop',
        'Translating Docker Compose stacks into scalable Kubernetes manifests'
      ],
      metrics: [
        { label: 'Size Reduction', value: '70%+' },
        { label: 'Tooling', value: 'Docker / K8s' }
      ]
    },
    {
      title: 'DevOps Monitoring in a Box',
      techStack: ['Prometheus', 'Grafana', 'Loki', 'Observability'],
      description:
        'Ready-to-use monitoring platform — Prometheus, Grafana, Loki, Alertmanager, and Node Exporter with one command.',
      link: {
        label: 'github.com/NotHarshhaa/devops-monitoring-in-a-box',
        href: 'https://github.com/NotHarshhaa/devops-monitoring-in-a-box'
      },
      isNew: true,
      category: 'Observability & SRE',
      architecture:
        'Full observability stack packaged with Docker Compose and Kubernetes Helm charts, pre-configured with scrape configs and dashboard JSON templates.',
      highlights: [
        'One-command setup for Prometheus, Grafana, Loki, and Alertmanager',
        '15+ pre-configured dashboards for system metrics, container performance, and logs',
        'Alerting rules for CPU saturation, memory exhaustion, and service unavailability'
      ],
      metrics: [
        { label: 'Setup Time', value: '< 2 mins' },
        { label: 'Dashboards', value: '15+ Ready' }
      ]
    },
    {
      title: 'AWS | GCP | Azure — Cloud Projects Workshop',
      techStack: ['AWS', 'GCP', 'Azure', 'Terraform', 'DevOps'],
      description:
        'Hands-on multi-cloud projects designed for real-world experience, portfolio building, and enterprise certifications.',
      link: {
        label: 'github.com/NotHarshhaa/AWS-GCP-Azure-Cloud-Projects-Workshop',
        href: 'https://github.com/NotHarshhaa/AWS-GCP-Azure-Cloud-Projects-Workshop'
      },
      isNew: true,
      category: 'Multi-Cloud Engineering',
      architecture:
        'Multi-provider Terraform workspaces and deployment scripts standardizing networking, compute, and database architectures across AWS, Azure, and GCP.',
      highlights: [
        'Standardized infrastructure templates across AWS, GCP, and Azure',
        'Automated CI/CD validation pipelines across heterogeneous cloud providers',
        'Cost comparison and FinOps optimization blueprints'
      ],
      metrics: [
        { label: 'Cloud Providers', value: '3 (AWS/GCP/Azure)' },
        { label: 'IaC Coverage', value: '100% Terraform' }
      ]
    },
    {
      title: 'DevOps Environment Toolkit for Beginners',
      techStack: ['DevOps', 'Automation', 'Bash', 'Docker'],
      description:
        'Ready-to-use local environment setup script with essential CLI tools, container runtimes, and linters.',
      link: {
        label: 'github.com/NotHarshhaa/devops-environment-toolkit-beginners',
        href: 'https://github.com/NotHarshhaa/devops-environment-toolkit-beginners'
      },
      category: 'Developer Experience',
      architecture:
        'Idempotent shell and PowerShell automation scripts packaging Docker, kubectl, Helm, Terraform, and AWS CLI setup.',
      highlights: [
        'One-command setup script configuring complete local development workstation',
        'Automated PATH configuration, completion scripts, and version pinning',
        'Cross-platform support for Linux (Ubuntu/Debian) and Windows WSL2'
      ],
      metrics: [
        { label: 'Onboarding Time', value: '< 10 mins' },
        { label: 'Tools Configured', value: '12+ Core CLIs' }
      ]
    },
    {
      title: 'Awesome DevOps Cloud UI',
      techStack: ['DevOps', 'UI Tools', 'Kubernetes', 'Cloud'],
      description:
        'Curated catalog of top open-source GUI and web-based tools for Kubernetes management, CI/CD visualization, and cloud operations.',
      link: {
        label: 'github.com/NotHarshhaa/awesome-devops-cloud-ui',
        href: 'https://github.com/NotHarshhaa/awesome-devops-cloud-ui'
      },
      category: 'Developer Experience',
      architecture:
        'Categorized open-source repository ranking graphical management tools, dashboard interfaces, and terminal UIs for cloud engineers.',
      highlights: [
        'Curated UI tools for Kubernetes (Lens, Octant, K9s, Headlamp)',
        'Visual CI/CD pipeline monitors and GitOps dashboards',
        'Interactive community evaluation rubrics and feature comparisons'
      ],
      metrics: [
        { label: 'Tools Curated', value: '80+' },
        { label: 'Categories', value: '10' }
      ]
    },
    {
      title: 'AWS Terraform Workshop',
      techStack: ['Terraform', 'AWS', 'IaC', 'DevOps'],
      description:
        'Modular, battle-tested guide to setting up production AWS infrastructure using declarative Terraform.',
      link: {
        label: 'github.com/NotHarshhaa/AWS-Terraform-Workshop',
        href: 'https://github.com/NotHarshhaa/AWS-Terraform-Workshop'
      },
      category: 'Infrastructure as Code',
      architecture:
        'Modular Terraform repository structured into reusable root and child modules with remote S3 backend and DynamoDB state locking.',
      highlights: [
        'Step-by-step migration from monolithic configs to composable child modules',
        'Zero-trust security rules and automated tfsec / tflint verification',
        'Production VPC, Auto Scaling Group, Application Load Balancer, and RDS setup'
      ],
      metrics: [
        { label: 'IaC Modules', value: '6 Modular Blocks' },
        { label: 'State Safety', value: 'DynamoDB Lock' }
      ]
    },
    {
      title: 'CI/CD on EKS using GitHub Actions',
      techStack: ['CI/CD', 'EKS', 'GitHub Actions', 'Terraform', 'Kubernetes'],
      description:
        'Automated CI/CD pipeline for building, testing, and deploying microservices to Amazon EKS using GitHub Actions and Helm.',
      link: {
        label: 'github.com/NotHarshhaa/CI-CD_EKS-GitHub_Actions',
        href: 'https://github.com/NotHarshhaa/CI-CD_EKS-GitHub_Actions'
      },
      category: 'CI/CD & Kubernetes',
      architecture:
        'GitHub Actions workflow with OIDC authentication to AWS, pushing multi-arch images to ECR and rolling updates to Amazon EKS via Helm.',
      highlights: [
        'Keyless AWS authentication using GitHub Actions OIDC (no long-lived credentials)',
        'Automated image vulnerability scanning via Trivy before registry push',
        'Zero-downtime rolling updates with Kubernetes readiness and liveness probes'
      ],
      metrics: [
        { label: 'Deploy Time', value: '< 4 mins' },
        { label: 'Security', value: 'OIDC Keyless' }
      ]
    },
    {
      title: 'Amazon EKS Cluster with Terraform',
      techStack: ['Terraform', 'EKS', 'Kubernetes', 'AWS'],
      description:
        'Production-ready Terraform module for provisioning highly available Amazon EKS clusters with managed node groups.',
      link: {
        label: 'github.com/NotHarshhaa/eks-cluster-terraform',
        href: 'https://github.com/NotHarshhaa/eks-cluster-terraform'
      },
      category: 'Infrastructure as Code',
      architecture:
        'Terraform blueprint deploying VPC, private subnets, NAT Gateways, EKS control plane, and managed node groups with IAM least privilege.',
      highlights: [
        'Multi-AZ high availability with private worker nodes and public ingress',
        'Integrated AWS Load Balancer Controller and ExternalDNS add-ons',
        'Automated cluster autoscaling and EBS CSI storage drivers'
      ],
      metrics: [
        { label: 'Availability', value: 'Multi-AZ 99.95%' },
        { label: 'IaC', value: '100% Terraform' }
      ]
    },
    {
      title: 'DevOps Tools Collection',
      techStack: ['DevOps', 'Automation', 'Linux', 'Security'],
      description:
        'Comprehensive collection of essential DevOps utilities for build automation, deployment, monitoring, and security.',
      link: {
        label: 'github.com/NotHarshhaa/devops-tools',
        href: 'https://github.com/NotHarshhaa/devops-tools'
      },
      category: 'Platform Engineering',
      architecture:
        'Catalog and installation framework organizing modern tools for CI/CD, GitOps, SRE, container security, and cloud cost management.',
      highlights: [
        'Quick-install automation and verification test suites',
        'Categorized into CI/CD, GitOps, Observability, and DevSecOps',
        'Includes configuration templates for enterprise environments'
      ],
      metrics: [
        { label: 'Tools', value: '50+' },
        { label: 'Automation', value: 'Shell / Python' }
      ]
    },
    {
      title: 'DevOps Cheatsheet',
      techStack: ['DevOps', 'Cheatsheets', 'Kubernetes', 'Linux', 'Terraform'],
      description:
        'High-density, quick-reference DevOps cheatsheets covering Docker, Kubernetes, Terraform, Linux commands, and CI/CD.',
      link: {
        label: 'github.com/NotHarshhaa/devops-cheatsheet',
        href: 'https://github.com/NotHarshhaa/devops-cheatsheet'
      },
      category: 'Technical Guide',
      architecture:
        'Curated markdown reference repository with syntax tables, flags, and common command patterns for rapid terminal troubleshooting.',
      highlights: [
        'Immediate terminal reference for kubectl, docker, git, and terraform commands',
        'Kubernetes pod debug recipes (exec, port-forward, ephemeral containers)',
        'Linux networking and performance diagnostics commands (ip, ss, netstat, curl)'
      ],
      metrics: [
        { label: 'Topics', value: '10 Core Tools' },
        { label: 'Stars / Readers', value: 'Global Engineers' }
      ]
    },
    {
      title: 'DevOps Interview Questions',
      techStack: ['DevOps', 'Interview', 'Kubernetes', 'Terraform', 'CI/CD'],
      description:
        '550+ scenario-based DevOps and Platform Engineering interview questions with in-depth technical explanations.',
      link: {
        label: 'github.com/NotHarshhaa/DevOps-Interview-Questions',
        href: 'https://github.com/NotHarshhaa/DevOps-Interview-Questions'
      },
      category: 'Technical Guide',
      architecture:
        'Curated technical guide covering scenario-based questions, outage postmortems, architecture trade-offs, and behavioral scenarios.',
      highlights: [
        'Real-world system design questions for high-availability platforms',
        'Troubleshooting complex Kubernetes cluster and network partition issues',
        'Detailed answers on CI/CD pipelines, GitOps, and cloud security governance'
      ],
      metrics: [
        { label: 'Questions', value: '550+' },
        { label: 'Community', value: '10k+ Engineers' }
      ]
    },
    {
      title: 'Certified Kubernetes Administrator (CKA) Prep',
      techStack: ['Kubernetes', 'CKA', 'Cluster Admin', 'Linux'],
      description:
        'Hands-on lab repository and exam guide to mastering Kubernetes cluster administration and passing the CKA certification.',
      link: {
        label: 'github.com/NotHarshhaa/Certified_Kubernetes_Administrator',
        href: 'https://github.com/NotHarshhaa/Certified_Kubernetes_Administrator'
      },
      category: 'Container Orchestration',
      architecture:
        'Hands-on lab scenarios replicating exam tasks — cluster backup/restore with etcd, network policies, RBAC, and troubleshooting.',
      highlights: [
        'Practice scenarios for etcd snapshot save and restore operations',
        'Cluster upgrade exercises using kubeadm with zero-downtime drain/uncordon',
        'RBAC role and rolebinding configuration with certificate signing requests'
      ],
      metrics: [
        { label: 'Labs', value: '30+ Practice Tasks' },
        { label: 'Target', value: 'CKA Certified' }
      ]
    },
    {
      title: 'DevOps Tool Installer Scripts',
      techStack: ['Automation', 'Linux', 'Bash', 'PowerShell'],
      description:
        'Automated installation and verification scripts for essential DevOps & cloud tools on Linux and Windows.',
      link: {
        label: 'github.com/NotHarshhaa/DevOps-Tool-Installer',
        href: 'https://github.com/NotHarshhaa/DevOps-Tool-Installer'
      },
      category: 'Automation & Scripting',
      architecture:
        'Idempotent bash and PowerShell installation suite with checksum verification and automatic package manager detection.',
      highlights: [
        'Installs Docker, kubectl, Helm, Terraform, AWS CLI, and jq in minutes',
        'Verifies binary checksums and creates standard shell aliases',
        'Supports Debian/Ubuntu, RHEL/CentOS, and Windows systems'
      ],
      metrics: [
        { label: 'Platforms', value: 'Linux / Windows' },
        { label: 'Install Time', value: '< 3 mins' }
      ]
    },
    {
      title: 'Azure Cloud Resources Hub',
      techStack: ['Azure', 'Cloud', 'DevOps', 'AKS'],
      description:
        'Curated list of Azure platform resources, architecture blueprints, CLI commands, and enterprise best practices.',
      link: {
        label: 'github.com/NotHarshhaa/azure-all_in_one',
        href: 'https://github.com/NotHarshhaa/azure-all_in_one'
      },
      category: 'Cloud Engineering',
      architecture:
        'Categorized repository indexing Azure Resource Manager (ARM), Bicep, and Terraform modules for AKS, App Services, and VNets.',
      highlights: [
        'Azure Kubernetes Service (AKS) production deployment patterns',
        'Azure Virtual Network peering, NSG rules, and Private Endpoints',
        'Azure DevOps CI/CD pipeline YAML templates and agent setup'
      ],
      metrics: [
        { label: 'Services Covered', value: '20+ Azure Services' },
        { label: 'IaC Patterns', value: 'Terraform & Bicep' }
      ]
    },
    {
      title: 'ECR to ECS Deployment with GitHub Actions',
      techStack: ['Terraform', 'ECS', 'GitHub Actions', 'Docker', 'AWS'],
      description:
        'Automated deployment pipeline for containerized Python applications to AWS ECS Fargate using GitHub Actions and Terraform.',
      link: {
        label: 'github.com/NotHarshhaa/tf-ecr-ecs-gh-deploy',
        href: 'https://github.com/NotHarshhaa/tf-ecr-ecs-gh-deploy'
      },
      category: 'CI/CD & Containers',
      architecture:
        'Serverless container deployment pipeline using GitHub Actions to build Docker images, push to Amazon ECR, and trigger ECS task updates.',
      highlights: [
        'Serverless container orchestration using AWS ECS Fargate and ALB',
        'Automated task definition revision updates via GitHub Actions workflow',
        'Terraform-managed IAM roles, log groups, and Application Load Balancer'
      ],
      metrics: [
        { label: 'Compute', value: 'AWS ECS Fargate' },
        { label: 'Deployment', value: 'Zero-Downtime Rolling' }
      ]
    }
  ]
}

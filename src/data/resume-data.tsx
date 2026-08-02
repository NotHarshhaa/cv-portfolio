import { GitHubIcon, LinkedInIcon, TelegramIcon } from '@/components/icons'
import { LinkIcon } from 'lucide-react'

export const RESUME_DATA = {
  name: 'Harshhaa Vardhan Reddy',
  initials: 'HR',
  role: 'Platform Engineer • AI Infrastructure • Agentic Systems',
  location: 'Hyderabad, India',
  locationLink: 'https://www.google.com/maps/place/Hyderabad',
  about:
    'Platforms, AI infrastructure, and agents that help teams ship faster.',
  summary: `I build scalable cloud platforms, AI infrastructure, Internal Developer Platforms (IDPs), and Agentic AI systems that help engineering teams build, deploy, and operate applications faster.

My interests span modern Platform Engineering, Cloud Native technologies, DevOps Automation, MLOps, LLMOps, Generative AI, AI Agents, Model Context Protocol (MCP), AI Automation, and Developer Experience.

I enjoy building open-source tools, automation frameworks, production-ready AI platforms, and educational resources that simplify complex engineering problems.`,
  avatar: '/assets/avatar.png',
  personalWebsiteUrl: {
    name: 'Portfolio',
    url: 'https://harshhaareddy.site'
  },
  contact: {
    link: {
      name: 'Other Links',
      url: 'https://link.notharshhaa.site'
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
        url: 'https://blog.harshhaareddy.site',
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
        'Built a strong foundation in core engineering principles and problem-solving.',
        'Explored interdisciplinary interests that led to a passion for automation and cloud infrastructure.',
        'Participated in workshops and tech fests, developing early skills in collaboration and delivery.',
        'This journey sparked a shift toward DevOps, platform engineering, and open-source collaboration.'
      ]
    }
  ],
  work: [
    {
      company: 'Tata Consultancy Services',
      link: 'https://www.tcs.com',
      badges: ['Hybrid'],
      jobs: [
        {
          title: 'DevOps Engineer',
          start: 'Mar, 2023',
          end: 'Present',
          description: [
            'Designed, implemented, and maintained CI/CD pipelines to automate build, test, and deployment processes.',
            'Ensured fast and reliable application delivery through streamlined DevOps practices.',
            'Deployed applications to AWS and Azure via automated pipelines.',
            'Reduced manual intervention and improved deployment consistency.'
          ]
        }
      ]
    },
    {
      company: 'IBM',
      link: 'https://www.ibm.com',
      badges: ['Remote'],
      jobs: [
        {
          title: 'Cloud DevOps Engineer',
          start: 'Dec, 2021',
          end: 'Feb, 2023',
          description: [
            'Provisioned AWS resources using Terraform with Infrastructure-as-Code (IaC) practices.',
            'Managed and containerized microservices using Docker.',
            'Optimized Docker images and uploaded to AWS ECR.',
            'Integrated containers with Kubernetes for scalable deployments.'
          ]
        }
      ]
    },
    {
      company: 'DEV Community',
      link: 'https://dev.to/notharshhaa',
      badges: ['Remote'],
      jobs: [
        {
          title: 'DevOps/Cloud Content Blogger',
          start: 'Aug, 2023',
          end: 'Present',
          description: [
            'Published technical blogs on DevOps, cloud platforms, and industry best practices.',
            'Engaged with the tech community through informative and practical content.',
            'Focused on delivering value through real-world insights and tutorials.'
          ]
        }
      ]
    },
    {
      company: 'Hashnode',
      link: 'https://hashnode.com/@prodevopsguy',
      badges: ['Remote'],
      jobs: [
        {
          title: 'DevOps/Cloud Content Blogger',
          start: 'Mar, 2022',
          end: 'Present',
          description: [
            'Authored blogs on DevOps, cloud computing, and automation.',
            'Shared technical insights and best practices with the developer community.',
            'Contributed to knowledge sharing and community growth through consistent blogging.'
          ]
        }
      ]
    }
  ],
  skills: [
    'Platform Engineering',
    'Internal Developer Platforms',
    'Cloud Infrastructure',
    'AWS',
    'Azure',
    'GCP',
    'Kubernetes',
    'Docker',
    'Helm',
    'ArgoCD',
    'Terraform',
    'Ansible',
    'GitOps',
    'Jenkins',
    'GitHub Actions',
    'GitLab CI',
    'Azure DevOps',
    'Prometheus',
    'Grafana',
    'Observability',
    'Python',
    'Bash',
    'Linux',
    'MLOps',
    'LLMOps',
    'MLflow',
    'Generative AI',
    'AI Agents',
    'Agentic AI Systems',
    'Model Context Protocol (MCP)',
    'Agent2Agent (A2A)',
    'LangGraph',
    'LangChain',
    'RAG',
    'Prompt Engineering',
    'Context Engineering',
    'AI Infrastructure',
    'AI Automation',
    'Developer Experience',
    'DevOps',
    'Infrastructure as Code',
    'CI/CD',
    'Open Source',
    'Community Engagement'
  ],
  projects: [
    {
      title: 'Real-Time DevOps Projects Hub',
      techStack: ['AWS', 'Terraform', 'Docker', 'Kubernetes', 'DevOps'],
      description:
        'A dedicated website featuring real-time DevOps & Cloud projects, from beginner to production-level — CI/CD, Kubernetes, Terraform, and monitoring.',
      link: {
        label: 'projects.prodevopsguytech.com',
        href: 'https://projects.prodevopsguytech.com'
      },
      isNew: true
    },
    {
      title: 'Ultimate DevOps & Cloud Docs Portal',
      techStack: ['AWS', 'Azure', 'DevOps', 'Docs'],
      description:
        '900+ handpicked resources, guides, and docs for AWS, Azure, and DevOps — learning content for engineers at all levels.',
      link: {
        label: 'docs.prodevopsguytech.com',
        href: 'https://docs.prodevopsguytech.com'
      },
      isNew: true
    },
    {
      title: 'DevOps Repositories Central Hub',
      techStack: ['GitHub', 'DevOps'],
      description:
        'Major repositories curated and organized — from automation scripts to infra as code to interview prep.',
      link: {
        label: 'repos.prodevopsguytech.com',
        href: 'https://repos.prodevopsguytech.com'
      },
      isNew: true
    },
    {
      title: 'DevOps Real-Time Projects',
      techStack: ['DevOps', 'Projects'],
      description:
        'Beginner → advanced real-world DevOps projects for hands-on learning.',
      link: {
        label: 'github.com/NotHarshhaa/DevOps-Projects',
        href: 'https://github.com/NotHarshhaa/DevOps-Projects'
      },
      isNew: true
    },
    {
      title: 'AWS Real-Time Projects',
      techStack: ['AWS', 'DevOps', 'Projects'],
      description:
        'Production-grade AWS deployments and hands-on cloud projects for portfolio and certification prep.',
      link: {
        label: 'github.com/NotHarshhaa/AWS-Projects',
        href: 'https://github.com/NotHarshhaa/AWS-Projects'
      },
      isNew: true
    },
    {
      title: 'Into the DevOps',
      techStack: ['DevOps', 'Interview'],
      description:
        'Comprehensive DevOps interview guide covering Linux, AWS, Kubernetes, Terraform, Docker, and more.',
      link: {
        label: 'github.com/NotHarshhaa/into-the-devops',
        href: 'https://github.com/NotHarshhaa/into-the-devops'
      },
      isNew: true
    },
    {
      title: 'Kubernetes Learning Path',
      techStack: ['Kubernetes'],
      description:
        'Step-by-step Kubernetes roadmap and CKA preparation from beginner to advanced.',
      link: {
        label: 'github.com/NotHarshhaa/kubernetes-learning-path',
        href: 'https://github.com/NotHarshhaa/kubernetes-learning-path'
      },
      isNew: true
    },
    {
      title: 'From Docker to Kubernetes',
      techStack: ['Docker', 'Kubernetes'],
      description:
        'Hands-on learning path from containerization fundamentals to real-world Kubernetes deployments.',
      link: {
        label: 'github.com/NotHarshhaa/From-Docker-to-Kubernetes',
        href: 'https://github.com/NotHarshhaa/From-Docker-to-Kubernetes'
      },
      isNew: true
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
      isNew: true
    },
    {
      title: 'AWS | GCP | Azure — Cloud Projects Workshop',
      techStack: ['AWS', 'GCP', 'Azure', 'Cloud'],
      description:
        'Hands-on multi-cloud projects designed for real-world experience, portfolio building, and certifications.',
      link: {
        label: 'github.com/NotHarshhaa/AWS-GCP-Azure-Cloud-Projects-Workshop',
        href: 'https://github.com/NotHarshhaa/AWS-GCP-Azure-Cloud-Projects-Workshop'
      },
      isNew: true
    },
    {
      title: 'DevOps Environment Toolkit for Beginners',
      techStack: ['DevOps', 'Tools', 'Setup'],
      description:
        'Ready-to-use local setup with essential tools before starting a DevOps learning journey.',
      link: {
        label: 'github.com/NotHarshhaa/devops-environment-toolkit-beginners',
        href: 'https://github.com/NotHarshhaa/devops-environment-toolkit-beginners'
      }
    },
    {
      title: 'Awesome DevOps Cloud UI',
      techStack: ['DevOps', 'Cloud', 'UI'],
      description:
        'Curated UI-based tools and resources for DevOps and Cloud professionals.',
      link: {
        label: 'github.com/NotHarshhaa/awesome-devops-cloud-ui',
        href: 'https://github.com/NotHarshhaa/awesome-devops-cloud-ui'
      }
    },
    {
      title: 'AWS Terraform Workshop',
      techStack: ['Terraform', 'AWS'],
      description:
        'Beginner-friendly guide to setting up AWS infrastructure using Terraform.',
      link: {
        label: 'github.com/NotHarshhaa/AWS-Terraform-Workshop',
        href: 'https://github.com/NotHarshhaa/AWS-Terraform-Workshop'
      }
    },
    {
      title: 'CI/CD on EKS using GitHub Actions',
      techStack: ['CI/CD', 'EKS', 'GitHub Actions', 'Terraform'],
      description:
        'CI/CD pipeline for deploying a Node.js app on Amazon EKS using GitHub Actions, Terraform, and Kubernetes.',
      link: {
        label: 'github.com/NotHarshhaa/CI-CD_EKS-GitHub_Actions',
        href: 'https://github.com/NotHarshhaa/CI-CD_EKS-GitHub_Actions'
      }
    },
    {
      title: 'Amazon EKS Cluster with Terraform',
      techStack: ['Terraform', 'EKS', 'Kubernetes'],
      description:
        'Terraform-based provisioning of an Amazon EKS cluster for Kubernetes deployments.',
      link: {
        label: 'github.com/NotHarshhaa/eks-cluster-terraform',
        href: 'https://github.com/NotHarshhaa/eks-cluster-terraform'
      }
    },
    {
      title: 'DevOps Tools Collection',
      techStack: ['DevOps'],
      description:
        'Collection of essential DevOps tools for development, deployment, monitoring, security, and automation.',
      link: {
        label: 'github.com/NotHarshhaa/devops-tools',
        href: 'https://github.com/NotHarshhaa/devops-tools'
      }
    },
    {
      title: 'DevOps Cheatsheet',
      techStack: ['DevOps'],
      description:
        'Quick-reference DevOps cheatsheets covering CI/CD, cloud, security, monitoring, and automation.',
      link: {
        label: 'github.com/NotHarshhaa/devops-cheatsheet',
        href: 'https://github.com/NotHarshhaa/devops-cheatsheet'
      }
    },
    {
      title: 'DevOps Interview Questions',
      techStack: ['DevOps', 'Interview'],
      description:
        '550+ DevOps interview questions with detailed answers covering CI/CD, Kubernetes, Terraform, and cloud.',
      link: {
        label: 'github.com/NotHarshhaa/DevOps-Interview-Questions',
        href: 'https://github.com/NotHarshhaa/DevOps-Interview-Questions'
      }
    },
    {
      title: 'Certified Kubernetes Administrator (CKA) Prep',
      techStack: ['Kubernetes'],
      description:
        'Master Kubernetes from scratch and prepare for the CKA certification.',
      link: {
        label: 'github.com/NotHarshhaa/Certified_Kubernetes_Administrator',
        href: 'https://github.com/NotHarshhaa/Certified_Kubernetes_Administrator'
      }
    },
    {
      title: 'DevOps Tool Installer Scripts',
      techStack: ['Automation', 'Linux'],
      description:
        'Automated installation/uninstallation scripts for essential DevOps tools on Linux and Windows.',
      link: {
        label: 'github.com/NotHarshhaa/DevOps-Tool-Installer',
        href: 'https://github.com/NotHarshhaa/DevOps-Tool-Installer'
      }
    },
    {
      title: 'Azure Cloud Resources Hub',
      techStack: ['Azure'],
      description:
        'Curated list of Azure resources, libraries, guides, and blogs.',
      link: {
        label: 'github.com/NotHarshhaa/azure-all_in_one',
        href: 'https://github.com/NotHarshhaa/azure-all_in_one'
      }
    },
    {
      title: 'ECR to ECS Deployment with GitHub Actions',
      techStack: ['Terraform', 'ECS', 'GitHub Actions', 'Docker'],
      description:
        'Automated deployment of a Python application to AWS ECS using GitHub Actions, Docker, and Terraform.',
      link: {
        label: 'github.com/NotHarshhaa/tf-ecr-ecs-gh-deploy',
        href: 'https://github.com/NotHarshhaa/tf-ecr-ecs-gh-deploy'
      }
    }
  ]
}

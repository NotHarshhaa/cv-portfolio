import { GitHubIcon, LinkedInIcon, TelegramIcon } from '@/components/icons'

export const RESUME_DATA = {
	name: 'Harshhaa Vardhan Reddy',
	initials: 'HR',
	location: 'Hyderabad, India',
	locationLink: 'https://www.google.com/maps/place/Hyderabad',
	about: 
	    'DevOps & Cloud Engineer passionate about automation, scalability, and building reliable infrastructure that empowers development teams.',
    summary: `I specialize in DevOps, Cloud Computing, and Infrastructure Automation, with hands-on expertise in tools like Kubernetes, Terraform, Docker, and CI/CD pipelines. I design and implement cloud-native architectures that are scalable, secure, and resilient with a strong focus on efficiency and reliability.
    As an open-source contributor, I actively collaborate with the global tech community, sharing solutions and tackling real-world infrastructure challenges together.
    I'm driven by a mission to bridge development and operations through automation, helping teams ship faster, safer, and smarter in the cloud.`,
	avatar: '/assets/avatar.png',
	personalWebsiteUrl: {
		name: 'Portfolio',
		url: 'https://notharshhaa.site'
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
				url: 'https://t.me/NotHarshhaa',
				icon: TelegramIcon
			}
		]
	},
	education: [
		{
		  school: 'Jawaharlal Nehru Technological University Hyderabad (JNTUH)',
		  degree: "Bachelor of Technology, Mechanical Engineering",
		  start: 'Jul, 2015',
		  end: 'Jun, 2020',
		  description: [
			'Built a strong foundation in core engineering principles including thermodynamics, fluid mechanics, and material science.',
			'Explored interdisciplinary interests that led to a growing passion for automation and cloud infrastructure.',
			'Worked on academic and practical projects involving design, analysis, and simulation of mechanical systems.',
			'Participated in workshops and tech fests, developing early skills in problem-solving and teamwork.',
			'This journey eventually sparked a shift toward DevOps, cloud computing, and open-source collaboration.'
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
				'Implemented CI/CD pipelines using Jenkins, GitHub Actions, and Azure DevOps to accelerate software delivery.',
				'Managed Kubernetes clusters and containerized applications using Docker and Helm charts.',
				'Automated infrastructure provisioning using Terraform and Ansible across hybrid cloud environments.',
				'Monitored and optimized system performance with Prometheus, Grafana, and ELK stack.',
				'Collaborated with cross-functional teams to enhance deployment workflows and incident response.'
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
			  start: 'Mar, 2022',
			  end: 'Feb, 2023',
			  description: [
				'Led cloud infrastructure automation initiatives on AWS using Terraform and CloudFormation.',
				'Developed custom monitoring and alerting solutions for mission-critical cloud services.',
				'Worked closely with development teams to improve deployment reliability and rollback mechanisms.',
				'Integrated security best practices and compliance checks into CI/CD workflows.',
				'Contributed to internal knowledge-sharing initiatives and DevOps process standardization.'
			  ]
			}
		  ]
		},
		{
		  company: 'C360 Software Inc',
		  link: 'https://www.c360soft.ai',
		  badges: ['In-Office'],
		  jobs: [
			{
			  title: 'Cloud DevOps Engineer',
			  start: 'Nov, 2020',
			  end: 'Feb, 2022',
			  description: [
				'Designed and deployed cloud-native solutions using AWS services including EC2, S3, and ECS.',
				'Built and maintained automated pipelines for application deployment and infrastructure updates.',
				'Managed configuration and secrets using tools like HashiCorp Vault and AWS Parameter Store.',
				'Improved system reliability by implementing blue-green and canary deployment strategies.',
				'Collaborated with product teams to support agile delivery and continuous improvement.'
			  ]
			}
		  ]
		}
	],	  
	skills: [
		'AWS',
		'EC2',
		'S3',
		'EKS',
		'IAM',
		'Azure',
		'AKS',
		'DevOps',
		'ARM',
		'Kubernetes',
		'Docker',
		'Terraform',
		'Ansible',
		'Linux',
		'Ubuntu',
		'CentOS',
		'CI/CD',
		'Jenkins',
		'GitHub Actions',
		'Azure DevOps',
		'Prometheus',
		'Grafana',
		'ELK Stack',
		'Git',
		'Shell Scripting',
		'Bash',
		'GitLab',
		'Python',
		'YAML',
		'Monitoring',
		'Logging',
		'CloudFormation',
		'Helm',
		'NGINX',
		'Networking',
		'GitHub',
		'GitOps',
		'Jira',
		'Confluence',
		'Agile Methodologies',
		'Collaboration',
		'Problem Solving',
		'Communication',
		'Teamwork',
		'Adaptability',
		'Open Source',
		'Community Engagement',
		'Continuous Learning',
		'Infrastructure as Code',
		'Configuration Management',
		'Secrets Management',
		'Incident Management',
		'Disaster Recovery',
		'Load Balancing',
		'High Availability',
		'Performance Tuning',
		'Security Best Practices',
		'HashiCorp Vault',
		'Agile',
		'DevOps Practices',
		'VS Code'
	],	  
	projects: [
		{
		  title: 'From Docker to Kubernetes',
		  techStack: ['Docker', 'Kubernetes', 'Learning'],
		  description: 'A hands-on learning repository to help you master containerization and orchestration — starting with Docker fundamentals and progressing to real-world Kubernetes deployments. Ideal for developers, DevOps engineers, and learners building modern cloud-native workflows.',
		  link: {
			label: 'github.com/NotHarshhaa/From-Docker-to-Kubernetes',
			href: 'https://github.com/NotHarshhaa/From-Docker-to-Kubernetes'
		  },
		  isNew: true
		},
		{
		  title: 'Home of Best DevOps Resources',
		  techStack: ['DevOps', 'Resources', 'UI'],
		  description: 'A curated collection of the "Home of Best DevOps resources" — with live UI demos and GitHub source links.',
		  link: {
			label: 'github.com/NotHarshhaa/home-of-best-devops-resources',
			href: 'https://github.com/NotHarshhaa/home-of-best-devops-resources'
		  },
		  isNew: true
		},
		{
		  title: 'DevOps Monitoring in a Box',
		  techStack: ['Prometheus', 'Grafana', 'Loki', 'Monitoring'],
		  description: 'This project provides a ready-to-use advanced monitoring platform for DevOps engineers and beginners. With just one command, you get Prometheus, Grafana, Loki, Alertmanager, Node Exporter.',
		  link: {
			label: 'github.com/NotHarshhaa/devops-monitoring-in-a-box',
			href: 'https://github.com/NotHarshhaa/devops-monitoring-in-a-box'
		  },
		  isNew: true
		},
		{
		  title: 'AWS | GCP | Azure — Cloud Projects Workshop',
		  techStack: ['AWS', 'GCP', 'Azure', 'Cloud'],
		  description: 'A complete, hands-on collection of AWS, Google Cloud (GCP), and Microsoft Azure projects designed to help you gain real-world experience, build your portfolio, and prepare for certifications.',
		  link: {
			label: 'github.com/NotHarshhaa/AWS-GCP-Azure-Cloud-Projects-Workshop',
			href: 'https://github.com/NotHarshhaa/AWS-GCP-Azure-Cloud-Projects-Workshop'
		  },
		  isNew: true
		},
		{
		  title: 'DevOps Environment Toolkit for Beginners',
		  techStack: ['DevOps', 'Tools', 'Setup'],
		  description: 'This repo provides a ready-to-use local setup with all the essential tools you need before starting your DevOps learning journey.',
		  link: {
			label: 'github.com/NotHarshhaa/devops-environment-toolkit-beginners',
			href: 'https://github.com/NotHarshhaa/devops-environment-toolkit-beginners'
		  },
		  isNew: true
		},
		{
		  title: 'Awesome DevOps Cloud UI',
		  techStack: ['DevOps', 'Cloud', 'UI', 'Tools'],
		  description: 'A curated collection of beautiful, powerful, and helpful UI-based tools and resources for DevOps and Cloud professionals.',
		  link: {
			label: 'github.com/NotHarshhaa/awesome-devops-cloud-ui',
			href: 'https://github.com/NotHarshhaa/awesome-devops-cloud-ui'
		  },
		  isNew: true
		},
		{
		  title: 'Real-World AWS Projects For Learning',
		  techStack: ['AWS', 'DevOps', 'Projects'],
		  description: 'An ultimate resource for learning AWS DevOps through hands-on projects! This repository is designed to cater to aspiring AWS DevOps engineers of all skill levels, from beginners taking their first steps in cloud computing to advanced users looking to master enterprise-level AWS architectures and automation.',
		  link: {
			label: 'github.com/NotHarshhaa/AWS-Projects',
			href: 'https://github.com/NotHarshhaa/AWS-Projects'
		  },
		  isNew: true
		},
		{
		  title: 'AWS Terraform Workshop',
		  techStack: ['Terraform', 'AWS'],
		  description: 'Beginner-friendly guide to setting up AWS infrastructure using Terraform.',
		  link: {
			label: 'github.com/NotHarshhaa/AWS-Terraform-Workshop',
			href: 'https://github.com/NotHarshhaa/AWS-Terraform-Workshop'
		  }
		},
		{
		  title: 'ECR to ECS Deployment with GitHub Actions',
		  techStack: ['Terraform', 'ECS', 'GitHub Actions', 'Docker'],
		  description: 'Automated deployment of a Python application to AWS ECS using GitHub Actions, Docker, and Terraform.',
		  link: {
			label: 'github.com/NotHarshhaa/tf-ecr-ecs-gh-deploy',
			href: 'https://github.com/NotHarshhaa/tf-ecr-ecs-gh-deploy'
		  }
		},
		{
		  title: 'Amazon EKS Cluster with Terraform',
		  techStack: ['Terraform', 'EKS'],
		  description: 'Terraform-based provisioning of an Amazon EKS Cluster for Kubernetes deployments.',
		  link: {
			label: 'github.com/NotHarshhaa/eks-cluster-terraform',
			href: 'https://github.com/NotHarshhaa/eks-cluster-terraform'
		  }
		},
		{
		  title: 'CI/CD on EKS using GitHub Actions',
		  techStack: ['CI/CD', 'EKS', 'GitHub Actions', 'Terraform'],
		  description: 'CI/CD pipeline for deploying a Node.js app on Amazon EKS using GitHub Actions, Terraform, and Kubernetes.',
		  link: {
			label: 'github.com/NotHarshhaa/CI-CD_EKS-GitHub_Actions',
			href: 'https://github.com/NotHarshhaa/CI-CD_EKS-GitHub_Actions'
		  }
		},
		{
		  title: 'DevOps Tools Collection',
		  techStack: ['DevOps'],
		  description: 'Collection of essential DevOps tools for development, deployment, monitoring, security, and automation.',
		  link: {
			label: 'github.com/NotHarshhaa/devops-tools',
			href: 'https://github.com/NotHarshhaa/devops-tools'
		  }
		},
		{
		  title: 'Certified Kubernetes Administrator (CKA) Prep',
		  techStack: ['Kubernetes'],
		  description: 'Master Kubernetes from scratch and prepare for the CKA certification.',
		  link: {
			label: 'github.com/NotHarshhaa/Certified_Kubernetes_Administrator',
			href: 'https://github.com/NotHarshhaa/Certified_Kubernetes_Administrator'
		  }
		},
		{
		  title: 'Secure Kubernetes Dashboard',
		  techStack: ['Kubernetes', 'Security'],
		  description: 'Kubernetes dashboard with integrated health checks and Trivy scanning.',
		  link: {
			label: 'github.com/NotHarshhaa/kubernetes-dashboard',
			href: 'https://github.com/NotHarshhaa/kubernetes-dashboard'
		  }
		},
		{
		  title: 'Real-World DevOps Projects',
		  techStack: ['DevOps', 'Projects'],
		  description: 'Real-world DevOps projects from beginner to advanced levels.',
		  link: {
			label: 'github.com/NotHarshhaa/DevOps-Projects',
			href: 'https://github.com/NotHarshhaa/DevOps-Projects'
		  }
		},
		{
		  title: 'Uber Clone with DevSecOps',
		  techStack: ['Full-Stack', 'DevSecOps'],
		  description: 'Full-stack Uber-like transportation application with DevSecOps integration.',
		  link: {
			label: 'github.com/NotHarshhaa/uber-clone',
			href: 'https://github.com/NotHarshhaa/uber-clone'
		  }
		},
		{
		  title: 'Kubernetes Learning Projects',
		  techStack: ['Kubernetes'],
		  description: 'Practical Kubernetes projects to master deployment, management, and scaling of containerized applications.',
		  link: {
			label: 'github.com/NotHarshhaa/kubernetes-projects-learning',
			href: 'https://github.com/NotHarshhaa/kubernetes-projects-learning'
		  }
		},
		{
		  title: 'Provisioning EKS on AWS with Terraform',
		  techStack: ['AWS', 'EKS', 'Terraform'],
		  description: 'Provision Amazon EKS Cluster on AWS using Terraform.',
		  link: {
			label: 'github.com/NotHarshhaa/AWS-EKS_Terraform',
			href: 'https://github.com/NotHarshhaa/AWS-EKS_Terraform'
		  }
		},
		{
		  title: 'Deploy Super Mario on EKS',
		  techStack: ['Kubernetes', 'Terraform'],
		  description: 'Deploy Super Mario game on Amazon EKS using Terraform.',
		  link: {
			label: 'github.com/NotHarshhaa/Deployment-of-super-Mario-on-Kubernetes-using-terraform',
			href: 'https://github.com/NotHarshhaa/Deployment-of-super-Mario-on-Kubernetes-using-terraform'
		  }
		},
		{
		  title: 'Cloud-Native Monitoring App',
		  techStack: ['Python', 'Docker', 'EKS'],
		  description: 'Monitoring app built with Python, containerized with Docker, and deployed to EKS.',
		  link: {
			label: 'github.com/NotHarshhaa/cloud-native-monitoring-app',
			href: 'https://github.com/NotHarshhaa/cloud-native-monitoring-app'
		  }
		},
		{
		  title: 'Zomato Clone with DevSecOps',
		  techStack: ['Full-Stack', 'DevSecOps'],
		  description: 'Full-stack food delivery application inspired by Zomato with DevSecOps integration.',
		  link: {
			label: 'github.com/NotHarshhaa/Zomato-Clone',
			href: 'https://github.com/NotHarshhaa/Zomato-Clone'
		  }
		},
		{
		  title: 'Learning Prometheus Monitoring',
		  techStack: ['Prometheus', 'Monitoring'],
		  description: 'Repository for learning and implementing Prometheus monitoring in Kubernetes environments.',
		  link: {
			label: 'github.com/NotHarshhaa/Learning-Prometheus',
			href: 'https://github.com/NotHarshhaa/Learning-Prometheus'
		  }
		},
		{
		  title: 'Kubernetes Mastery Guide',
		  techStack: ['Kubernetes'],
		  description: 'Comprehensive Kubernetes learning and deployment repository from basic to advanced.',
		  link: {
			label: 'github.com/NotHarshhaa/Kubernetes',
			href: 'https://github.com/NotHarshhaa/Kubernetes'
		  }
		},
		{
		  title: 'DevOps Setup & Installation Guides',
		  techStack: ['DevOps'],
		  description: 'Guides for installing and setting up essential DevOps and DevSecOps tools.',
		  link: {
			label: 'github.com/NotHarshhaa/DevOps_Setup-Installations',
			href: 'https://github.com/NotHarshhaa/DevOps_Setup-Installations'
		  }
		},
		{
		  title: 'DevOps Tool Installer Scripts',
		  techStack: ['Automation'],
		  description: 'Automated installation/uninstallation scripts for essential DevOps tools on Linux and Windows.',
		  link: {
			label: 'github.com/NotHarshhaa/DevOps-Tool-Installer',
			href: 'https://github.com/NotHarshhaa/DevOps-Tool-Installer'
		  }
		},
		{
		  title: 'Kubernetes Learning Path',
		  techStack: ['Kubernetes'],
		  description: 'Step-by-step Kubernetes learning path from beginner to advanced.',
		  link: {
			label: 'github.com/NotHarshhaa/kubernetes-learning-path',
			href: 'https://github.com/NotHarshhaa/kubernetes-learning-path'
		  }
		},
		{
		  title: 'AWS Infra with Jenkins and Terraform',
		  techStack: ['Jenkins', 'Terraform', 'AWS'],
		  description: 'Terraform scripts for AWS infrastructure provisioning with Jenkins integration.',
		  link: {
			label: 'github.com/NotHarshhaa/Jenkins-Terraform-AWS-Infra',
			href: 'https://github.com/NotHarshhaa/Jenkins-Terraform-AWS-Infra'
		  }
		},
		{
		  title: 'Azure Cloud Resources Hub',
		  techStack: ['Azure'],
		  description: 'Curated list of Azure resources, libraries, guides, and blogs.',
		  link: {
			label: 'github.com/NotHarshhaa/azure-all_in_one',
			href: 'https://github.com/NotHarshhaa/azure-all_in_one'
		  }
		},
		{
		  title: 'AWS Billing Alert with Terraform',
		  techStack: ['Terraform', 'AWS'],
		  description: 'Terraform module for setting up AWS billing alerts.',
		  link: {
			label: 'github.com/NotHarshhaa/aws-billing-alert-terraform',
			href: 'https://github.com/NotHarshhaa/aws-billing-alert-terraform'
		  }
		},
		{
		  title: 'Real-Time AWS DevOps Deployment',
		  techStack: ['AWS', 'DevOps'],
		  description: 'End-to-end AWS DevOps deployment pipeline from Dev to Production.',
		  link: {
			label: 'github.com/NotHarshhaa/AWS-DevOps_Real-Time_Deployment',
			href: 'https://github.com/NotHarshhaa/AWS-DevOps_Real-Time_Deployment'
		  }
		},
		{
		  title: 'DevOps Cheatsheet',
		  techStack: ['DevOps'],
		  description: 'Quick-reference DevOps cheatsheets covering CI/CD, cloud, security, monitoring, and automation.',
		  link: {
			label: 'github.com/NotHarshhaa/devops-cheatsheet',
			href: 'https://github.com/NotHarshhaa/devops-cheatsheet'
		  }
		},
		{
		  title: 'DevOps Interview Questions',
		  techStack: ['DevOps', 'Interview'],
		  description: '550+ DevOps interview questions with detailed answers covering CI/CD, Kubernetes, Terraform, and cloud.',
		  link: {
			label: 'github.com/NotHarshhaa/DevOps-Interview-Questions',
			href: 'https://github.com/NotHarshhaa/DevOps-Interview-Questions'
		  }
		},
		{
		  title: 'Into the DevOps',
		  techStack: ['DevOps'],
		  description: 'Comprehensive DevOps interview guide covering Linux, AWS, Kubernetes, Terraform, Docker, and more.',
		  link: {
			label: 'github.com/NotHarshhaa/into-the-devops',
			href: 'https://github.com/NotHarshhaa/into-the-devops'
		  }
		}
	]			
}

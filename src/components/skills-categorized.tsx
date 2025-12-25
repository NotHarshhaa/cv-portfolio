'use client'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface SkillsCategorizedProps {
	skills: string[]
}

const skillCategories: Record<string, string[]> = {
	'Cloud Platforms': ['AWS', 'EC2', 'S3', 'EKS', 'IAM', 'Azure', 'AKS', 'CloudFormation'],
	'Container & Orchestration': ['Kubernetes', 'Docker', 'EKS', 'AKS', 'Helm'],
	'Infrastructure as Code': ['Terraform', 'Ansible', 'ARM', 'CloudFormation'],
	'CI/CD Tools': ['Jenkins', 'GitHub Actions', 'Azure DevOps', 'CI/CD', 'GitLab', 'GitOps'],
	'Monitoring & Logging': ['Prometheus', 'Grafana', 'ELK Stack', 'Monitoring', 'Logging'],
	'Operating Systems': ['Linux', 'Ubuntu', 'CentOS'],
	'Scripting & Languages': ['Python', 'Bash', 'Shell Scripting', 'YAML'],
	'Version Control': ['Git', 'GitHub', 'GitLab'],
	'Web Servers': ['NGINX'],
	'Other Tools': ['Jira', 'Confluence', 'VS Code'],
	'Soft Skills': [
		'Agile Methodologies',
		'Collaboration',
		'Problem Solving',
		'Communication',
		'Teamwork',
		'Adaptability',
		'Open Source',
		'Community Engagement',
		'Continuous Learning'
	]
}

export function SkillsCategorized({ skills }: SkillsCategorizedProps) {
	const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(['Cloud Platforms', 'Container & Orchestration', 'Infrastructure as Code']))

	const categorizedSkills: Record<string, string[]> = {}
	const uncategorized: string[] = []

	// Categorize skills
	skills.forEach((skill) => {
		let found = false
		for (const [category, categorySkills] of Object.entries(skillCategories)) {
			if (categorySkills.some((catSkill) => skill.toLowerCase().includes(catSkill.toLowerCase()) || catSkill.toLowerCase().includes(skill.toLowerCase()))) {
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

	const toggleCategory = (category: string) => {
		const newExpanded = new Set(expandedCategories)
		if (newExpanded.has(category)) {
			newExpanded.delete(category)
		} else {
			newExpanded.add(category)
		}
		setExpandedCategories(newExpanded)
	}

	return (
		<div className='space-y-4'>
			{Object.entries(categorizedSkills).map(([category, categorySkills]) => (
				<Card key={category} className='overflow-hidden transition-all duration-300 hover:shadow-md'>
					<CardHeader className='pb-3 p-4'>
						<button
							type='button'
							className={cn(
								'w-full flex items-center justify-between p-0 h-auto font-semibold text-left transition-colors rounded-md',
								'hover:bg-accent/50 active:bg-accent',
								'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'
							)}
							onClick={() => toggleCategory(category)}
						>
							<CardTitle className='text-base'>{category}</CardTitle>
							{expandedCategories.has(category) ? (
								<ChevronUpIcon className='size-4 flex-shrink-0' />
							) : (
								<ChevronDownIcon className='size-4 flex-shrink-0' />
							)}
						</button>
					</CardHeader>
					{expandedCategories.has(category) && (
						<CardContent className='pt-0'>
							<div className='flex flex-wrap gap-2'>
								{categorySkills.map((skill) => (
									<Badge key={skill} className='transition-all duration-200 hover:scale-105 hover:shadow-md'>
										{skill}
									</Badge>
								))}
							</div>
						</CardContent>
					)}
				</Card>
			))}
			{uncategorized.length > 0 && (
				<Card className='overflow-hidden transition-all duration-300 hover:shadow-md'>
					<CardHeader className='pb-3 p-4'>
						<CardTitle className='text-base'>Other Skills</CardTitle>
					</CardHeader>
					<CardContent>
						<div className='flex flex-wrap gap-2'>
							{uncategorized.map((skill) => (
								<Badge key={skill} className='transition-all duration-200 hover:scale-105 hover:shadow-md'>
									{skill}
								</Badge>
							))}
						</div>
					</CardContent>
				</Card>
			)}
		</div>
	)
}


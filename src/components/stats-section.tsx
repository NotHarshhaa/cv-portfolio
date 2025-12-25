'use client'

import { Card, CardContent } from '@/components/ui/card'
import { RESUME_DATA } from '@/data/resume-data'
import { BriefcaseIcon, GraduationCapIcon, CodeIcon, AwardIcon } from 'lucide-react'

export function StatsSection() {
	const stats = [
		{
			label: 'Years Experience',
			value: new Date().getFullYear() - 2020,
			icon: BriefcaseIcon,
			description: 'Professional experience'
		},
		{
			label: 'Projects',
			value: RESUME_DATA.projects.length,
			icon: CodeIcon,
			description: 'Open source & personal'
		},
		{
			label: 'Companies',
			value: RESUME_DATA.work.length,
			icon: BriefcaseIcon,
			description: 'Worked with'
		},
		{
			label: 'Skills',
			value: RESUME_DATA.skills.length,
			icon: AwardIcon,
			description: 'Technologies mastered'
		}
	]

	return (
		<div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
			{stats.map((stat, index) => {
				const Icon = stat.icon
				return (
					<Card key={index} className='text-center transition-all duration-300 hover:shadow-lg hover:scale-105'>
						<CardContent className='pt-6 pb-4'>
							<Icon className='size-8 mx-auto mb-2 text-primary' />
							<div className='text-3xl font-bold mb-1'>{stat.value}+</div>
							<div className='text-sm text-muted-foreground font-medium'>{stat.label}</div>
							<div className='text-xs text-muted-foreground mt-1'>{stat.description}</div>
						</CardContent>
					</Card>
				)
			})}
		</div>
	)
}


'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BriefcaseIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Work {
	company: string
	link?: string
	badges: string[]
	jobs: {
		title: string
		start: string
		end: string
		description: string[]
	}[]
}

interface WorkTimelineProps {
	work: Work[]
}

export function WorkTimeline({ work }: WorkTimelineProps) {
	return (
		<div className='relative'>
			{/* Timeline line */}
			<div className='absolute left-4 top-0 bottom-0 w-0.5 bg-border md:left-8' />
			
			<div className='space-y-8'>
				{work.map((workItem) => (
					<div key={workItem.company} className='relative pl-12 md:pl-16'>
						{/* Timeline dot */}
						<div className='absolute left-0 top-2 md:left-4'>
							<div className='size-8 rounded-full bg-background border-4 border-primary flex items-center justify-center'>
								<BriefcaseIcon className='size-4 text-primary' />
							</div>
						</div>

						<Card className='transition-all duration-300 hover:shadow-lg hover:border-primary/20'>
							<CardHeader>
								<h3 className='text-base inline-flex items-center gap-x-1 font-semibold leading-none'>
									{workItem.link ? (
										<a
											className='hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded'
											href={workItem.link}
											target='_blank'
											rel='noreferrer'
											aria-label={`Visit ${workItem.company} website`}
										>
											{workItem.company}
										</a>
									) : (
										<span>{workItem.company}</span>
									)}

									<span className='inline-flex gap-x-1'>
										{workItem.badges.map((badge) => (
											<Badge variant='secondary' className='align-middle text-xs' key={badge}>
												{badge}
											</Badge>
										))}
									</span>
								</h3>
							</CardHeader>

							{workItem.jobs.map((job, jobIndex) => (
								<CardContent key={jobIndex} className={cn('mt-2 mb-4 text-xs', jobIndex > 0 && 'border-t pt-4')}>
									<div className='flex flex-col md:flex-row md:items-center justify-between gap-x-2 text-sm mb-3'>
										<h4 className='font-mono text-primary font-semibold'>{job.title}</h4>
										<time className='tabular-nums text-muted-foreground font-medium' dateTime={`${job.start}/${job.end}`}>
											{job.start} - {job.end}
										</time>
									</div>
									<ul className='space-y-2'>
										{job.description.map((item, descIndex) => (
											<li key={descIndex} className='flex gap-2'>
												<span className='text-primary mt-1.5'>▸</span>
												<span className='flex-1'>{item}</span>
											</li>
										))}
									</ul>
								</CardContent>
							))}
						</Card>
					</div>
				))}
			</div>
		</div>
	)
}


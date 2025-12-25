import React from 'react'
import {
	Card,
	CardHeader,
	CardContent,
	CardDescription,
	CardTitle,
  } from './ui/card'
  import { Badge } from './ui/badge'
  
  interface Props {
	title: string
	description: string
	tags: readonly string[]
	link?: string
	isNew?: boolean
  }
  
  export const ProjectCard = React.memo(function ProjectCard({ title, description, tags, link, isNew }: Props) {
	return (
	  <Card className="group flex flex-col overflow-hidden border border-border bg-card text-card-foreground p-3 transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 animate-fade-in">
		<CardHeader>
		  <div className="space-y-1">
			<div className="flex items-start justify-between gap-2">
				<CardTitle className="text-base flex-1">
				  {link ? (
					<a
					  href={link}
					  target="_blank"
					  className="inline-flex items-center gap-1.5 hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded transition-colors"
					  rel="noreferrer"
					  aria-label={`Visit ${title} project`}
					>
					  {title}
					  <span className="h-1.5 w-1.5 rounded-full bg-green-500 transition-all duration-300 group-hover:scale-150 group-hover:bg-green-400" aria-hidden="true" />
					</a>
				  ) : (
					title
				  )}
				</CardTitle>
				{isNew && (
					<Badge className="px-2 py-0.5 text-[10px] font-semibold bg-primary text-primary-foreground shrink-0 transition-all duration-200 hover:scale-105" variant="default">
						NEW
					</Badge>
				)}
			</div>
			<div className="hidden font-mono text-xs underline print:visible">
			  {link?.replace('https://', '').replace('www.', '').replace('/', '')}
			</div>
			<CardDescription className="font-mono text-xs leading-relaxed text-muted-foreground">
			  {description}
			</CardDescription>
		  </div>
		</CardHeader>
		<CardContent className="mt-auto flex">
		  <div className="mt-2 flex flex-wrap gap-1">
			{tags.map((tag) => (
			  <Badge className="px-1.5 py-0.5 text-[10px] transition-all duration-200 hover:bg-primary/20 hover:scale-105" variant="secondary" key={tag}>
				{tag}
			  </Badge>
			))}
		  </div>
		</CardContent>
	  </Card>
	)
  })
  
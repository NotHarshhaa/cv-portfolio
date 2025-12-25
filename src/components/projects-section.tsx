'use client'

import React, { useState } from 'react'
import { ProjectCard } from '@/components/project-card'
import { ProjectFilter } from '@/components/project-filter'

interface Project {
	title: string
	description: string
	techStack: readonly string[]
	link?: {
		href: string
		label: string
	}
	isNew?: boolean
}

interface ProjectsSectionProps {
	projects: Project[]
}

const MemoizedProjectCard = React.memo(ProjectCard)

export function ProjectsSection({ projects }: ProjectsSectionProps) {
	const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects || [])

	// Ensure filteredProjects is always an array
	const safeFilteredProjects = filteredProjects || projects || []

	return (
		<>
			<ProjectFilter projects={projects} onFilterChange={setFilteredProjects} />
			<div className='-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3'>
				{safeFilteredProjects.map((project) => (
					<MemoizedProjectCard
						key={project.title}
						title={project.title}
						description={project.description}
						tags={project.techStack}
						link={project.link?.href}
						isNew={project.isNew}
					/>
				))}
			</div>
			{safeFilteredProjects.length === 0 && (
				<div className='text-center py-12 text-muted-foreground'>
					<p>No projects found matching your search criteria.</p>
				</div>
			)}
		</>
	)
}


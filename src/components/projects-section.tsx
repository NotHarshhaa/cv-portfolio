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
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(
    projects || []
  )

  const safeFilteredProjects = filteredProjects || projects || []

  return (
    <div className="space-y-6">
      <ProjectFilter projects={projects} onFilterChange={setFilteredProjects} />
      <ul className="-mx-4 border-t border-border sm:-mx-6">
        {safeFilteredProjects.map((project, index) => (
          <MemoizedProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tags={project.techStack}
            link={project.link?.href}
            isNew={project.isNew}
            isLast={index === safeFilteredProjects.length - 1}
          />
        ))}
      </ul>
      {safeFilteredProjects.length === 0 && (
        <p className="py-8 text-center text-sm text-muted-foreground">
          No projects found matching your search criteria.
        </p>
      )}
    </div>
  )
}

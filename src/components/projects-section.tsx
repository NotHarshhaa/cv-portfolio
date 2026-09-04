'use client'

import React, { useState, useMemo } from 'react'
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
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const safeProjects = useMemo(() => projects || [], [projects])

  const allTags = useMemo(() => {
    const tags = new Set<string>()
    safeProjects.forEach((project) => {
      project?.techStack?.forEach((tag) => tags.add(tag))
    })
    return Array.from(tags).sort()
  }, [safeProjects])

  const filteredProjects = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()
    return safeProjects.filter((project) => {
      const matchesSearch =
        query === '' ||
        project.title?.toLowerCase().includes(query) ||
        project.description?.toLowerCase().includes(query) ||
        project.techStack?.some((tag) => tag.toLowerCase().includes(query))

      const matchesTag =
        selectedTag === null || project.techStack?.includes(selectedTag)

      return matchesSearch && matchesTag
    })
  }, [safeProjects, searchQuery, selectedTag])

  return (
    <div className="space-y-6">
      <ProjectFilter
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedTag={selectedTag}
        onTagChange={setSelectedTag}
        allTags={allTags}
        totalCount={safeProjects.length}
        filteredCount={filteredProjects.length}
      />
      <ul className="-mx-4 border-t border-border sm:-mx-6">
        {filteredProjects.map((project, index) => (
          <MemoizedProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tags={project.techStack}
            link={project.link?.href}
            isNew={project.isNew}
            isLast={index === filteredProjects.length - 1}
          />
        ))}
      </ul>
      {filteredProjects.length === 0 && (
        <p className="py-8 text-center text-sm text-muted-foreground">
          No projects found matching your search criteria.
        </p>
      )}
    </div>
  )
}

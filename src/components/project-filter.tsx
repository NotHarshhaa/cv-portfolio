'use client'

import React, { useState, useMemo } from 'react'
import { Input } from '@/components/ui/input'
import { SearchIcon, XIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Project {
  title: string
  description: string
  techStack: readonly string[]
  isNew?: boolean
}

interface ProjectFilterProps {
  projects: Project[]
  onFilterChange: (filteredProjects: Project[]) => void
}

export function ProjectFilter({ projects, onFilterChange }: ProjectFilterProps) {
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
    return safeProjects.filter((project) => {
      const matchesSearch =
        searchQuery === '' ||
        project.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack?.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        )

      const matchesTag =
        selectedTag === null || project.techStack?.includes(selectedTag)

      return matchesSearch && matchesTag
    })
  }, [safeProjects, searchQuery, selectedTag])

  React.useEffect(() => {
    if (filteredProjects && Array.isArray(filteredProjects)) {
      onFilterChange(filteredProjects)
    }
  }, [filteredProjects, onFilterChange])

  return (
    <div className="mb-2 space-y-4 print:hidden">
      <div className="relative">
        <SearchIcon className="absolute top-1/2 left-0 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pr-10 pl-7"
        />
        {searchQuery && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-1/2 right-0 size-8 -translate-y-1/2"
            onClick={() => setSearchQuery('')}
            aria-label="Clear search"
          >
            <XIcon className="size-4" />
          </Button>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        <Button
          variant={selectedTag === null ? 'default' : 'outline'}
          size="xs"
          onClick={() => setSelectedTag(null)}
        >
          All
        </Button>
        {allTags.map((tag) => (
          <Button
            key={tag}
            variant={selectedTag === tag ? 'default' : 'outline'}
            size="xs"
            onClick={() =>
              setSelectedTag(selectedTag === tag ? null : tag)
            }
          >
            {tag}
          </Button>
        ))}
      </div>
      {filteredProjects.length !== safeProjects.length && (
        <p className="text-sm text-muted-foreground">
          Showing {filteredProjects.length} of {safeProjects.length} projects
        </p>
      )}
    </div>
  )
}

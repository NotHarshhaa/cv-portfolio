'use client'

import React from 'react'
import { Input } from '@/components/ui/input'
import { SearchIcon, XIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ProjectFilterProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  selectedTag: string | null
  onTagChange: (tag: string | null) => void
  allTags: string[]
  totalCount: number
  filteredCount: number
}

export function ProjectFilter({
  searchQuery,
  onSearchChange,
  selectedTag,
  onTagChange,
  allTags,
  totalCount,
  filteredCount
}: ProjectFilterProps) {
  return (
    <div className="mb-2 space-y-4 print:hidden">
      <div className="relative">
        <SearchIcon className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pr-10 pl-9"
          aria-label="Search projects by name, description, or technology"
        />
        {searchQuery && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-1/2 right-1 size-8 -translate-y-1/2"
            onClick={() => onSearchChange('')}
            aria-label="Clear search query"
          >
            <XIcon className="size-4" />
          </Button>
        )}
      </div>

      <div
        role="group"
        aria-label="Filter projects by technology"
        className="flex flex-wrap gap-2"
      >
        <Button
          variant={selectedTag === null ? 'default' : 'outline'}
          size="xs"
          onClick={() => onTagChange(null)}
          aria-pressed={selectedTag === null}
        >
          All
        </Button>
        {allTags.map((tag) => (
          <Button
            key={tag}
            variant={selectedTag === tag ? 'default' : 'outline'}
            size="xs"
            onClick={() => onTagChange(selectedTag === tag ? null : tag)}
            aria-pressed={selectedTag === tag}
          >
            {tag}
          </Button>
        ))}
      </div>

      {filteredCount !== totalCount && (
        <p className="text-sm text-muted-foreground">
          Showing {filteredCount} of {totalCount} projects
        </p>
      )}
    </div>
  )
}

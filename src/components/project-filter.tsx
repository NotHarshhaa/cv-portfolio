'use client'

import { useState, useMemo } from 'react'
import { Input } from '@/components/ui/input'
import { SearchIcon, XIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ProjectFilterProps {
	projects: Array<{
		title: string
		description: string
		techStack: readonly string[]
	}>
	onFilterChange: (filteredProjects: typeof projects) => void
}

export function ProjectFilter({ projects, onFilterChange }: ProjectFilterProps) {
	const [searchQuery, setSearchQuery] = useState('')
	const [selectedTag, setSelectedTag] = useState<string | null>(null)

	const allTags = useMemo(() => {
		const tags = new Set<string>()
		projects.forEach((project) => {
			project.techStack.forEach((tag) => tags.add(tag))
		})
		return Array.from(tags).sort()
	}, [projects])

	const filteredProjects = useMemo(() => {
		return projects.filter((project) => {
			const matchesSearch =
				searchQuery === '' ||
				project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
				project.techStack.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

			const matchesTag = selectedTag === null || project.techStack.includes(selectedTag)

			return matchesSearch && matchesTag
		})
	}, [projects, searchQuery, selectedTag])

	useMemo(() => {
		onFilterChange(filteredProjects)
	}, [filteredProjects, onFilterChange])

	return (
		<div className='space-y-4 mb-6'>
			<div className='relative'>
				<SearchIcon className='absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground' />
				<Input
					type='text'
					placeholder='Search projects...'
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					className='pl-10 pr-10'
				/>
				{searchQuery && (
					<Button
						variant='ghost'
						size='icon'
						className='absolute right-1 top-1/2 -translate-y-1/2 size-8'
						onClick={() => setSearchQuery('')}
						aria-label='Clear search'
					>
						<XIcon className='size-4' />
					</Button>
				)}
			</div>
			<div className='flex flex-wrap gap-2'>
				<Button
					variant={selectedTag === null ? 'default' : 'outline'}
					size='sm'
					onClick={() => setSelectedTag(null)}
					className='text-xs'
				>
					All
				</Button>
				{allTags.map((tag) => (
					<Button
						key={tag}
						variant={selectedTag === tag ? 'default' : 'outline'}
						size='sm'
						onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
						className='text-xs transition-all duration-200 hover:scale-105'
					>
						{tag}
					</Button>
				))}
			</div>
			{filteredProjects.length !== projects.length && (
				<p className='text-sm text-muted-foreground'>
					Showing {filteredProjects.length} of {projects.length} projects
				</p>
			)}
		</div>
	)
}


'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { MenuIcon, XIcon, FileTextIcon, UserIcon, BriefcaseIcon, GraduationCapIcon, CodeIcon, FolderKanbanIcon } from 'lucide-react'

const sections = [
	{ id: 'about', label: 'About', icon: UserIcon },
	{ id: 'work', label: 'Experience', icon: BriefcaseIcon },
	{ id: 'education', label: 'Education', icon: GraduationCapIcon },
	{ id: 'skills', label: 'Skills', icon: CodeIcon },
	{ id: 'projects', label: 'Projects', icon: FolderKanbanIcon }
]

export function NavigationMenu() {
	const [activeSection, setActiveSection] = useState('')
	const [isOpen, setIsOpen] = useState(false)

	// Prevent body scroll when menu is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}
		return () => {
			document.body.style.overflow = ''
		}
	}, [isOpen])

	useEffect(() => {
		// Use Intersection Observer for accurate section detection
		const observerOptions = {
			root: null,
			rootMargin: '-30% 0px -50% 0px',
			threshold: [0, 0.25, 0.5, 0.75, 1]
		}

		const sectionVisibility = new Map<string, number>()

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				const id = entry.target.id
				if (entry.isIntersecting) {
					// Calculate how much of the section is visible
					const ratio = entry.intersectionRatio
					sectionVisibility.set(id, ratio)
				} else {
					sectionVisibility.delete(id)
				}

				// Find the section with the highest visibility ratio
				if (sectionVisibility.size > 0) {
					let maxRatio = 0
					let mostVisibleSection = ''

					sectionVisibility.forEach((ratio, id) => {
						if (ratio > maxRatio) {
							maxRatio = ratio
							mostVisibleSection = id
						}
					})

					if (mostVisibleSection) {
						setActiveSection(mostVisibleSection)
					}
				}
			})
		}, observerOptions)

		// Observe all sections
		const elements: HTMLElement[] = []
		sections.forEach((section) => {
			const element = document.getElementById(section.id)
			if (element) {
				observer.observe(element)
				elements.push(element)
			}
		})

		// Fallback scroll handler for immediate feedback
		const handleScroll = () => {
			const scrollPosition = window.scrollY + 120
			
			// Only update if Intersection Observer hasn't set it recently
			// This prevents conflicts
			for (let i = sections.length - 1; i >= 0; i--) {
				const section = sections[i]
				const element = document.getElementById(section.id)
				if (element) {
					const { offsetTop, offsetHeight } = element
					if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
						setActiveSection(section.id)
						break
					}
				}
			}

			// If at the top, default to first section
			if (scrollPosition < 150) {
				setActiveSection(sections[0].id)
			}
		}

		// Check initial scroll position
		const checkInitialSection = () => {
			handleScroll()
		}

		// Small delay to ensure DOM is ready
		setTimeout(checkInitialSection, 100)

		// Add scroll listener as backup
		window.addEventListener('scroll', handleScroll, { passive: true })

		return () => {
			observer.disconnect()
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const scrollToSection = (id: string) => {
		// Immediately set active section when clicked
		setActiveSection(id)
		
		const element = document.getElementById(id)
		if (element) {
			const offset = 100
			const elementPosition = element.getBoundingClientRect().top
			const offsetPosition = elementPosition + window.pageYOffset - offset

			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth'
			})
			setIsOpen(false)
		}
	}

	return (
		<>
			{/* Desktop Navigation */}
			<nav className='hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-40 print:hidden'>
				<div className='flex items-center gap-4 rounded-full border border-border bg-background/95 backdrop-blur-xl px-5 py-2.5 shadow-2xl'>
					<div className='flex items-center gap-2.5 px-3 py-1.5'>
						<div className='flex items-center justify-center size-7 rounded-lg bg-primary text-primary-foreground shadow-sm'>
							<FileTextIcon className='size-4' />
						</div>
						<div className='flex items-baseline gap-1.5'>
							<span className='text-sm font-bold tracking-tight'>CV</span>
							<span className='hidden lg:inline text-xs font-medium text-muted-foreground tracking-wide'>Portfolio</span>
						</div>
					</div>
					<div className='h-6 w-px bg-border' />
					<div className='flex gap-1'>
						{sections.map((section) => (
							<Button
								key={section.id}
								variant='ghost'
								size='sm'
								onClick={() => scrollToSection(section.id)}
								className={cn(
									'transition-all duration-200 rounded-full px-3.5',
									activeSection === section.id
										? 'bg-foreground text-background hover:bg-foreground/90 font-medium dark:bg-foreground dark:text-background'
										: 'hover:bg-accent hover:text-accent-foreground text-foreground'
								)}
							>
								{section.label}
							</Button>
						))}
					</div>
				</div>
			</nav>

			{/* Mobile Navigation */}
			<div className='md:hidden fixed top-4 right-4 z-50 print:hidden'>
				<Button
					variant='outline'
					size='icon'
					onClick={() => setIsOpen(!isOpen)}
					className='size-12 rounded-full shadow-2xl bg-background border-2 border-border hover:scale-110 hover:shadow-3xl transition-all duration-300'
					aria-label='Toggle navigation menu'
					aria-expanded={isOpen}
				>
					{isOpen ? (
						<XIcon className='size-5 transition-transform duration-300 rotate-90' />
					) : (
						<MenuIcon className='size-5' />
					)}
				</Button>

				{isOpen && (
					<>
						{/* Backdrop */}
						<div
							className='fixed inset-0 bg-black/60 backdrop-blur-md z-40 animate-fade-in'
							onClick={() => setIsOpen(false)}
							aria-hidden='true'
						/>
						{/* Mobile Menu */}
						<div className='fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-background border-l-2 border-border shadow-2xl z-50 flex flex-col animate-slide-in-right'>
							{/* Header */}
							<div className='flex items-center justify-between p-6 border-b-2 border-border bg-gradient-to-br from-background to-muted/30'>
								<div className='flex items-center gap-3'>
									<div className='flex items-center justify-center size-12 rounded-xl bg-primary text-primary-foreground shadow-lg ring-2 ring-primary/20'>
										<FileTextIcon className='size-6' />
									</div>
									<div>
										<h2 className='text-xl font-bold tracking-tight'>CV Portfolio</h2>
										<p className='text-xs text-muted-foreground font-medium mt-1'>Navigation Menu</p>
									</div>
								</div>
								<Button
									variant='ghost'
									size='icon'
									onClick={() => setIsOpen(false)}
									className='size-9 rounded-lg hover:bg-destructive/10 hover:text-destructive transition-colors'
									aria-label='Close menu'
								>
									<XIcon className='size-5' />
								</Button>
							</div>
							
							{/* Menu Items */}
							<nav className='flex-1 overflow-y-auto p-5 space-y-3'>
								{sections.map((section, index) => {
									const Icon = section.icon
									return (
										<Button
											key={section.id}
											variant='ghost'
											className={cn(
												'w-full justify-start h-16 px-5 text-base transition-all duration-300 rounded-2xl group relative overflow-hidden',
												activeSection === section.id
													? 'bg-foreground text-background hover:bg-foreground/90 font-semibold shadow-lg dark:bg-foreground dark:text-background'
													: 'hover:bg-accent/50 hover:text-accent-foreground text-foreground active:scale-[0.98] border border-transparent hover:border-border'
											)}
											onClick={() => scrollToSection(section.id)}
											style={{
												animationDelay: `${index * 60}ms`
											}}
										>
											<div className={cn(
												'flex items-center gap-4 w-full',
												activeSection === section.id && 'text-background'
											)}>
												<div className={cn(
													'flex items-center justify-center size-10 rounded-xl transition-all duration-300',
													activeSection === section.id
														? 'bg-background/20 text-background'
														: 'bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary'
												)}>
													<Icon className='size-5' />
												</div>
												<span className='flex-1 text-left font-medium'>{section.label}</span>
												{activeSection === section.id && (
													<div className='size-2 rounded-full bg-background animate-pulse' />
												)}
											</div>
										</Button>
									)
								})}
							</nav>
							
							{/* Footer */}
							<div className='p-5 border-t border-border bg-muted/30'>
								<p className='text-xs text-center text-muted-foreground'>
									Tap outside to close
								</p>
							</div>
						</div>
					</>
				)}
			</div>
		</>
	)
}


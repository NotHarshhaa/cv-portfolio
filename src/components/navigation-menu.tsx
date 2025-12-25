'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { MenuIcon, XIcon, FileTextIcon } from 'lucide-react'

const sections = [
	{ id: 'about', label: 'About' },
	{ id: 'work', label: 'Experience' },
	{ id: 'education', label: 'Education' },
	{ id: 'skills', label: 'Skills' },
	{ id: 'projects', label: 'Projects' }
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
				<div className='flex items-center gap-3 rounded-full border border-border bg-background/80 backdrop-blur-sm px-5 py-2.5 shadow-lg'>
					<Badge variant='secondary' className='px-3 py-1 text-xs font-medium flex items-center gap-1.5 shrink-0'>
						<FileTextIcon className='size-3' />
						<span className='hidden lg:inline'>CV Portfolio</span>
						<span className='lg:hidden'>CV</span>
					</Badge>
					<div className='h-4 w-px bg-border' />
					<div className='flex gap-2'>
						{sections.map((section) => (
							<Button
								key={section.id}
								variant='ghost'
								size='sm'
								onClick={() => scrollToSection(section.id)}
								className={cn(
									'transition-all duration-200 rounded-full',
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
					className='size-11 rounded-full shadow-xl bg-background/90 backdrop-blur-md border-2 border-border hover:scale-110 transition-all duration-200'
					aria-label='Toggle navigation menu'
					aria-expanded={isOpen}
				>
					{isOpen ? <XIcon className='size-5' /> : <MenuIcon className='size-5' />}
				</Button>

				{isOpen && (
					<>
						{/* Backdrop */}
						<div
							className='fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fade-in'
							onClick={() => setIsOpen(false)}
							aria-hidden='true'
						/>
						{/* Mobile Menu */}
						<div className='fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-background/98 backdrop-blur-xl border-l border-border shadow-2xl z-50 flex flex-col animate-slide-in-right'>
							{/* Header */}
							<div className='flex items-center justify-between p-6 border-b border-border bg-muted/30'>
								<div className='flex items-center gap-2'>
									<FileTextIcon className='size-5 text-primary' />
									<div>
										<h2 className='text-lg font-semibold'>CV Portfolio</h2>
										<p className='text-xs text-muted-foreground'>Navigation Menu</p>
									</div>
								</div>
								<Button
									variant='ghost'
									size='icon'
									onClick={() => setIsOpen(false)}
									className='size-9 rounded-full'
									aria-label='Close menu'
								>
									<XIcon className='size-5' />
								</Button>
							</div>
							
							{/* Menu Items */}
							<nav className='flex-1 overflow-y-auto p-4 space-y-2'>
								{sections.map((section, index) => (
									<Button
										key={section.id}
										variant='ghost'
										className={cn(
											'w-full justify-start h-14 px-4 text-base transition-all duration-200 rounded-xl',
											activeSection === section.id
												? 'bg-foreground text-background hover:bg-foreground/90 font-semibold shadow-md dark:bg-foreground dark:text-background'
												: 'hover:bg-accent hover:text-accent-foreground text-foreground active:scale-95'
										)}
										onClick={() => scrollToSection(section.id)}
										style={{
											animationDelay: `${index * 50}ms`
										}}
									>
										<span className='flex-1 text-left'>{section.label}</span>
										{activeSection === section.id && (
											<span className='ml-2 size-2 rounded-full bg-background dark:bg-background' />
										)}
									</Button>
								))}
							</nav>
						</div>
					</>
				)}
			</div>
		</>
	)
}


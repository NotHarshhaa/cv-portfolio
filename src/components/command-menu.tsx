'use client'

import * as React from 'react'
import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut
} from '@/components/ui/command'
import { Button } from './ui/button'
import { 
	CommandIcon, 
	SunIcon, 
	MoonIcon, 
	MailIcon, 
	PhoneIcon, 
	GlobeIcon, 
	LinkIcon,
	ArrowUpIcon,
	CopyIcon,
	ExternalLinkIcon,
	PrinterIcon
} from 'lucide-react'
import { GitHubIcon, LinkedInIcon, TelegramIcon } from '@/components/icons'
import { useTheme } from 'next-themes'
import { Badge } from './ui/badge'

interface Link {
	url: string
	title: string
	tag?: string
}

interface Props {
	links: Link[]
}

const RECENT_STORAGE_KEY = 'recent_pages'

// Icon mapping for different link types
const getLinkIcon = (url: string, title: string) => {
	if (url.includes('github.com')) return <GitHubIcon className='mr-2 h-4 w-4 flex-shrink-0' />
	if (url.includes('linkedin.com')) return <LinkedInIcon className='mr-2 h-4 w-4 flex-shrink-0' />
	if (url.includes('t.me') || url.includes('telegram')) return <TelegramIcon className='mr-2 h-4 w-4 flex-shrink-0' />
	if (url.startsWith('mailto:')) return <MailIcon className='mr-2 h-4 w-4 flex-shrink-0' />
	if (url.startsWith('tel:')) return <PhoneIcon className='mr-2 h-4 w-4 flex-shrink-0' />
	if (title.toLowerCase().includes('portfolio') || title.toLowerCase().includes('website')) return <GlobeIcon className='mr-2 h-4 w-4 flex-shrink-0' />
	return <LinkIcon className='mr-2 h-4 w-4 flex-shrink-0' />
}

// Categorize links
const categorizeLink = (link: Link): string => {
	if (link.tag) return link.tag
	if (link.url.includes('github.com')) return 'GitHub'
	if (link.url.includes('linkedin.com')) return 'Professional'
	if (link.url.startsWith('mailto:')) return 'Contact'
	if (link.url.startsWith('tel:')) return 'Contact'
	if (link.title.toLowerCase().includes('portfolio') || link.title.toLowerCase().includes('website')) return 'Portfolio'
	return 'Links'
}

export function CommandMenu({ links }: Props) {
	const [open, setOpen] = React.useState(false)
	const [recentPages, setRecentPages] = React.useState<Link[]>([])
	const { theme, setTheme } = useTheme()

	React.useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
				e.preventDefault()
				setOpen((open) => !open)
			}
		}
		document.addEventListener('keydown', down)
		return () => document.removeEventListener('keydown', down)
	}, [])

	React.useEffect(() => {
		const stored = localStorage.getItem(RECENT_STORAGE_KEY)
		if (stored) {
			try {
				setRecentPages(JSON.parse(stored))
			} catch {
				// Invalid JSON, ignore
			}
		}
	}, [])

	const handleLinkSelect = (link: Link) => {
		setOpen(false)
		window.open(link.url, '_blank')

		const updated = [link, ...recentPages.filter((l) => l.url !== link.url)].slice(0, 5)
		setRecentPages(updated)
		localStorage.setItem(RECENT_STORAGE_KEY, JSON.stringify(updated))
	}

	const handleCopyLink = (e: React.MouseEvent, url: string) => {
		e.stopPropagation()
		const textToCopy = url.replace('mailto:', '').replace('tel:', '')
		void navigator.clipboard.writeText(textToCopy)
		setOpen(false)
	}

	const handleScrollToTop = () => {
		setOpen(false)
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	const grouped = links.reduce<Record<string, Link[]>>((acc, link) => {
		const tag = categorizeLink(link)
		acc[tag] = acc[tag] || []
		acc[tag].push(link)
		return acc
	}, {})

	return (
		<>
			<p className='fixed bottom-0 left-0 right-0 hidden border-t bg-background/95 backdrop-blur-sm border-t-border text-muted-foreground p-2 text-center text-xs print:hidden xl:block z-40'>
				Press{' '}
				<kbd className='pointer-events-none inline-flex h-6 select-none items-center gap-1 rounded-md border border-border bg-muted px-2 font-mono text-xs font-medium shadow-sm'>
					<span className='text-xs'>⌘</span>K
				</kbd>{' '}
				to open command menu
			</p>
			<Button
				onClick={() => setOpen((open) => !open)}
				variant='outline'
				size='icon'
				className='fixed bottom-4 right-4 size-12 rounded-full shadow-xl bg-background/90 backdrop-blur-sm border-2 border-border print:hidden xl:hidden z-50 transition-all duration-200 hover:scale-110'
				aria-label='Open command menu'
			>
				<CommandIcon className='h-5 w-5' />
			</Button>
			<CommandDialog open={open} onOpenChange={setOpen}>
				<CommandInput placeholder='Search links, actions, or type a command...' className='h-14' />
				<CommandList className='max-h-[500px]'>
					<CommandEmpty>
						<div className='flex flex-col items-center justify-center py-8 text-center'>
							<p className='text-sm text-muted-foreground mb-2'>No results found.</p>
							<p className='text-xs text-muted-foreground'>Try a different search term.</p>
						</div>
					</CommandEmpty>

					<CommandGroup heading='Quick Actions'>
						<CommandItem
							onSelect={() => {
								setTheme(theme === 'dark' ? 'light' : 'dark')
								setOpen(false)
							}}
							className='cursor-pointer'
						>
							{theme === 'dark' ? (
								<>
									<SunIcon className='mr-2 h-4 w-4' />
									<span>Switch to Light Mode</span>
								</>
							) : (
								<>
									<MoonIcon className='mr-2 h-4 w-4' />
									<span>Switch to Dark Mode</span>
								</>
							)}
							<CommandShortcut>⌘T</CommandShortcut>
						</CommandItem>

						<CommandItem
							onSelect={handleScrollToTop}
							className='cursor-pointer'
						>
							<ArrowUpIcon className='mr-2 h-4 w-4' />
							<span>Scroll to Top</span>
							<CommandShortcut>↑</CommandShortcut>
						</CommandItem>

						<CommandItem
							onSelect={() => {
								setOpen(false)
								window.print()
							}}
							className='cursor-pointer'
						>
							<PrinterIcon className='mr-2 h-4 w-4' />
							<span>Print Page</span>
							<CommandShortcut>⌘P</CommandShortcut>
						</CommandItem>
					</CommandGroup>

					{recentPages.length > 0 && (
						<>
							<CommandSeparator />
							<CommandGroup heading='Recently Visited'>
								{recentPages.map((link) => (
									<CommandItem 
										key={link.url} 
										onSelect={() => handleLinkSelect(link)}
										className='cursor-pointer group'
									>
										{getLinkIcon(link.url, link.title)}
										<span className='flex-1'>{link.title}</span>
										<Button
											variant='ghost'
											size='icon'
											className='h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity'
											onClick={(e) => handleCopyLink(e, link.url)}
											aria-label='Copy link'
										>
											<CopyIcon className='h-3 w-3' />
										</Button>
										<ExternalLinkIcon className='ml-2 h-3 w-3 opacity-50' />
									</CommandItem>
								))}
							</CommandGroup>
						</>
					)}

					{Object.entries(grouped)
						.sort(([a], [b]) => {
							// Sort: Contact first, then others alphabetically
							if (a === 'Contact') return -1
							if (b === 'Contact') return 1
							return a.localeCompare(b)
						})
						.map(([tag, tagLinks]) => (
							<React.Fragment key={tag}>
								<CommandSeparator />
								<CommandGroup heading={tag}>
									{tagLinks.map((link) => (
										<CommandItem 
											key={link.url} 
											onSelect={() => handleLinkSelect(link)}
											className='cursor-pointer group'
										>
											{getLinkIcon(link.url, link.title)}
											<span className='flex-1'>{link.title}</span>
											<Button
												variant='ghost'
												size='icon'
												className='h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity'
												onClick={(e) => handleCopyLink(e, link.url)}
												aria-label='Copy link'
											>
												<CopyIcon className='h-3 w-3' />
											</Button>
											<ExternalLinkIcon className='ml-2 h-3 w-3 opacity-50' />
										</CommandItem>
									))}
								</CommandGroup>
							</React.Fragment>
						))}
				</CommandList>
			</CommandDialog>
		</>
	)
}

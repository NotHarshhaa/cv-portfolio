'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowUpIcon } from 'lucide-react'

export function ScrollToTop() {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 300) {
				setIsVisible(true)
			} else {
				setIsVisible(false)
			}
		}

		window.addEventListener('scroll', toggleVisibility)
		return () => window.removeEventListener('scroll', toggleVisibility)
	}, [])

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	if (!isVisible) return null

	return (
		<Button
			onClick={scrollToTop}
			className='fixed bottom-4 left-4 md:bottom-6 md:left-auto md:right-6 z-50 size-12 rounded-full shadow-lg print:hidden transition-all duration-300 hover:scale-110'
			variant='default'
			size='icon'
			aria-label='Scroll to top'
		>
			<ArrowUpIcon className='size-5' />
		</Button>
	)
}


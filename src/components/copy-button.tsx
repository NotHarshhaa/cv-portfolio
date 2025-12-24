'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { CheckIcon, CopyIcon } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

interface CopyButtonProps {
	text: string
	label: string
	className?: string
}

export function CopyButton({ text, label, className }: CopyButtonProps) {
	const [copied, setCopied] = useState(false)

	const copyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(text)
			setCopied(true)
			setTimeout(() => setCopied(false), 2000)
		} catch (err) {
			console.error('Failed to copy:', err)
		}
	}

	const handleClick = () => {
		void copyToClipboard()
	}

	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<Button
					variant='ghost'
					size='icon'
					onClick={handleClick}
					className={className}
					aria-label={`Copy ${label}`}
				>
					{copied ? (
						<CheckIcon className='size-4 text-green-500' />
					) : (
						<CopyIcon className='size-4' />
					)}
				</Button>
			</TooltipTrigger>
			<TooltipContent>{copied ? 'Copied!' : `Copy ${label}`}</TooltipContent>
		</Tooltip>
	)
}


'use client'

import { Button } from '@/components/ui/button'
import { DownloadIcon } from 'lucide-react'
import { RESUME_DATA } from '@/data/resume-data'

export function DownloadResumeButton() {
	const handleDownload = () => {
		// Create a simple text resume or link to a PDF
		const resumeText = `
${RESUME_DATA.name}
${RESUME_DATA.location}
${RESUME_DATA.contact.email.at}
${RESUME_DATA.contact.tel.phoneNumber}

${RESUME_DATA.about}

WORK EXPERIENCE
${RESUME_DATA.work.map((work) => `
${work.company}
${work.jobs.map((job) => `${job.title} | ${job.start} - ${job.end}`).join('\n')}
`).join('\n')}

EDUCATION
${RESUME_DATA.education.map((edu) => `
${edu.school}
${edu.degree} | ${edu.start} - ${edu.end}
`).join('\n')}

SKILLS
${RESUME_DATA.skills.join(', ')}

PROJECTS
${RESUME_DATA.projects.map((p) => `- ${p.title}: ${p.description}`).join('\n')}
		`.trim()

		const blob = new Blob([resumeText], { type: 'text/plain' })
		const url = URL.createObjectURL(blob)
		const a = document.createElement('a')
		a.href = url
		a.download = `${RESUME_DATA.name.replace(/\s+/g, '_')}_Resume.txt`
		document.body.appendChild(a)
		a.click()
		document.body.removeChild(a)
		URL.revokeObjectURL(url)
	}

	return (
		<Button
			onClick={handleDownload}
			variant='outline'
			className='gap-2 transition-all duration-200 hover:scale-105'
		>
			<DownloadIcon className='size-4' />
			Download Resume
		</Button>
	)
}


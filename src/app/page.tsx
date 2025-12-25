import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Section } from '@/components/ui/section'
import { ButtonLink } from '@/components/button-link'
import { ProjectCard } from '@/components/project-card'
import { CommandMenu } from '@/components/command-menu'
import { GlobeIcon } from 'lucide-react'
import { data } from '@/constants'
import { ThemeToggle } from '@/components/theme-toggle'
import { RESUME_DATA } from '@/data/resume-data'
import { NavigationMenu } from '@/components/navigation-menu'
import { ScrollToTop } from '@/components/scroll-to-top'
import { CopyButton } from '@/components/copy-button'
import { SkillsCategorized } from '@/components/skills-categorized'
import { DownloadResumeButton } from '@/components/download-resume-button'
import { StatsSection } from '@/components/stats-section'
import { ProjectsSection } from '@/components/projects-section'
import { WorkTimeline } from '@/components/work-timeline'

// Memoized components for better performance
const MemoizedButtonLink = React.memo(ButtonLink)

// Structured data for SEO
const structuredData = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	name: RESUME_DATA.name,
	jobTitle: 'DevOps & Cloud Engineer',
	url: RESUME_DATA.personalWebsiteUrl.url,
	email: RESUME_DATA.contact.email.at,
	telephone: RESUME_DATA.contact.tel.phoneNumber,
	address: {
		'@type': 'PostalAddress',
		addressLocality: RESUME_DATA.location
	},
	sameAs: RESUME_DATA.contact.social.map((social) => social.url),
	knowsAbout: RESUME_DATA.skills
}

export default function Page() {
	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
			/>
			<NavigationMenu />
			<main id='main-content' className='container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16 pt-28 md:pt-32'>
				<section className='mx-auto w-full max-w-4xl space-y-8 bg-background text-foreground print:space-y-6'>
				<div className='flex flex-col-reverse items-center gap-4 sm:flex-row sm:justify-between animate-fade-in'>
					<div className='flex-1 space-y-3 text-center sm:text-left'>
						<h1 className='text-4xl font-bold tracking-tight sm:text-5xl'>{data.name}</h1>
						<p className='w-full text-pretty font-mono text-base text-muted-foreground md:w-4/5'>
							{data.about}
						</p>
						<div className='flex items-center justify-center gap-x-2 font-mono text-sm text-muted-foreground sm:justify-start'>
							<a
								className='inline-flex items-center gap-x-1.5 hover:text-foreground hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded transition-colors'
								href={data.locationLink}
								target='_blank'
								rel='noreferrer'
								aria-label={`View ${data.location} on Google Maps`}
							>
								<GlobeIcon className='size-4' aria-hidden="true" />
								{data.location}
							</a>
						</div>

						<div className='flex flex-wrap justify-center gap-2 pt-1 sm:justify-start'>
							<MemoizedButtonLink data={data} />
							<DownloadResumeButton />
						</div>
					</div>

					<a 
						href='https://github.com/NotHarshhaa' 
						target='_blank' 
						rel='noopener noreferrer' 
						className='group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-full'
						aria-label="Visit GitHub profile"
					>
						<Avatar className='size-32 border-2 border-border transition-all duration-300 group-hover:scale-105 sm:size-40 shadow-lg' active status="online">
							<AvatarImage src={RESUME_DATA.avatar} alt={RESUME_DATA.name} className='object-cover' />
							<AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
						</Avatar>
					</a>
				</div>

				<Section id='about' className='scroll-mt-28 md:scroll-mt-32 animate-fade-in'>
					<div className='flex items-center justify-between mb-4'>
						<h2 className='text-xl font-bold'>About</h2>
						<CopyButton text={data.contact.email.at} label='email' className='print:hidden' />
					</div>
					<p className='text-pretty font-mono text-sm text-muted-foreground mb-6'>{data.summary}</p>
					<StatsSection />
				</Section>

				<Section id='work' className='scroll-mt-28 md:scroll-mt-32 animate-fade-in'>
					<h2 className='text-xl font-bold mb-6'>Work Experience</h2>
					<WorkTimeline work={data.work} />
				</Section>

				<Section id='education' className='scroll-mt-28 md:scroll-mt-32 animate-fade-in'>
					<h2 className='text-xl font-bold'>Education</h2>
					{data.education.map((education) => (
						<Card key={education.school} className='transition-all duration-300 hover:shadow-lg hover:border-primary/20 animate-fade-in'>
							<CardHeader>
								<h3 className='font-semibold leading-none text-base'>{education.school}</h3>
							</CardHeader>
							<CardContent className='mt-2 mb-4 text-xs'>
								<div className='flex flex-col md:flex-row md:items-center justify-between gap-x-2 text-sm'>
									<h4 className='font-mono text-primary'>{education.degree}</h4>
									<time className='tabular-nums text-muted-foreground' dateTime={`${education.start}/${education.end}`}>
										{education.start} - {education.end}
									</time>
								</div>
								<ul className='mt-2 space-y-1'>
									{education.description.map((item, index) => (
										<li key={index} className='mb-1'>
											• {item}
										</li>
									))}
								</ul>
							</CardContent>
						</Card>
					))}
				</Section>

				<Section id='skills' className='scroll-mt-28 md:scroll-mt-32 animate-fade-in'>
					<h2 className='text-xl font-bold mb-4'>Skills</h2>
					<SkillsCategorized skills={data.skills} />
				</Section>

				<Section id='projects' className='print-force-new-page scroll-mb-16 scroll-mt-28 md:scroll-mt-32 animate-fade-in'>
					<h2 className='text-xl font-bold mb-4'>Projects</h2>
					<ProjectsSection projects={data.projects} />
				</Section>
			</section>

			<CommandMenu
				links={[
					{
						url: data.personalWebsiteUrl.url,
						title: data.personalWebsiteUrl.name
					},
					{
						url: `mailto:${data.contact.email.at}`,
						title: data.contact.email.name
					},
					{
						url: `tel:${data.contact.tel.phoneNumber}`,
						title: data.contact.tel.name
					},
					...data.contact.social.map((socialMediaLink) => ({
						url: socialMediaLink.url,
						title: socialMediaLink.name
					})),
					{
						url: data.contact.link.url,
						title: data.contact.link.name
					}
				]}
			/>
			<div className="fixed top-4 left-4 md:top-8 md:left-auto md:right-8 z-50 print:hidden">
                <ThemeToggle />
            </div>
			<ScrollToTop />
		</main>
		</>
	)
}

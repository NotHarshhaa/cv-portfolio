import React from 'react'
import Image from 'next/image'
import { ButtonLink } from '@/components/button-link'
import { CommandMenu } from '@/components/command-menu'
import { GlobeIcon } from 'lucide-react'
import { data } from '@/constants'
import { RESUME_DATA } from '@/data/resume-data'
import { NavigationMenu } from '@/components/navigation-menu'
import { Corners } from '@/components/frame'
import { ScrollToTop } from '@/components/scroll-to-top'
import { CopyButton } from '@/components/copy-button'
import { SkillsCategorized } from '@/components/skills-categorized'
import { DownloadResumeButton } from '@/components/download-resume-button'
import { StatsSection } from '@/components/stats-section'
import { ProjectsSection } from '@/components/projects-section'
import { WorkTimeline } from '@/components/work-timeline'
import {
  BracketTitle,
  Frame,
  FrameBody,
  FrameHeader
} from '@/components/frame'

const MemoizedButtonLink = React.memo(ButtonLink)

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: RESUME_DATA.name,
  jobTitle: 'Platform Engineer',
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
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <NavigationMenu />
      <main
        id="main-content"
        className="site-shell relative scroll-my-12 pt-24 pb-8 print:p-12 sm:pt-28"
      >
        <div className="flex w-full flex-col gap-4 print:gap-6">
          <Frame>
            <FrameHeader label="CV / Resume">
              <span className="font-mono text-[11px] text-muted-foreground tabular-nums print:hidden">
                Print ready
              </span>
            </FrameHeader>
            <FrameBody className="py-8 sm:py-10">
              <div className="flex flex-col-reverse items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex-1 space-y-4">
                  <div>
                    <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                      <BracketTitle>{data.name}</BracketTitle>
                    </h1>
                    {data.role && (
                      <p className="mt-2 text-sm font-medium tracking-wide text-foreground/80 sm:text-base">
                        {data.role}
                      </p>
                    )}
                    <p className="mt-3 max-w-2xl text-base text-muted-foreground">
                      {data.about}
                    </p>
                  </div>

                  <a
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-opacity hover:opacity-70"
                    href={data.locationLink}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${data.location} on Google Maps`}
                  >
                    <GlobeIcon className="size-4" aria-hidden="true" />
                    {data.location}
                  </a>

                  <div className="flex flex-wrap gap-2 pt-1">
                    <MemoizedButtonLink data={data} />
                    <DownloadResumeButton />
                  </div>
                </div>

                <a
                  href="https://github.com/NotHarshhaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 focus:outline-none"
                  aria-label="Visit GitHub profile"
                >
                  <span className="relative block">
                    <Corners />
                    <div className="relative size-28 overflow-hidden border border-border bg-muted sm:size-32">
                      <Image
                        src={RESUME_DATA.avatar}
                        alt={RESUME_DATA.name}
                        width={128}
                        height={128}
                        priority
                        className="size-full object-cover"
                      />
                    </div>
                  </span>
                </a>
              </div>
            </FrameBody>
          </Frame>

          <Frame id="about" className="scroll-mt-28">
            <FrameHeader label="About">
              <CopyButton
                text={data.contact.email.at}
                label={`email (${data.contact.email.at})`}
                className="print:hidden"
              />
            </FrameHeader>
            <FrameBody className="space-y-6">
              <div className="space-y-4">
                {data.summary
                  .split(/\n\n+/)
                  .filter(Boolean)
                  .map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 40)}
                      className="text-sm leading-relaxed text-muted-foreground sm:text-base"
                    >
                      {paragraph.trim()}
                    </p>
                  ))}
              </div>
              <StatsSection />
            </FrameBody>
          </Frame>

          <Frame id="work" className="scroll-mt-28 overflow-visible">
            <FrameHeader label="Work Experience" />
            <WorkTimeline work={data.work} />
          </Frame>

          <Frame id="education" className="scroll-mt-28 overflow-visible">
            <FrameHeader label="Education" />
            <ul>
              {data.education.map((education, index) => (
                <li
                  key={education.school}
                  className={
                    index < data.education.length - 1
                      ? 'border-b border-border'
                      : undefined
                  }
                >
                  <div className="space-y-3 px-4 py-6 sm:px-6 sm:py-8">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                      <h3 className="text-base font-medium">
                        {education.school}
                      </h3>
                      <time className="shrink-0 font-mono text-xs text-muted-foreground tabular-nums">
                        {education.start} — {education.end}
                      </time>
                    </div>
                    <p className="text-sm text-foreground/90">
                      {education.degree}
                    </p>
                    <ul className="space-y-1.5">
                      {education.description.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm leading-relaxed text-muted-foreground"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </Frame>

          <Frame id="skills" className="scroll-mt-28">
            <FrameHeader label="Skills" />
            <FrameBody>
              <SkillsCategorized skills={data.skills} />
            </FrameBody>
          </Frame>

          <Frame
            id="projects"
            className="print-force-new-page scroll-mt-28 overflow-visible"
          >
            <FrameHeader label="Projects" />
            <FrameBody>
              <ProjectsSection projects={data.projects} />
            </FrameBody>
          </Frame>
        </div>

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
        <ScrollToTop />
      </main>
    </>
  )
}

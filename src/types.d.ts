export interface SocialLink {
	name: string
	url: string
	icon: React.ComponentType<{ className: string }>
}

export interface ContactLink {
	name: string
	url: string
}

export interface ContactEmail {
	name: string
	at: string
}

export interface ContactTel {
	name: string
	phoneNumber: string
}

export interface ContactInfo {
	link: ContactLink
	email: ContactEmail
	tel: ContactTel
	social: SocialLink[]
}

export interface EducationEntry {
	school: string
	degree: string
	start: string
	end: string
	description: string[]
}

export interface JobsEntry {
	title: string
	start: string
	end: string
	description: string[]
}

export interface WorkEntry {
	company: string
	link?: string
	badges: string[]
	jobs: JobsEntry[]
}

export interface ProjectLink {
	label: string
	href: string
}

export interface PersonalWebsiteUrl {
	name: string
	url: string
}

export interface ProjectMetric {
	label: string
	value: string
}

export interface Project {
	title: string
	techStack: string[]
	description: string
	link: ProjectLink
	isNew?: boolean
	category?: string
	architecture?: string
	highlights?: string[]
	metrics?: ProjectMetric[]
}

export interface ResumeData {
	name: string
	initials: string
	role?: string
	location: string
	locationLink: string
	about: string
	summary: string
	avatar: string
	personalWebsiteUrl: PersonalWebsiteUrl
	contact: ContactInfo
	education: EducationEntry[]
	work: WorkEntry[]
	skills: string[]
	projects: Project[]
}

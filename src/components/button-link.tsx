import { MailIcon, PhoneIcon, AppWindowIcon, LinkIcon } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import { Button } from './ui/button'
import { type ResumeData } from '@/types'

export function ButtonLink({ data }: { data: ResumeData }) {
  const linkData = [
    {
      name: data.personalWebsiteUrl.name,
      url: data.personalWebsiteUrl.url,
      icon: AppWindowIcon
    },
    {
      name: data.contact.email.name,
      url: `mailto:${data.contact.email.at}`,
      icon: MailIcon
    },
    {
      name: data.contact.tel.name,
      url: `tel:${data.contact.tel.phoneNumber}`,
      icon: PhoneIcon
    },
    {
      name: data.contact.link.name,
      url: data.contact.link.url,
      icon: LinkIcon
    }
  ]

  return (
    <div className="flex flex-wrap gap-2">
      {linkData.map((link, index) => (
        <Tooltip key={index}>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon" asChild>
              <a
                href={link.url}
                target={link.url.startsWith('http') ? '_blank' : undefined}
                rel={link.url.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={link.name}
              >
                <link.icon className="size-4" />
              </a>
            </Button>
          </TooltipTrigger>
          <TooltipContent>{link.name}</TooltipContent>
        </Tooltip>
      ))}
      {data.contact.social.map((social, index) => (
        <Tooltip key={`social-${index}`}>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon" asChild>
              <a
                href={social.url}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
              >
                <social.icon className="size-4" />
              </a>
            </Button>
          </TooltipTrigger>
          <TooltipContent>{social.name}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  )
}

import { ArrowUpIcon } from 'lucide-react'
import { data } from '@/constants'
import { Corners } from '@/components/frame'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative mt-2 border border-border bg-background/90 print:hidden">
      <Corners />
      <div className="flex flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="space-y-0.5">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-foreground">
            © {year} {data.name}
          </p>
          <p className="font-mono text-[10px] text-muted-foreground">
            Built with Next.js · Tailwind CSS · shadcn/ui
          </p>
        </div>

        <nav aria-label="Footer social links">
          <ul className="flex flex-wrap gap-x-4 gap-y-1.5">
            {[data.personalWebsiteUrl, ...data.contact.social].map((link) => (
              <li key={link.url}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#main-content"
          className="inline-flex shrink-0 items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowUpIcon className="size-3.5" aria-hidden="true" />
          Back to top
        </a>
      </div>
    </footer>
  )
}

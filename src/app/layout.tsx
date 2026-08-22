import React from 'react'
import { type Metadata } from 'next'
import { Instrument_Sans } from 'next/font/google'
import { TooltipProvider } from '@/components/ui/tooltip'
import { RESUME_DATA } from '@/data/resume-data'
import { cn } from '@/lib/utils'
import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans'
})

export const metadata: Metadata = {
  title: `CV | ${RESUME_DATA.name}`,
  description: `${RESUME_DATA.about}`,
  keywords: [
    'Platform Engineer',
    'DevOps',
    'Cloud Engineer',
    'Kubernetes',
    'AI Infrastructure',
    'AWS',
    'Azure'
  ],
  authors: [{ name: RESUME_DATA.name }],
  creator: RESUME_DATA.name,
  openGraph: {
    title: `CV | ${RESUME_DATA.name}`,
    description: RESUME_DATA.about,
    type: 'website',
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: `CV | ${RESUME_DATA.name}`,
    description: RESUME_DATA.about
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        'min-h-screen font-sans antialiased',
        instrumentSans.variable
      )}
    >
      <body className="min-h-screen font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

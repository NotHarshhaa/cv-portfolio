'use client'

import { Button } from '@/components/ui/button'
import { PrinterIcon } from 'lucide-react'

export function DownloadResumeButton() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <Button
      onClick={handlePrint}
      variant="outline"
      className="gap-2"
      aria-label="Print or Save Resume as PDF"
      title="Print or Save Resume as PDF"
    >
      <PrinterIcon className="size-4" />
      <span>Print / Save PDF</span>
    </Button>
  )
}

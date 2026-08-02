'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Frame, FrameBody, FrameHeader } from '@/components/frame'
import { AlertCircleIcon } from 'lucide-react'

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="site-shell flex min-h-screen items-center justify-center py-16">
      <Frame className="w-full max-w-md">
        <FrameHeader label="Error" />
        <FrameBody className="space-y-6 text-center">
          <AlertCircleIcon className="mx-auto size-10 text-destructive" />
          <div className="space-y-2">
            <h1 className="font-heading text-2xl font-semibold tracking-tight">
              Something went wrong
            </h1>
            <p className="text-sm text-muted-foreground">
              An unexpected error occurred. You can try again.
            </p>
          </div>
          <Button onClick={reset} variant="outline">
            Try again
          </Button>
        </FrameBody>
      </Frame>
    </main>
  )
}

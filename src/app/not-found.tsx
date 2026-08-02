import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Frame, FrameBody, FrameHeader } from '@/components/frame'
import { FileQuestionIcon } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="site-shell flex min-h-screen items-center justify-center py-16">
      <Frame className="w-full max-w-md">
        <FrameHeader label="404" />
        <FrameBody className="space-y-6 text-center">
          <FileQuestionIcon className="mx-auto size-10 text-muted-foreground" />
          <div className="space-y-2">
            <h1 className="font-heading text-2xl font-semibold tracking-tight">
              Page not found
            </h1>
            <p className="text-sm text-muted-foreground">
              The page you are looking for does not exist.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/">Back to CV</Link>
          </Button>
        </FrameBody>
      </Frame>
    </main>
  )
}

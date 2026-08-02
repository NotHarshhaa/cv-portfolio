import { Skeleton } from '@/components/ui/skeleton'
import { Frame, FrameBody, FrameHeader } from '@/components/frame'

export default function Loading() {
  return (
    <main className="site-shell relative pt-24 pb-8 sm:pt-28">
      <div className="flex w-full flex-col gap-4">
        <Frame>
          <FrameHeader label="CV / Resume" />
          <FrameBody className="space-y-4 py-8 sm:py-10">
            <Skeleton className="h-10 w-64" />
            <Skeleton className="h-4 w-full max-w-xl" />
            <Skeleton className="h-4 w-40" />
            <div className="flex gap-2 pt-2">
              <Skeleton className="size-10" />
              <Skeleton className="size-10" />
              <Skeleton className="size-10" />
            </div>
          </FrameBody>
        </Frame>
        <Frame>
          <FrameHeader label="About" />
          <FrameBody className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/6" />
          </FrameBody>
        </Frame>
      </div>
    </main>
  )
}

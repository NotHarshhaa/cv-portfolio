import { cn } from '@/lib/utils'
import type { HTMLAttributes, ReactNode } from 'react'

/** Small corner ticks sitting on the outer edges of a bordered element.
 *  Exact copy of the reference portfolio's SectionBorders component. */
export function Corners({ className }: { className?: string }) {
  return (
    <>
      <span
        aria-hidden
        className={cn(
          'pointer-events-none absolute -top-px -left-px z-10 h-2 w-2 border-l border-muted-foreground/50',
          className
        )}
      />
      <span
        aria-hidden
        className={cn(
          'pointer-events-none absolute -top-px -right-px z-10 h-2 w-2 border-r border-muted-foreground/50',
          className
        )}
      />
      <span
        aria-hidden
        className={cn(
          'pointer-events-none absolute -bottom-px -left-px z-10 h-2 w-2 border-b border-l border-muted-foreground/50',
          className
        )}
      />
      <span
        aria-hidden
        className={cn(
          'pointer-events-none absolute -right-px -bottom-px z-10 h-2 w-2 border-r border-b border-muted-foreground/50',
          className
        )}
      />
    </>
  )
}

export function BracketTitle({
  children,
  className
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span className={cn('relative inline-block px-2 py-1', className)}>
      <span
        aria-hidden
        className="pointer-events-none absolute -top-px -left-px size-2 border-t border-l border-muted-foreground/50"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -top-px -right-px size-2 border-t border-r border-muted-foreground/50"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-px -left-px size-2 border-b border-l border-muted-foreground/50"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -right-px -bottom-px size-2 border-b border-r border-muted-foreground/50"
      />
      {children}
    </span>
  )
}

type FrameProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  corners?: boolean
}

export function Frame({
  children,
  className,
  corners = true,
  ...props
}: FrameProps) {
  return (
    <div
      className={cn(
        'relative border border-border bg-background/90',
        className
      )}
      {...props}
    >
      {corners && <Corners />}
      {children}
    </div>
  )
}

type FrameHeaderProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode
  label?: string
}

/** Labeled top bar inside a frame: large reference-style section title
 *  ("About Me." style) framed by thin corner brackets */
export function FrameHeader({
  children,
  label,
  className,
  ...props
}: FrameHeaderProps) {
  return (
    <div
      className={cn(
        'flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-border px-4 py-3 sm:px-6',
        className
      )}
      {...props}
    >
      {label && (
        <BracketTitle className="px-1.5 py-0.5">
          <span className="font-heading text-xl font-medium tracking-tight text-foreground sm:text-2xl md:text-3xl">
            {label.endsWith('.') ? label : `${label}.`}
          </span>
        </BracketTitle>
      )}
      {children}
    </div>
  )
}

export function FrameBody({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('px-4 py-6 sm:px-6 sm:py-8', className)} {...props}>
      {children}
    </div>
  )
}

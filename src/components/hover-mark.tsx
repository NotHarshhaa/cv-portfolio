import { cn } from '@/lib/utils'
import type { HTMLAttributes, ReactNode } from 'react'

type HoverMarkProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode
  /** Monospace action chip shown at bottom-right on hover */
  label?: string
  disabled?: boolean
  as?: 'div' | 'li' | 'article' | 'section'
}

/**
 * Blueprint hover: diagonal hatch fill, L-corner brackets, and a monospace
 * action label — matching the Langfuse-style changelog row interaction.
 */
export function HoverMark({
  children,
  label,
  className,
  disabled = false,
  as: Comp = 'div',
  ...props
}: HoverMarkProps) {
  return (
    <Comp
      className={cn(
        'group/mark relative',
        !disabled && 'cursor-pointer',
        className
      )}
      {...props}
    >
      {!disabled && (
        <>
          <span
            aria-hidden
            className={cn(
              'pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-150',
              'group-hover/mark:opacity-100 group-focus-within/mark:opacity-100'
            )}
            style={{
              backgroundColor:
                'color-mix(in oklch, var(--foreground) 3.5%, transparent)',
              backgroundImage: `repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 2px,
                color-mix(in oklch, var(--foreground) 9%, transparent) 2px,
                color-mix(in oklch, var(--foreground) 9%, transparent) 3px
              )`
            }}
          />

          <span
            aria-hidden
            className="pointer-events-none absolute top-0 left-0 z-20 size-2.5 border-t-2 border-l-2 border-foreground opacity-0 transition-opacity duration-150 group-hover/mark:opacity-100 group-focus-within/mark:opacity-100 sm:size-3"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute top-0 right-0 z-20 size-2.5 border-t-2 border-r-2 border-foreground opacity-0 transition-opacity duration-150 group-hover/mark:opacity-100 group-focus-within/mark:opacity-100 sm:size-3"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute bottom-0 left-0 z-20 size-2.5 border-b-2 border-l-2 border-foreground opacity-0 transition-opacity duration-150 group-hover/mark:opacity-100 group-focus-within/mark:opacity-100 sm:size-3"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute right-0 bottom-0 z-20 size-2.5 border-r-2 border-b-2 border-foreground opacity-0 transition-opacity duration-150 group-hover/mark:opacity-100 group-focus-within/mark:opacity-100 sm:size-3"
          />

          {label && (
            <span
              aria-hidden
              className={cn(
                'pointer-events-none absolute right-0 bottom-0 z-30 translate-y-1/2',
                'bg-foreground px-1.5 py-0.5 font-mono text-[10px] leading-none tracking-wide text-background whitespace-nowrap',
                'opacity-0 transition-opacity duration-150',
                'group-hover/mark:opacity-100 group-focus-within/mark:opacity-100'
              )}
            >
              {label}
            </span>
          )}
        </>
      )}

      <div className="relative z-10">{children}</div>
    </Comp>
  )
}

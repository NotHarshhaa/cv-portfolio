"use client"

import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"

import { cn } from "@/lib/utils"
import { Corners } from "@/components/frame"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

function Command({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive>) {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(
        "flex size-full flex-col overflow-hidden bg-background text-foreground",
        className
      )}
      {...props}
    />
  )
}

function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  className,
  showCloseButton = false,
  ...props
}: React.ComponentProps<typeof Dialog> & {
  title?: string
  description?: string
  className?: string
  showCloseButton?: boolean
}) {
  return (
    <Dialog {...props}>
      <DialogHeader className="sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent
        className={cn(
          "top-[18%] sm:top-[20%] translate-y-0 overflow-visible p-0 border border-border bg-background/95 backdrop-blur-md shadow-2xl rounded-none w-full max-w-[calc(100%-2rem)] sm:max-w-xl md:max-w-2xl ring-0",
          className
        )}
        showCloseButton={showCloseButton}
      >
        <Corners />
        <Command className="flex size-full flex-col overflow-hidden bg-transparent">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

function CommandInput({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div
      data-slot="command-input-wrapper"
      className="flex items-center gap-2.5 border-b border-border bg-muted/20 px-3.5 py-3 sm:px-4"
    >
      <span className="flex size-5 shrink-0 items-center justify-center border border-primary/40 bg-primary/10 text-primary font-mono text-xs font-bold select-none">
        &gt;
      </span>
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn(
          "w-full bg-transparent font-mono text-xs sm:text-sm placeholder:text-muted-foreground/60 text-foreground outline-none",
          className
        )}
        {...props}
      />
      <kbd className="hidden sm:inline-flex items-center gap-1 border border-border bg-background px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground uppercase select-none">
        ESC
      </kbd>
    </div>
  )
}

function CommandList({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.List>) {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn(
        "no-scrollbar max-h-[380px] sm:max-h-[440px] scroll-py-2 overflow-x-hidden overflow-y-auto p-1.5 sm:p-2 outline-none",
        className
      )}
      {...props}
    />
  )
}

function CommandEmpty({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Empty>) {
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className={cn("py-10 text-center font-mono text-xs text-muted-foreground", className)}
      {...props}
    />
  )
}

function CommandGroup({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn(
        "overflow-hidden p-1 text-foreground **:[[cmdk-group-heading]]:px-3 **:[[cmdk-group-heading]]:py-1.5 **:[[cmdk-group-heading]]:font-mono **:[[cmdk-group-heading]]:text-[10px] **:[[cmdk-group-heading]]:font-semibold **:[[cmdk-group-heading]]:tracking-[0.14em] **:[[cmdk-group-heading]]:text-muted-foreground **:[[cmdk-group-heading]]:uppercase **:[[cmdk-group-heading]]:border-b **:[[cmdk-group-heading]]:border-border/30 **:[[cmdk-group-heading]]:bg-muted/15 **:[[cmdk-group-heading]]:mb-1",
        className
      )}
      {...props}
    />
  )
}

function CommandSeparator({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cn("my-2 h-px bg-border/60", className)}
      {...props}
    />
  )
}

function CommandItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(
        "group/command-item relative flex cursor-pointer items-center gap-2.5 rounded-none px-3 py-2 text-xs sm:text-sm outline-none select-none transition-colors border-l-2 border-transparent aria-selected:border-primary aria-selected:bg-muted/60 aria-selected:text-foreground data-[selected=true]:border-primary data-[selected=true]:bg-muted/60 data-[selected=true]:text-foreground data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children}
    </CommandPrimitive.Item>
  )
}

function CommandShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="command-shortcut"
      className={cn(
        "ml-auto border border-border/80 bg-background/80 px-1.5 py-0.5 font-mono text-[10px] tracking-wider text-muted-foreground uppercase group-aria-selected/command-item:border-primary/50 group-aria-selected/command-item:text-primary group-data-[selected=true]/command-item:border-primary/50 group-data-[selected=true]/command-item:text-primary",
        className
      )}
      {...props}
    />
  )
}

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}

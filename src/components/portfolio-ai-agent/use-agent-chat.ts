'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { formatTimestamp, generateAgentResponse } from './agent-engine'
import { PROJECT_COUNT } from './knowledge-base'
import type { ChatPhase, Message } from './types'

const WELCOME_CONTENT = `Hello! I am **Harshhaa's Portfolio Agent**.

I have complete indexation of Harshhaa's **production experience**, **${PROJECT_COUNT} repositories**, **Kubernetes architectures**, **Terraform cloud setups**, and **Agentic AI systems**.

Select a preset inquiry below or type any question to evaluate his qualifications — responses stream in live with an execution reasoning trace.`

const RESET_CONTENT = `Conversation buffer reset. How else can I assist in reviewing Harshhaa's platform engineering and AI background?`

/** How long each thinking-trace step takes to appear. */
const STEP_REVEAL_MS = 420
/** Delay between content stream ticks. */
const STREAM_TICK_MS = 18
/** Words appended per stream tick. */
const STREAM_WORDS_PER_TICK = 4

function createWelcomeMessage(id: string): Message {
  return {
    id,
    role: 'agent',
    content: WELCOME_CONTENT,
    timestamp: formatTimestamp()
  }
}

interface PendingThinking {
  steps: string[]
  visibleSteps: number
}

/**
 * Chat state machine for the portfolio agent: user message → staged
 * thinking trace → token-streamed answer. All timers are tracked and
 * cleared on unmount or reset, and `prefers-reduced-motion` skips the
 * theatrics entirely.
 */
export function useAgentChat() {
  const reduceMotion = useReducedMotion()
  const [messages, setMessages] = useState<Message[]>([
    createWelcomeMessage('welcome')
  ])
  const [phase, setPhase] = useState<ChatPhase>('idle')
  const [pending, setPending] = useState<PendingThinking | null>(null)
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const counterRef = useRef(0)
  const phaseRef = useRef<ChatPhase>('idle')
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([])

  const clearTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout)
    timersRef.current.length = 0
  }, [])

  const schedule = useCallback((fn: () => void, ms: number) => {
    const timer = setTimeout(fn, ms)
    timersRef.current.push(timer)
  }, [])

  useEffect(() => {
    const timers = timersRef.current
    return () => {
      timers.forEach(clearTimeout)
      timers.length = 0
    }
  }, [])

  const setPhaseSafe = useCallback((next: ChatPhase) => {
    phaseRef.current = next
    setPhase(next)
  }, [])

  const finalizeMessage = useCallback(
    (id: string, content: string) => {
      setMessages((prev) =>
        prev.map((m) =>
          m.id === id ? { ...m, content, streaming: false } : m
        )
      )
      setPending(null)
      setPhaseSafe('idle')
    },
    [setPhaseSafe]
  )

  const streamContent = useCallback(
    (id: string, fullContent: string) => {
      if (reduceMotion) {
        finalizeMessage(id, fullContent)
        return
      }

      const tokens = fullContent.split(/(\s+)/).filter(Boolean)
      let index = 0

      const tick = () => {
        index += STREAM_WORDS_PER_TICK
        const partial = tokens.slice(0, index).join('')
        setMessages((prev) =>
          prev.map((m) => (m.id === id ? { ...m, content: partial } : m))
        )
        if (index < tokens.length) {
          schedule(tick, STREAM_TICK_MS)
        } else {
          finalizeMessage(id, fullContent)
        }
      }

      schedule(tick, STREAM_TICK_MS)
    },
    [finalizeMessage, reduceMotion, schedule]
  )

  const send = useCallback(
    (rawText: string) => {
      const query = rawText.trim()
      if (!query || phaseRef.current !== 'idle') return

      clearTimers()
      counterRef.current += 1
      const userId = `user-${counterRef.current}`
      counterRef.current += 1
      const agentId = `agent-${counterRef.current}`

      const response = generateAgentResponse(query)

      setMessages((prev) => [
        ...prev,
        {
          id: userId,
          role: 'user',
          content: query,
          timestamp: formatTimestamp()
        }
      ])

      if (reduceMotion) {
        setMessages((prev) => [
          ...prev,
          {
            id: agentId,
            role: 'agent',
            content: response.content,
            thinkingSteps: response.thinkingSteps,
            citedProjects: response.citedProjects,
            suggestions: response.suggestions,
            timestamp: formatTimestamp()
          }
        ])
        return
      }

      setPhaseSafe('thinking')
      setPending({ steps: response.thinkingSteps, visibleSteps: 0 })

      response.thinkingSteps.forEach((_, stepIndex) => {
        schedule(() => {
          setPending((prev) =>
            prev ? { ...prev, visibleSteps: stepIndex + 1 } : prev
          )
        }, STEP_REVEAL_MS * (stepIndex + 1))
      })

      schedule(
        () => {
          setMessages((prev) => [
            ...prev,
            {
              id: agentId,
              role: 'agent',
              content: '',
              thinkingSteps: response.thinkingSteps,
              citedProjects: response.citedProjects,
              suggestions: response.suggestions,
              timestamp: formatTimestamp(),
              streaming: true
            }
          ])
          setPending(null)
          setPhaseSafe('streaming')
          streamContent(agentId, response.content)
        },
        STEP_REVEAL_MS * response.thinkingSteps.length + 200
      )
    },
    [
      clearTimers,
      reduceMotion,
      schedule,
      setPhaseSafe,
      streamContent
    ]
  )

  const reset = useCallback(() => {
    clearTimers()
    counterRef.current = 0
    setPending(null)
    setPhaseSafe('idle')
    setMessages([createWelcomeMessage('welcome-reset')])
  }, [clearTimers, setPhaseSafe])

  const copyMessage = useCallback((id: string, text: string) => {
    void navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId((current) => (current === id ? null : current)), 2000)
  }, [])

  /** Downloads the whole conversation as a Markdown file. */
  const exportTranscript = useCallback(() => {
    const lines = [
      `# Portfolio Agent Transcript`,
      `_Exported ${new Date().toLocaleString()}_`,
      '',
      ...messages.map((m) => {
        const header = m.role === 'user' ? '## 🧑 You' : '## 🤖 Harshhaa Agent'
        return `${header}\n\n${m.content}\n`
      })
    ]
    const blob = new Blob([lines.join('\n')], {
      type: 'text/markdown;charset=utf-8'
    })
    const url = URL.createObjectURL(blob)
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = 'portfolio-agent-transcript.md'
    anchor.click()
    URL.revokeObjectURL(url)
  }, [messages])

  return {
    messages,
    phase,
    pending,
    copiedId,
    isBusy: phase !== 'idle',
    send,
    reset,
    copyMessage,
    exportTranscript
  }
}

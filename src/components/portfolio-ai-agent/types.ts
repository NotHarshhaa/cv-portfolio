export interface CitedProject {
  title: string
  link: string
  category?: string
}

export interface Message {
  id: string
  role: 'user' | 'agent'
  content: string
  thinkingSteps?: string[]
  citedProjects?: CitedProject[]
  suggestions?: string[]
  timestamp: string
  /** True while the response is still streaming in. */
  streaming?: boolean
}

export interface KnowledgeTopic {
  id: string
  keywords: string[]
  thinkingSteps: string[]
  content: string
  citedProjects: CitedProject[]
  /** Follow-up prompts offered under the answer. */
  suggestions: string[]
}

export interface AgentResponse {
  topicId: string
  thinkingSteps: string[]
  content: string
  citedProjects: CitedProject[]
  suggestions: string[]
}

export type ChatPhase = 'idle' | 'thinking' | 'streaming'

export interface PendingThinking {
  phase: Extract<ChatPhase, 'thinking'>
  steps: string[]
  visibleSteps: number
}

export interface PresetQuestion {
  label: string
  prompt: string
}

import {
  DEFAULT_TOPIC,
  KNOWLEDGE_TOPICS
} from './knowledge-base'
import type { AgentResponse, KnowledgeTopic } from './types'

/**
 * Score-based topic retrieval: counts weighted keyword hits per topic and
 * returns the best match. Longer keyword phrases score higher so that
 * "model context protocol" outranks a bare "mcp" substring.
 */
export function retrieveTopic(query: string): KnowledgeTopic {
  const q = query.toLowerCase()

  let bestTopic: KnowledgeTopic | null = null
  let bestScore = 0

  for (const topic of KNOWLEDGE_TOPICS) {
    let score = 0
    for (const keyword of topic.keywords) {
      if (q.includes(keyword)) {
        score += 1 + keyword.length / 40
      }
    }
    if (score > bestScore) {
      bestScore = score
      bestTopic = topic
    }
  }

  return bestTopic ?? DEFAULT_TOPIC
}

export function generateAgentResponse(query: string): AgentResponse {
  const topic = retrieveTopic(query)

  return {
    topicId: topic.id,
    thinkingSteps: topic.thinkingSteps,
    content: topic.content,
    citedProjects: topic.citedProjects,
    suggestions: topic.suggestions
  }
}

/** Current wall-clock time, formatted for message meta rows. */
export function formatTimestamp(date = new Date()): string {
  return date
    .toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    .toLowerCase()
}

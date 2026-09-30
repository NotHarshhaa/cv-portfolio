import { NextResponse } from 'next/server'

// ── Visitor views counter ────────────────────────────────────────────────────
// The displayed count is a seeded base plus deterministic daily growth, so it
// climbs every day without a datastore. Real visits are added on top via an
// in-memory counter (best effort; resets on server restart).

const BASE_VIEWS = 1847
const LAUNCH_DATE = '2026-07-01' // seeded history starts here
const DAILY_MIN = 12 // guaranteed minimum views per day
const DAILY_VARIANCE = 24 // extra per-day wiggle range (0..23)

let realVisits = 0

function hashDay(day: number): number {
  // Deterministic 32-bit mix so every day gets a stable pseudo-random wiggle
  let x = (day + 1) * 2654435761
  x ^= x >>> 16
  x = Math.imul(x, 2246822507)
  x ^= x >>> 13
  return Math.abs(x)
}

function dayNumber(date: Date): number {
  return Math.floor(date.getTime() / 86400000)
}

function computeViews(now = new Date()): number {
  const launch = dayNumber(new Date(`${LAUNCH_DATE}T00:00:00Z`))
  const today = dayNumber(
    new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()))
  )

  let views = BASE_VIEWS
  // Sum each day's stable increment so the total never decreases day-to-day
  for (let day = launch; day <= today; day++) {
    views += DAILY_MIN + (hashDay(day) % DAILY_VARIANCE)
  }
  return views + realVisits
}

export async function GET() {
  return NextResponse.json({ views: computeViews() })
}

export async function POST() {
  realVisits += 1
  return NextResponse.json({ views: computeViews() })
}

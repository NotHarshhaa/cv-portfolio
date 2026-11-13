import { NextResponse } from 'next/server'

const GITHUB_USERNAME = 'NotHarshhaa'
const FALLBACK_FOLLOWERS = 3581

export async function GET() {
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
      headers: {
        'User-Agent': 'NotHarshhaa-CV-Portfolio',
        Accept: 'application/vnd.github.v3+json'
      },
      next: { revalidate: 3600 } // Cache for 1 hour to respect GitHub rate limits
    })

    if (!res.ok) {
      return NextResponse.json({ followers: FALLBACK_FOLLOWERS, username: GITHUB_USERNAME })
    }

    const data = await res.json()
    const followers =
      typeof data.followers === 'number' ? data.followers : FALLBACK_FOLLOWERS

    return NextResponse.json({ followers, username: GITHUB_USERNAME })
  } catch {
    return NextResponse.json({ followers: FALLBACK_FOLLOWERS, username: GITHUB_USERNAME })
  }
}

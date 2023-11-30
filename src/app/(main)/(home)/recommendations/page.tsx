import React from 'react'

import EventBanner from '@/components/feature/recommendations/eventBanner'

export default function RecommendationsPage() {
  return (
    <div className="min-h-scree flex flex-col pt-24">
      <EventBanner />
      <div className="border-2">home🏠</div>
    </div>
  )
}

import React from 'react'

import EventBanner from '@/components/feature/recommendations/eventBanner'
import LastSale from '@/components/feature/recommendations/lastSale'

export default function RecommendationsPage() {
  return (
    <div className="min-h-scree flex flex-col pt-24">
      <EventBanner></EventBanner>
      <div className="px-5 py-7 gap-14 flex flex-col">
        <LastSale></LastSale>
        <div className="border-2">home🏠</div>
      </div>
    </div>
  )
}

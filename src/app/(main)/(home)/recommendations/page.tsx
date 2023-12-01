import React from 'react'

import EventBanner from '@/components/feature/recommendations/eventBanner'
import LastSale from '@/components/feature/recommendations/lastSale'
import WeekendSale from '@/components/feature/recommendations/weekendSale'

export default function RecommendationsPage() {
  return (
    <div className="min-h-scree flex flex-col pt-24">
      <EventBanner />
      <div className="px-5 py-7 gap-14 flex flex-col">
        <LastSale />
        <WeekendSale />
        <div className="border-2">home🏠</div>
      </div>
    </div>
  )
}

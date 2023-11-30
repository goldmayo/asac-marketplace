import React from 'react'

import EventBanner from '@/components/feature/recommendations/eventBanner'
import LastSale from '@/components/feature/recommendations/lastSale'

export default function RecommendationsPage() {
  return (
    <div className="min-h-scree flex flex-col pt-24">
      <EventBanner />
      <div className="flex flex-col py-7 px-5 border-2 gap-7 border-brand-primary-500">
        <LastSale />
      </div>
    </div>
  )
}

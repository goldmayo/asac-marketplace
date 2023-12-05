import React from 'react'

import CommonProductList from '@/components/common/product/CommonProductList'
import EventBanner from '@/components/feature/newArrivals/EventBanner'
import NewArrivalButton from '@/components/feature/newArrivals/NewArrivalButton'

export default function NewArrivalsPage() {
  return (
    <div className="flex flex-col relative">
      <EventBanner />
      <NewArrivalButton />
      <div className="sticky top-24 h-14 bg-grayscale-200 z-10">카테고리 구현 예정</div>
      <CommonProductList></CommonProductList>
    </div>
  )
}

import React from 'react'

import PhotoReviews from '@/components/feature/item/review/PhotoReviews'
import ReviewList from '@/components/feature/item/review/ReviewList'
import ReviewNotice from '@/components/feature/item/review/ReviewNotice'

export default function page() {
  return (
    <div className="flex flex-col gap-3 p-4 border-2">
      <ReviewNotice />
      <PhotoReviews />
      <ReviewList />
      <div className="border">하이하ㅣ이</div>
    </div>
  )
}

'use client'
import Image from 'next/image'
import React, { useState } from 'react'

import { fetchHelpfulCount, fetchLessHelpCount } from '@/api/resource/items'
import SvgThumbsUp from '@/components/icons/thumbs-up'
import { reviewsType } from '@/types/review'

export default function Review({ review, itemId }: { review: reviewsType; itemId: number }) {
  const [helpfulCount, setHelpfulCount] = useState(review.helpful)
  const [isHelpful, setIsHelpful] = useState(false)

  const increaseHelpfulCount = async (reviewId: number) => {
    try {
      if (!isHelpful) {
        const a = await fetchHelpfulCount(itemId, reviewId)
        // 응답으로 늘어난 숫자 ㄱ
        console.log(await a.text())
        setHelpfulCount(helpfulCount + 1)
      } else {
        await fetchLessHelpCount(itemId, reviewId)
        setHelpfulCount(helpfulCount + -1)
      }
      setIsHelpful((prevIsHelpful) => !prevIsHelpful)
    } catch (error) {
      console.error('도움돼요 실패', error)
    }
  }
  return (
    <div className="flex flex-col gap-3 w-full h-full">
      <div className="flex gap-2 items-center">
        <span className="border px-1 text-body-sm font-normal text-brand-primary-500 border-brand-primary-500 rounded-lg">
          멤버
        </span>
        <span className="text-body-sm font-normal">{review.memberName}</span>
      </div>
      {/* <span className=" text-body-xs font-normal text-grayscale-300">{review.itemName}</span> */}
      <span className="text-body-xs font-normal text-grayscale-300">
        [하기스] 2023 네이처썸머 팬티형 기저귀 6단계 공용
      </span>
      <div className="h-[86px] w-[86px] rounded-lg overflow-hidden relative">
        <Image
          alt="review image"
          // src={image}
          src={'/images/ricedog.svg'}
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <div className=" text-body-base font-normal">{review.comment}</div>
      <div className="flex items-end justify-between">
        <span className="text-body-xs font-normal text-grayscale-300">{review.reviewWriteDate}</span>

        <button
          onClick={async () => {
            increaseHelpfulCount(review.reviewId)
          }}
          className={`${
            isHelpful ? 'text-green-400' : 'text-grayscale-400'
          } flex items-center gap-2 text-sm font-light text-grayscale-400 border rounded-full px-2 py-1`}
        >
          <SvgThumbsUp width={'1.3rem'} height={'1.3rem'} fill="currentColor" />
          <span className="">도움돼요</span>
          {/* <span>{review.helpful}</span> */}
          <span>{helpfulCount}</span>
        </button>
      </div>
      <div className="pt-3 border-b border-b-grayscale-100"></div>
    </div>
  )
}

'use client'
import { useRouter } from 'next//navigation'
import Image from 'next/image'
import React from 'react'
import { BiMessageRoundedDots } from 'react-icons/bi'
import { PiHandbagSimple } from 'react-icons/pi'

import { Product } from '@/components/common/product/commonProductList'

interface SmallCardProps {
  product: Product
}

export default function SmallCard({ product }: SmallCardProps) {
  const router = useRouter()
  const itemId = product.id
  return (
    <button
      onClick={() => router.replace(`/item-detail/${product.id}`)}
      className="h-full w-full justify-start items-start gap-1 flex flex-col"
    >
      <div className="relative w-full h-4/6">
        <Image
          // src={product.promotionUrl}
          src={'/images/hotdog.svg'}
          alt={product.name}
          width={300}
          height={300}
          className="w-full h-full object-cover"
        ></Image>
        <div className="w-8 h-8 right-[6%] bottom-[6%] absolute bg-gray-700 bg-opacity-50 text-white rounded-[70px] justify-center items-center flex">
          <PiHandbagSimple />
        </div>
      </div>
      <div className="flex-col items-start flex">
        <div className="w-full text-neutral-600 text-body-xs font-medium ">
          {product.id}
          {product.name}
        </div>

        <div className="gap-1 inline-flex">
          <div className="text-red-500 text-body-sm">{product.discountRate}%</div>
          <div className="text-zinc-800 text-[13px] font-bold">
            {(product.itemPrice * (100 - product.discountRate)) / 100}원
          </div>
        </div>
        <div className="relative text-grayscale-200 text-xs font-medium">
          {product.itemPrice}원
          <div className="w-full h-px left-0 top-2 absolute bg-grayscale-200" />
        </div>
      </div>
      <div className="items-center gap-1 flex text-gray-400 text-body-mini font-medium">
        <BiMessageRoundedDots />
        <div>후기 {product.reviewCount}개</div>
      </div>
    </button>
  )
}

import React from 'react'

import SmallCard from '@/components/common/product/smallCard'

const productData = [
  {
    productId: 1,
    productName: '[누터스가든] CAT 누터스픽 짜먹는 간식 2종',
    image: '/images/hotdog.svg',
    discountRate: 35,
    price: 6900,
    reviewCount: 80,
  },
  {
    productId: 2,
    productName: '[누터스가든] CAT 누터스픽 짜먹는 간식 2종',
    image: '/images/ricedog.svg',
    discountRate: 40,
    price: 6900,
    reviewCount: 80,
  },
  {
    productId: 3,
    productName: '[누터스가든] CAT 누터스픽 짜먹는 간식 2종',
    image: '/images/hotdog.svg',
    discountRate: 35,
    price: 6900,
    reviewCount: 80,
  },
]
export default function LastSale() {
  return (
    <div className="flex flex-col h-80 gap-4">
      <p className="text-headline3 ">마감세일</p>
      <div className="flex items-center overflow-x-scroll overflow-y-hidden h-full gap-4">
        {productData.map((product) => (
          <div key={product.productId} className="flex-none w-32">
            <SmallCard product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}

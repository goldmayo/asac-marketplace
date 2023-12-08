import React from 'react'

import productData from '@/../public/dummyData/productData.json'
import SmallCard from '@/components/common/product/SmallCard'

export default function LastSale() {
  return (
    <div className="flex flex-col h-80 gap-4">
      <p className="text-headline3 ">마감세일</p>
      <div className="flex items-center overflow-x-scroll overflow-y-hidden h-[271px] gap-4">
        {productData.map((product) => (
          <div key={product.productId} className="flex-none w-32 h-full">
            <SmallCard product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}

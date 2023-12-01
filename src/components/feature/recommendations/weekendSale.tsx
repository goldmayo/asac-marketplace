import React from 'react'

import productData from '@/../public/dummyData/productData.json'
import BigCard from '@/components/common/product/bigCard'

export default function WeekendSale() {
  return (
    <div className="flex flex-col w-full gap-4">
      <p className="text-headline3 ">주말특가</p>
      <div className="flex flex-col h-full items-center gap-4">
        {productData.map((product) => (
          <div key={product.productId} className="h-[269px] w-full flex flex-col items-center">
            <BigCard product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}

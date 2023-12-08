import React from 'react'

import productData from '@/../public/dummyData/productData.json'

import SmallCard from './SmallCard'

export default function CommonProductList() {
  return (
    // 사이즈
    <div className="grid grid-cols-2 justify-items-center gap-2 px-5 pt-4">
      {productData.map((product) => (
        <div key={product.productId} className="">
          <SmallCard product={product} />
        </div>
      ))}
    </div>
  )
}

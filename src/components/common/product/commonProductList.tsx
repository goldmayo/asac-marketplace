import React from 'react'

import SmallCard from './SmallCard'

export interface Product {
  itemId: number
  name: string
  image: string
  discountRate: number
  itemPrice: number
  reviewCount: number
}

interface CommonProductListProps {
  productList: Product[]
}

export default function CommonProductList({ productList }: CommonProductListProps) {
  return (
    // 사이즈
    <div className="grid grid-cols-2 justify-items-center gap-3 px-5 pt-4">
      {productList.map((product: Product) => (
        <div key={product.itemId} className="w-full px-1">
          <SmallCard product={product} />
        </div>
      ))}
    </div>
  )
}

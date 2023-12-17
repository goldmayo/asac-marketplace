import React from 'react'

import SmallCard from '@/components/common/product/smallCard'

export interface Product {
  id: number
  name: string
  promotionUrl: string
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
        <button key={product.id} className="w-full px-1">
          <SmallCard product={product} />
        </button>
      ))}
    </div>
  )
}

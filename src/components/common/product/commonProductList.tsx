import React from 'react'

import SmallCard from '@/components/common/product/smallCard'
import { ProductType } from '@/types/product'

interface CommonProductListProps {
  productList: ProductType[]
}

export default function CommonProductList({ productList }: CommonProductListProps) {
  return (
    // 사이즈
    <div className="grid grid-cols-2 justify-items-center gap-3 px-5 pt-4">
      {productList.map((product: ProductType) => (
        <div key={product.id} className="w-full px-1">
          <SmallCard product={product} />
        </div>
      ))}
    </div>
  )
}

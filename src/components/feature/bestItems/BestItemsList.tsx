'use client'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import { fetchBestItemsData } from '@/app/(main)/(home)/best-items/fetchBestItems'
import CommonProductList from '@/components/common/product/commonProductList'

export default function BestItemsList() {
  const [productList, setProductList] = useState([])
  const filterParam = useSearchParams().get('filter')

  useEffect(() => {
    fetchBestItemsData(filterParam)
      .then((data) => {
        setProductList(data.items.content)
      })
      .catch((error) => {
        console.error('data fetch 실패', error)
      })
  }, [filterParam])
  return <CommonProductList productList={productList} />
}

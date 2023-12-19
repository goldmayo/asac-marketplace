'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import { fetchSearchItemsData } from '@/api/resource/search'
import CommonProductList from '@/components/common/product/commonProductList'

export default function SearchedItemList() {
  const searchParams = useSearchParams()
  const [productList, setProductList] = useState([])
  const categoryParams = searchParams.get('카테고리')
  const brandParams = searchParams.get('브랜드')
  const priceParams = searchParams.get('가격')
  const searchword = decodeURIComponent(usePathname().split('/')[2])
  console.log(searchword)

  useEffect(() => {
    fetchSearchItemsData(searchword, categoryParams, brandParams, priceParams)
      .then((data) => {
        setProductList(data.items.content)
      })
      .catch((error) => {
        console.error('data fetch 실패', error)
      })
  }, [categoryParams, brandParams, priceParams, searchword])

  return <CommonProductList productList={productList} />
}

'use client'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import CommonProductList from '@/components/common/product/commonProductList'
import { fetchSearchItemsData } from '@/app/(main)/(search)/search/[item]/fetchSearchItems'

export default function SearchedItemList() {
  const [productList, setProductList] = useState([])
  const filterParam = useSearchParams().get('filter')

  useEffect(() => {
    fetchSearchItemsData(filterParam)
      .then((data) => {
        setProductList(data.items.content)
      })
      .catch((error) => {
        console.error('data fetch 실패', error)
      })
  }, [filterParam])
  return <CommonProductList productList={productList} />
}

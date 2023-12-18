'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import CommonProductList from '@/components/common/product/commonProductList'

export async function fetchSearchItemsData(searchWord: string, filterParam: any) {
  const res = await fetch(`http://3.36.91.126:8080/api/search/complexitem?name=${searchWord}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const searchItems = await res.json()
  return searchItems
}

export default function SearchedItemList() {
  const [productList, setProductList] = useState([])
  const filterParam = useSearchParams().get('filter')
  const searchword = decodeURIComponent(usePathname().split('/')[2])
  console.log(searchword)

  useEffect(() => {
    fetchSearchItemsData(searchword, filterParam)
      .then((data) => {
        setProductList(data.items.content)
      })
      .catch((error) => {
        console.error('data fetch 실패', error)
      })
  }, [filterParam, searchword])

  return <CommonProductList productList={productList} />
}

// http://3.36.91.126:8080/api/search/complexitem?name=스&sort=itemPrice,desc

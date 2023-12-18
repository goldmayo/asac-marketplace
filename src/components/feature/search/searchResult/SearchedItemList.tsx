'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import CommonProductList from '@/components/common/product/commonProductList'
export async function fetchSearchItemsData(
  searchWord: string,
  categoryParams: string | null,
  brandParams: string | null,
  priceParams: string | null,
) {
  // console.log(
  //   `http://3.36.91.126:8080/api/search/complexitem?name=${searchWord}${
  //     categoryParams ? `&categoryName=${categoryParams}` : ''
  //   }${brandParams ? `&brand=${brandParams}` : ''}${priceParams ? `&price=${priceParams}` : ''}`,
  // )
  const res = await fetch(
    `http://3.36.91.126:8080/api/search/complexitem?name=${searchWord}${
      categoryParams ? `&categoryName=${categoryParams}` : ''
    }${brandParams ? `&brand=${brandParams}` : ''}${priceParams ? `&price=${priceParams}` : ''}`,
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return await res.json()
}

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

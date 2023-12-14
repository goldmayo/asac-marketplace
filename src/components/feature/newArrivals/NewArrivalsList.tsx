'use client'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import { fetchNewArrivalsData } from '@/app/(main)/(home)/new-arrivals/fetchNewArrivals'
import CommonProductList from '@/components/common/product/commonProductList'

export default function NewArrivalsList() {
  const [productList, setProductList] = useState([])
  const filterParam = useSearchParams().get('filter')

  useEffect(() => {
    fetchNewArrivalsData(filterParam)
      .then((data) => {
        setProductList(data.items.content)
      })
      .catch((error) => {
        console.error('data fetch 실패', error)
      })
  }, [filterParam])
  return <CommonProductList productList={productList} />
}

import React from 'react'
import Filters from '@/components/common/filters/Filters'
import SearchResultHeader from '@/components/feature/search/searchResult/SearchResultHeader'
import { fetchFilterData } from '@/components/common/filters/fetchFilterData'

export default async function SearchResultLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { item: string }
}) {
  const decodedItem = decodeURIComponent(params.item)
  const filterData = await fetchFilterData(decodedItem)
  const categoryCounts = filterData.categoryCounts
  const brandCounts = filterData.brandCounts
  const priceRange = filterData.priceRange

  return (
    <>
      <SearchResultHeader searchedWord={decodedItem} />
      <div className=" border-red-400 flex flex-col relative">
        <Filters
          totalEliments={0}
          categoryCounts={categoryCounts}
          brandCounts={brandCounts}
          priceRange={priceRange}
          stickyLocation={'top-16'}
        />

        {children}
      </div>
    </>
  )
}

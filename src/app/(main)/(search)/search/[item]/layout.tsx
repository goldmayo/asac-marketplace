import React from 'react'

import { fetchFilterData, fetchIsEmpty } from '@/api/resource/search'
import Filters from '@/components/common/filters/Filters'
import EmptySearchResult from '@/components/feature/search/searchResult/EmptySearchResult'
import SearchResultHeader from '@/components/feature/search/searchResult/SearchResultHeader'

export default async function SearchResultLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { item: string }
}) {
  const decodedItem = decodeURIComponent(params.item)
  const isSearchResultEmpty = await fetchIsEmpty(decodedItem)
  let filterData = null

  if (!isSearchResultEmpty) {
    filterData = await fetchFilterData(decodedItem)
  }

  const categoryCounts = filterData?.categoryCounts || {}
  const brandCounts = filterData?.brandCounts || {}
  const priceRange = filterData?.priceRange || {}

  return (
    <>
      <SearchResultHeader searchedWord={decodedItem} />
      {!isSearchResultEmpty && (
        <>
          {filterData && (
            <Filters
              totalEliments={0}
              categoryCounts={categoryCounts}
              brandCounts={brandCounts}
              priceRange={priceRange}
              stickyLocation={'top-16'}
            />
          )}

          {children}
        </>
      )}
      {isSearchResultEmpty && <EmptySearchResult />}
    </>
  )
}

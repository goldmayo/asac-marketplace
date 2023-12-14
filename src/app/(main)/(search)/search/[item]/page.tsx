import AppliedFilter from '@/components/common/filters/AppliedFilter'
import { fetchFilterData } from '@/components/common/filters/fetchFilterData'
import BestItemsList from '@/components/feature/bestItems/BestItemsList'
import Filters from '@/components/common/filters/Filters'
import React from 'react'
import SearchResultHeader from '@/components/feature/search/searchResult/SearchResultHeader'
import SearchedItemList from '@/components/feature/search/searchResult/SearchedItemList'

export default async function SearchResultPage() {
  return (
    <>
      <AppliedFilter />
      <SearchedItemList />
    </>
  )
}

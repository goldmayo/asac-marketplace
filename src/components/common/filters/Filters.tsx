'use client'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

import FilterButtons from '@/components/common/filters/FilterButtons'

import FilterBottomSheet from './FilterBottomSheet'
import FilterButton from './FilterButton'
import SortButton from './SortButton'

export interface FilterType {
  카테고리: object
  브랜드: object
  가격: object
}

export default function Filter({
  totalEliments,
  categoryCounts,
  brandCounts,
  priceRange,
  stickyLocation,
}: {
  totalEliments: number
  categoryCounts: object
  brandCounts: object
  priceRange: object
  stickyLocation: string
}) {
  const filters: FilterType = {
    카테고리: categoryCounts,
    브랜드: brandCounts,
    가격: priceRange,
  }
  const searchParams = useSearchParams()
  const filterParam = searchParams.get('filter')
  const appliedCategories = filterParam ? filterParam.split(',') : []

  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false)
  const [clickedFilter, setClickedFilter] = useState<keyof FilterType>('카테고리')

  const openFilterBottomSheet = (clickedFilter: keyof FilterType) => {
    setClickedFilter(clickedFilter)
    setIsBottomSheetOpen(true)
  }

  const closeFilterBottomSheet = () => {
    setIsBottomSheetOpen(false)
  }

  return (
    <>
      <div
        className={`bg-white sticky top-${stickyLocation} py-2 px-4 flex justify-between z-10 text-body-xs text-gray-600`}
      >
        <div>총 {totalEliments}개</div>
        <div className="flex gap-3">
          <SortButton />
          <FilterButton openFilterBottomSheet={openFilterBottomSheet} />
        </div>
      </div>

      {isBottomSheetOpen && (
        <>
          <div className="fixed inset-0 bg-black opacity-40 z-30" onClick={closeFilterBottomSheet}></div>
          <FilterBottomSheet
            filters={filters}
            appliedCategories={appliedCategories}
            clickedFilter={clickedFilter}
            setIsBottomSheetOpen={setIsBottomSheetOpen}
          />
        </>
      )}

      <FilterButtons filters={filters} openFilterBottomSheet={openFilterBottomSheet} />
    </>
  )
}

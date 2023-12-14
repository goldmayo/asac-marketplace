import { usePathname, useRouter } from 'next/navigation'
import React, { useState } from 'react'

import { Button } from '@/components/ui/button'

import FilterBottomSheetHeader from './FilterBottomSheetHeader'
import FilterBottomSheetOptions from './FilterBottomSheetOptions'
import { FilterType } from './Filters'

interface FilterBottomSheetProps {
  filters: FilterType
  appliedCategories: string[]
  clickedFilter: keyof FilterType
  setIsBottomSheetOpen: (value: React.SetStateAction<boolean>) => void
}

export default function FilterBottomSheet({
  filters,
  appliedCategories,
  clickedFilter,
  setIsBottomSheetOpen,
}: FilterBottomSheetProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [selectedFilter, setSelectedFilter] = useState<keyof FilterType>(clickedFilter)
  const [selectedCategories, setSelectedCategories] = useState<string[]>(appliedCategories)
  console.log(appliedCategories)

  const handleFilterChange = (filterKey: keyof FilterType) => {
    setSelectedFilter(filterKey)
  }

  const handleCheckboxChange = (option: string) => {
    console.log(`${option} checked!`)
    const updatedCategories = getUpdatedArray(selectedCategories, option)
    setSelectedCategories(updatedCategories)
  }

  const getUpdatedArray = (selectedFilters: string[], option: string): string[] => {
    const current = selectedFilters?.find((selectedCategory) => selectedCategory === option)
    const updated = current
      ? selectedFilters.filter((selectedCategory) => selectedCategory !== option)
      : [...selectedFilters, option]
    return updated
  }

  const handleApplyFilter = () => {
    if (!selectedCategories.length) {
      router.replace(`${pathname}`)
      return
    }
    setIsBottomSheetOpen(false)
    router.push(`${pathname}?filter=${selectedCategories}`)
  }

  return (
    <div>
      <div className="fixed w-96 h-96 bottom-0 z-40 rounded-t-lg overflow-scroll bg-white pb-4">
        <div className="relative">
          <FilterBottomSheetHeader
            filters={filters}
            selectedFilter={selectedFilter}
            handleFilterChange={handleFilterChange}
          />
          <FilterBottomSheetOptions
            selectedFilter={filters[selectedFilter]}
            selectedCategories={selectedCategories}
            handleCheckboxChange={handleCheckboxChange}
          />

          <div className="fixed bottom-0 w-96 bg-white p-4 flex justify-center gap-8">
            <button onClick={() => handleApplyFilter()} className="h-12 text-sm font-medium">
              초기화
            </button>
            <Button onClick={() => handleApplyFilter()} variant={'primary'} className="h-12 w-3/4">
              적용하기
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

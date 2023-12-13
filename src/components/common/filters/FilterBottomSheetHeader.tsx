import React from 'react'

import { FilterType } from './Filters'

export default function FilterBottomSheetHeader({
  filters,
  selectedFilter,
  handleFilterChange,
}: {
  filters: FilterType
  selectedFilter: keyof FilterType
  handleFilterChange: (filterKey: keyof FilterType) => void
}) {
  return (
    <div className="px-6 sticky top-0 bg-white">
      <div className="pt-5 text-headline3">필터</div>
      <div className="pt-3 bg-white flex my-3 gap-5 text-sm font-semibold border-b border-gray-200">
        {Object.keys(filters).map((key) => (
          <button
            className={`pb-2 ${
              key === selectedFilter
                ? 'text-brand-primary-500 border-b-2 border-brand-primary-500'
                : 'text-grayscale-400'
            } `}
            key={key}
            onClick={() => handleFilterChange(key as keyof FilterType)}
          >
            {key}
          </button>
        ))}
      </div>
    </div>
  )
}

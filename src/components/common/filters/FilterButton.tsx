import React from 'react'

import { OptionsIcon } from '@/lib/icons'

import { FilterType } from './Filters'

export default function FilterButton({
  openFilterBottomSheet,
}: {
  openFilterBottomSheet: (clickedFilter: keyof FilterType) => void
}) {
  return (
    <button className="flex items-center gap-1" onClick={() => openFilterBottomSheet('카테고리')}>
      필터
      <OptionsIcon />
    </button>
  )
}

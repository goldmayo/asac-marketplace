'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

export default function AppliedFilter() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const filterParam = searchParams.get('filter')
  const appliedFilters = filterParam ? filterParam.split(',') : []

  const removeFilter = (filter: string) => {
    const updatedFilters = appliedFilters.filter((appliedCategory) => appliedCategory !== filter)
    router.push(`${pathname}?filter=${updatedFilters.join(',')}`)
  }

  return (
    <div className="flex gap-3 px-4 py-1 text-body-sm overflow-x-scroll whitespace-nowrap">
      {appliedFilters.map((appliedFilter) => (
        <button key={appliedFilter} onClick={() => removeFilter(appliedFilter)}>
          <span className="text-brand-primary-500">{appliedFilter}</span> <span className="text-grayscale-300">x</span>
        </button>
      ))}
    </div>
  )
}

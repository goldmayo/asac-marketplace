import AppliedFilter from '@/components/common/filters/AppliedFilter'
import { fetchFilterData } from '@/components/common/filters/fetchFilterData'
import Filters from '@/components/common/filters/Filters'

export default async function BestItemsLayout({ children }: { children: React.ReactNode }) {
  const filterData = await fetchFilterData('bestItem')
  const categoryCounts = filterData.categoryCounts
  const brandCounts = filterData.brandCounts
  const priceRange = filterData.priceRange
  return (
    <div className="relative flex flex-col">
      {/* // filter안에서 total갯수 계산 */}
      <Filters
        totalEliments={0}
        categoryCounts={categoryCounts}
        brandCounts={brandCounts}
        priceRange={priceRange}
        stickyLocation={'top-24'}
      />
      <AppliedFilter />
      {children}
    </div>
  )
}

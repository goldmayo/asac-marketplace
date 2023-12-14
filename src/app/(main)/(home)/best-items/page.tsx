import AppliedFilter from '@/components/common/filters/AppliedFilter'
import { fetchFilterData } from '@/components/common/filters/fetchFilterData'
import Filters from '@/components/common/filters/Filters'
import BestItemsList from '@/components/feature/bestItems/BestItemsList'
export default async function BestItemsPage() {
  const filterData = await fetchFilterData('bestItem')
  const categoryCounts = filterData.categoryCounts
  const brandCounts = filterData.brandCounts
  const priceRange = filterData.priceRange
  return (
    // filter안에서 total갯수 계산
    <div className="relative flex flex-col">
      <Filters
        totalEliments={0}
        categoryCounts={categoryCounts}
        brandCounts={brandCounts}
        priceRange={priceRange}
        stickyLocation={'24'}
      />
      <AppliedFilter />
      <BestItemsList />
    </div>
  )
}

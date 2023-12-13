import EventBanner from '@/components/feature/newArrivals/EventBanner'
import NewArrivalButton from '@/components/feature/newArrivals/NewArrivalButton'
import NewArrivalsList from '@/components/feature/newArrivals/NewArrivalsList'

export default async function NewArrivalsPage() {
  // const categoryCounts = filterData.categoryCounts
  // const brandCounts = filterData.brandCounts
  // const priceRange = filterData.priceRange

  return (
    <div className="flex flex-col relative">
      <EventBanner />
      <NewArrivalButton />
      <div className="sticky top-24 bg-white z-10">필터</div>
      <NewArrivalsList />
    </div>
  )
}

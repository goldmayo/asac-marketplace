import React from 'react'

import BottomTab from '@/components/feature/item/BottomTab'
import ItemHeader from '@/components/feature/item/ItemHeader'
import ItemTabs from '@/components/feature/item/ItemTabs'

export async function fetchItemDetails(itemId: number) {
  const res = await fetch(`http://3.36.91.126:8080/api/items?itemId=${itemId}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return await res.json()
}

export default async function Itemlayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { itemId: number }
}) {
  const itemDetails = await fetchItemDetails(params.itemId)

  return (
    <>
      <div className="fixed top-0 bg-white w-96 flex flex-col gap-2">
        <ItemHeader itemName={itemDetails.itemName} />
        <ItemTabs itemId={params.itemId} />
      </div>
      <div className="pt-28 py-20 min-h-screen">{children}</div>
      <div className="fixed bottom-0 h-20 w-96">
        <BottomTab />
      </div>
    </>
  )
}

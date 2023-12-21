'use client'
import { useState } from 'react'

import CheckCircle from '@/components/icons/check-circle'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useCartStore } from '@/store/client/cartSlice'

export default function SelectAllArea() {
  const [toggle, setToggle] = useState<boolean>(false)
  const { cart, selectedCount, selectAll, removeSelectedItem } = useCartStore()

  const isAllChecked = () => {
    return cart.length ? !cart.some((item) => item.selected === false) : false
  }
  const handleSelectAllProduct = () => {
    setToggle(!toggle)
    selectAll(!toggle)
  }
  const handleDeleteSelectedProduct = () => {
    removeSelectedItem()
  }
  return (
    <section className="flex justify-between items-center px-5 w-full">
      <div className="flex items-center text-body-sm">
        <Button variant={'none'} size={'checkbox'} className="mr-2" onClick={handleSelectAllProduct}>
          <CheckCircle
            width={'1.375rem'}
            height={'1.375rem'}
            className={cn('text-grayscale-200 fill-white', {
              'fill-brand-primary-500 text-white': isAllChecked(),
            })}
          />
        </Button>
        <span>전체선택</span>
        <span>
          ({selectedCount()}/{cart.length})
        </span>
      </div>
      <Button variant={'none'} className="" onClick={handleDeleteSelectedProduct}>
        선택삭제
      </Button>
    </section>
  )
}

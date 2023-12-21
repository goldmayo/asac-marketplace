'use client'
import React from 'react'

import { Button } from '@/components/ui/button'
import { convertNumberFormat } from '@/lib/utils'
import { useCartStore } from '@/store/client/cartSlice'

export default function CartPaymentButton() {
  const { price } = useCartStore()
  return (
    <Button variant={'primary'} size={'lg'}>
      <span>{convertNumberFormat(price())}원 결제하기</span>
    </Button>
  )
}

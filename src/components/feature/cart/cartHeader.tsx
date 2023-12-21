'use client'

import { useRouter } from 'next/navigation'

import Header from '@/components/common/header'
import SvgClose from '@/components/icons/close'

export default function CartHeader() {
  const router = useRouter()
  return (
    <Header
      left={<SvgClose width={'1.5rem'} height={'1.5rem'} onClick={() => router.back()} />}
      center={<span className="text-center">장바구니</span>}
    />
  )
}

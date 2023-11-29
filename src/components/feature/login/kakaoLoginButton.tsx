'use client'
import React from 'react'

import { Button } from '@/components/ui/button'
import { KakaoIcon } from '@/lib/icons'

export default function KakaoLoginButton() {
  return (
    <section className="">
      <div className="text-body-sm text-center py-5">
        <span className="">카카오로 </span>
        <span className="text-brand-primary-500">간편하게 시작</span>
        <span className="">하세요</span>
      </div>
      <Button variant={'kakao'} className="w-full h-12 relative">
        <KakaoIcon size="1.5rem" className="absolute left-0 ml-6" />
        <span>카카오로 시작하기</span>
      </Button>
    </section>
  )
}

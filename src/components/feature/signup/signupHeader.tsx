'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

import Header from '@/components/common/header'
import { Button } from '@/components/ui/button'
import { CloseIcon, ShoppingBagIcon } from '@/lib/icons'

export default function SignupHeader() {
  const router = useRouter()
  return (
    <Header
      left={
        <Button
          size={'icon'}
          onClick={() => router.push('/login')}
          className="bg-transparent text-grayscale-900 hover:bg-transparent border-0 ring-0 shadow-none"
        >
          <CloseIcon size={'1.5rem'} />
        </Button>
      }
      center={<span className="text-center">회원가입</span>}
      right={
        <Button
          size={'icon'}
          // onClick={() => router.back()}
          className="bg-transparent text-grayscale-900 hover:bg-transparent border-0 ring-0 shadow-none ml-auto"
        >
          <ShoppingBagIcon size={'1.5rem'} />
        </Button>
      }
    />
  )
}

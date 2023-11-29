'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

import Header from '@/components/common/header'
import { Button } from '@/components/ui/button'
import { CloseIcon } from '@/lib/icons'

export default function LoginHeader() {
  const router = useRouter()
  return (
    <Header
      left={
        <Button
          size={'icon'}
          onClick={() => router.push('/')}
          className="bg-transparent text-grayscale-900 hover:bg-transparent border-0 ring-0 shadow-none"
        >
          <CloseIcon size={'1.5rem'} />
        </Button>
      }
      center={<span className="text-center">로그인</span>}
    />
  )
}

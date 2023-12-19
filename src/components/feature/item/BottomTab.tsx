import SvgHeart from '@/components/icons/heart'
import { Button } from '@/components/ui/button'
import React from 'react'

export default function BottomTab() {
  return (
    <div className="flex px-5 py-3 gap-5 w-full border-t border-grayscale-100 shadow-inner bg-white h-full">
      <Button variant={'outline'} size={'icon'} className="h-full w-[15%] p-3">
        <SvgHeart fill="transparent" width={'w-full'} height={'h-full'} />
      </Button>
      <Button variant={'primary'} size={'sm'} className="h-full w-4/5">
        <span className=" text-button-base">구매하기</span>
      </Button>
    </div>
  )
}

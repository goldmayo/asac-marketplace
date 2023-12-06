import React from 'react'

import { useModalState } from '@/components/provider/modalProvider'
import { Button } from '@/components/ui/button'

interface ICheckModal {
  content: string
}

export default function CheckModal({ content }: ICheckModal) {
  const state = useModalState()
  return (
    <>
      <section className="py-5 px-8 text-body-md text-start w-[320px]">
        <span className="">{content}</span>
      </section>
      <div className="flex justify-end text-body-md">
        <Button
          variant={'outline'}
          className="ouline-none ring-none rounded-none border-none hover:bg-transparent h-10"
          onClick={() => state.modalRef.current?.close()}
        >
          확인
        </Button>
      </div>
    </>
  )
}

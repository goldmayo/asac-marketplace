/* eslint-disable react/display-name */
'use client'
import React, { ForwardedRef, forwardRef } from 'react'

import { useModalState } from '@/components/provider/modalProvider'

const Modal = forwardRef((_, ref: ForwardedRef<HTMLDialogElement>) => {
  const state = useModalState()

  const closeIfClickedOuside = (e: React.UIEvent<HTMLDialogElement>) => {
    if (e.target === state.modalRef.current) {
      console.log(e.target)
      console.log(state.modalRef.current)

      state.modalRef.current.close()
    }
  }

  return (
    <dialog ref={ref} className="backdrop:bg-black backdrop:opacity-40 rounded-lg" onClick={closeIfClickedOuside}>
      <div className="flex flex-col gap-2">{state.modalContent}</div>
    </dialog>
  )
})

export default Modal

/* eslint-disable react/display-name */
'use client'
import React, { ForwardedRef, forwardRef } from 'react'

import { useModalState } from '@/components/provider/modalProvider'
interface ModalProps {
  children: React.ReactNode
}

const Modal = forwardRef((props: ModalProps, ref: ForwardedRef<HTMLDialogElement>) => {
  const state = useModalState()

  const closeIfClickedOuside = (e: React.UIEvent<HTMLDialogElement>) => {
    /**
     * dialog의 backdrop을 클릭하면 모달 닫기
     * e.target: 이벤트가 발생한 요소
     * e.currentTarget: 이벤트 핸들러가 부착된 요소
     * dialog의 내부 요소를 클릭한 경우 e.target은 내부 요소를 가리킨다
     * 외부 backdrop요소가 dialog로 인식되는 것을 이용한다
     **/

    // console.log(e.target)
    // console.log(e.currentTarget)
    // console.log(state.modalRef.current)
    if (e.target === state.modalRef.current) {
      state.modalRef.current.close()
    }
  }

  return (
    <dialog ref={ref} className="backdrop:bg-black backdrop:opacity-40 rounded-lg" onClick={closeIfClickedOuside}>
      <div className="flex flex-col gap-2">{props.children}</div>
    </dialog>
  )
})

export default Modal

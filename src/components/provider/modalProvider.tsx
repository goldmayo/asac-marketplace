'use client'
import React, { createContext, useContext, useRef, useState } from 'react'

import Modal from '@/components/common/modal/modal'

type ModalState = {
  modalContent: React.ReactNode
  modalRef: React.MutableRefObject<HTMLDialogElement | null>
  // eslint-disable-next-line no-unused-vars
  setModalContnet: (children: React.ReactNode) => void
}

const ModalContext = createContext<ModalState | null>(null)

export default function ModalProvider({ children }: { children: React.ReactNode }) {
  const modalRef = useRef<HTMLDialogElement | null>(null)
  const [modalContent, setModalContent] = useState<React.ReactNode>(<></>)
  const setModalContnet = (children: React.ReactNode) => {
    setModalContent(children)
  }
  return (
    <ModalContext.Provider value={{ modalRef, modalContent, setModalContnet }}>
      {children}
      <Modal ref={modalRef} />
    </ModalContext.Provider>
  )
}

export function useModalState() {
  const state = useContext(ModalContext)
  if (!state) throw new Error('ModalProvider not found')
  return state
}

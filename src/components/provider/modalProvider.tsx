'use client'
import React, { createContext, useContext, useRef, useState } from 'react'

import Modal from '@/components/common/modal/modal'

type ModalState = {
  // modalContent: React.ReactNode
  modalRef: React.MutableRefObject<HTMLDialogElement | null>
  // eslint-disable-next-line no-unused-vars
  setModal: (content: React.ReactNode) => void
}

const ModalContext = createContext<ModalState | null>(null)

export default function ModalProvider({ children }: { children: React.ReactNode }) {
  const modalRef = useRef<HTMLDialogElement | null>(null)
  const [modalContent, setModalContent] = useState<React.ReactNode>(<></>)

  const setModal = (content: React.ReactNode) => {
    setModalContent(content)
  }
  return (
    <ModalContext.Provider value={{ modalRef, setModal }}>
      {children}
      <Modal ref={modalRef}>{modalContent}</Modal>
    </ModalContext.Provider>
  )
}

export function useModalState() {
  const state = useContext(ModalContext)
  if (!state) throw new Error('ModalProvider not found')
  return state
}

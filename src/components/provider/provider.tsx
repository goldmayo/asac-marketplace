import React from 'react'

import ModalProvider from '@/components/provider/modalProvider'

export default function Provider({ children }: { children: React.ReactNode }) {
  return <ModalProvider>{children}</ModalProvider>
}

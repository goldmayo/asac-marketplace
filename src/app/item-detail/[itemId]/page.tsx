import React from 'react'

export default function page({ children, params }: { children: React.ReactNode; params: { itemId: number } }) {
  return <div>{params.itemId}</div>
}

import React from 'react'

interface Props {
  left?: React.ReactNode
  center?: React.ReactNode
  right?: React.ReactNode
}

export default function Header({ left, center, right }: Props) {
  return (
    <header className=" border-b-2 border-grayscale-50 w-ful py-5">
      <nav className="grid grid-cols-3 content-between items-center text-title-lg">
        {left}
        {center}
        {right}
      </nav>
    </header>
  )
}

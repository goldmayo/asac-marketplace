'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function ItemTabs({ itemId }: { itemId: number }) {
  const navLinks = [
    { href: `/items/${itemId}`, tabLabel: '상품설명' },
    { href: `/items/${itemId}/detail`, tabLabel: '상세정보' },
    { href: `/items/${itemId}/review`, tabLabel: '후기' },
    { href: `/items/${itemId}/inquiry`, tabLabel: '문의' },
  ]
  const pathname = usePathname()
  return (
    <nav className="sticky top-20 text-body-sm bg-white flex justify-around z-10">
      {navLinks.map((link, index) => (
        <Link
          key={index}
          className={`pb-1 ${
            pathname === link.href ? 'text-brand-primary-500 border-b-2 border-brand-primary-500' : 'text-grayscale-400'
          }`}
          href={link.href}
        >
          <div>{link.tabLabel}</div>
        </Link>
      ))}
    </nav>
  )
}

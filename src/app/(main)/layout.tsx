'use client'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import React from 'react'
import { CiHome, CiMenuBurger, CiSearch, CiUser } from 'react-icons/ci'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const segment = useSelectedLayoutSegment()
  return (
    <section className="relative h-screen z-10">
      {children}
      <nav className="sticky bottom-0 h-14 bg-white border border-t-gray-300 text-2xl flex items-center justify-around">
        <Link className={`${segment === '(home)' ? 'text-brand-primary-500' : 'text-black'}`} href={'/recommendations'}>
          <CiHome />
        </Link>
        {/* 아래는 아직 페이지 구현 x (만든 후 href 수정 예정) */}
        <Link
          className={`${segment === '(category)' ? 'text-brand-primary-500' : 'text-black'}`}
          href={'/recommendations'}
        >
          <CiMenuBurger />
        </Link>
        <Link
          className={`${segment === '(search)' ? 'text-brand-primary-500' : 'text-black'}`}
          href={'/recommendations'}
        >
          <CiSearch />
        </Link>
        <Link
          className={`${segment === '(myPage)' ? 'text-brand-primary-500' : 'text-black'}`}
          href={'/recommendations'}
        >
          <CiUser />
        </Link>
      </nav>
    </section>
  )
}

'use client'
import { CiSearch,CiMenuBurger,CiHome, CiUser } from "react-icons/ci";
import Link from 'next/link'
import { useSelectedLayoutSegment } from "next/navigation";

export default function MainLayout({
    children, 
  }: {
    children: React.ReactNode
  }) {
    const segment = useSelectedLayoutSegment()
    return (
<section className="relative h-screen">
  {children}
  <nav className="sticky bottom-0 h-14 bg-white border border-t-gray-300 flex items-center justify-around">
    <Link className={`text-2xl ${segment === 'home' ? 'text-brand-primary-500' : 'text-black'}`} href={"/home"}>
        <CiHome></CiHome>
    </Link>
    <Link className={`text-2xl ${segment === 'category' ? 'text-brand-primary-500' : 'text-black'}`} href={"/home"}>
        <CiMenuBurger></CiMenuBurger>
    </Link>
    <Link className={`text-2xl ${segment === 'search' ? 'text-brand-primary-500' : 'text-black'}`} href={"/home"}>
        <CiSearch></CiSearch>
    </Link>
    <Link className={`text-2xl ${segment === 'myPage' ? 'text-brand-primary-500' : 'text-black'}`} href={"/home"}>
        <CiUser></CiUser>
    </Link>
  </nav>
</section>
    )
  }
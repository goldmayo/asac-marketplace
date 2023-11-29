'use client'
import { Lobster } from 'next/font/google'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from 'react';
import { PiHandbagSimple } from "react-icons/pi";

const lobster = Lobster({subsets:['latin'],weight:"400"})

const navLinks = [
  { href: "/recommendations", tabLabel: "추천" },
  { href: "/newArrivals", tabLabel: "신상품" },
  { href: "/bestItems", tabLabel: "베스트" },
  { href: "/budgetShooping", tabLabel: "알뜰쇼핑" },
  { href: "/specialOffer", tabLabel: "특가/혜택" },
];

function NavLink({ href, tabLabel }: { href: string; tabLabel: string }) {
  const pathname = usePathname()
  return (
    <Link className={` ${pathname.startsWith(href) ? 'text-brand-primary-500 border-b-2 border-brand-primary-500' : 'text-grayscale-400'}`} href={href}>
      <div>{tabLabel}</div>
    </Link>
  );
}

export default function HomeLayout({
    children, 
  }: {
    children: React.ReactNode
  }) {
    return (
<section className="relative min-h-screen">
  {children}
  <nav className="fixed top-0 w-96 h-14 bg-brand-primary-500 border border-b-gray-200 text-white flex justify-between">
    <button className={`pl-6 text-2xl ${lobster.className} `}>
        market place
    </button>
    <button className=" text-2xl pr-6">
        <PiHandbagSimple></PiHandbagSimple>
    </button>
  </nav>
  <nav className="fixed top-14 w-96 py-2 h-10 text-body-sm bg-white flex justify-around">
        {navLinks.map((link, index) => (
          <NavLink key={index} href={link.href} tabLabel={link.tabLabel} />
        ))}
      </nav>
</section>

    )
  }
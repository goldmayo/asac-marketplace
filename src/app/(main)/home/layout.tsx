import { PiHandbagSimple } from "react-icons/pi";
import { Lobster } from 'next/font/google'

const lobster = Lobster({subsets:['latin'],weight:"400"})

export default function HomeLayout({
    children, 
  }: {
    children: React.ReactNode
  }) {
    return (
<>
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
</section>
</>

    )
  }
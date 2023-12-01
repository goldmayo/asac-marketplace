import Image from 'next/image'
import React from 'react'
import { BiMessageRoundedDots } from 'react-icons/bi'
import { PiHandbagSimple } from 'react-icons/pi'

interface Product {
  productId: number
  productName: string
  image: string
  discountRate: number
  price: number
  reviewCount: number
}

interface SmallCardProps {
  product: Product
}

export default function BigCard({ product }: SmallCardProps) {
  return (
    <div className="w-80 h-[271px] justify-start items-start gap-1 flex flex-col">
      <div className="relative">
        <Image
          src={product.image}
          alt={product.productName}
          width={300}
          height={300}
          className="w-80 h-[164px] object-cover"
        ></Image>
        <div className="w-[34px] h-[34px] right-[21px] bottom-[17px] absolute bg-gray-700 bg-opacity-50 text-white rounded-[70px] justify-center items-center flex">
          <PiHandbagSimple />
        </div>
      </div>
      <div className="w-full text-neutral-600 text-sm font-medium ">{product.productName}</div>
      <div className="flex gap-1 items-center">
        <div className="text-red-500 text-body-md">{product.discountRate}%</div>
        <div className="text-zinc-800 text-body-md font-semibold">
          {(product.price * (100 - product.discountRate)) / 100}원
        </div>
        <div className="relative text-grayscale-200 text-sm">
          {product.price}원
          <div className="w-full h-px left-0 top-[10px] absolute bg-grayscale-200" />
        </div>
      </div>
      <div className="items-center gap-1 flex text-grayscale-300 text-body-xs font-normal">
        <BiMessageRoundedDots />
        <div>후기 {product.reviewCount}</div>
      </div>
    </div>
  )
}

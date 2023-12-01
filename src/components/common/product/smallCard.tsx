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

export default function SmallCard({ product }: SmallCardProps) {
  return (
    <div className=" w-[126px] h-[271px] justify-start items-start gap-1 flex flex-col">
      <div className="relative">
        <Image
          src={product.image}
          alt={product.productName}
          width={300}
          height={300}
          className="w-[126px] h-[164px] object-cover"
        ></Image>
        <div className="w-[34px] h-[34px] left-[80px] top-[115px] absolute bg-gray-700 bg-opacity-50 text-white rounded-[70px] justify-center items-center flex">
          <PiHandbagSimple />
        </div>
      </div>
      <div className="w-full text-neutral-600 text-body-xs font-medium ">{product.productName}</div>
      <div className="flex-col items-start flex">
        <div className="gap-1 inline-flex">
          <div className="text-red-500 text-body-sm">{product.discountRate}%</div>
          <div className="text-zinc-800 text-[13px] font-bold">
            {(product.price * (100 - product.discountRate)) / 100}원
          </div>
        </div>
        <div className="relative text-grayscale-200 text-xs font-medium">
          {product.price}원
          <div className="w-full h-px left-0 top-[8px] absolute bg-grayscale-200" />
        </div>
      </div>
      <div className="items-center gap-1 flex text-gray-400">
        <div className="text-body-sm">
          <BiMessageRoundedDots />
        </div>
        <div className="text-body-mini font-medium">후기 {product.reviewCount}개</div>
      </div>
    </div>
  )
}

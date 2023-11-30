import React from 'react'

export default function LastSale() {
  return (
    <div className="flex flex-col h-80 gap-4 border-2 border-brand-primary-300">
      <p className="text-headline3 ">마감세일</p>
      <div className="flex items-center overflow-x-scroll h-full border-2 gap-4">
        <div className="flex-none w-32 bg-white rounded shadow-md">
          <p>1</p>
        </div>

        <div className="flex-none w-32 bg-white rounded shadow-md">
          <p>2</p>
        </div>

        <div className="flex-none w-32 bg-white rounded shadow-md">
          <p>3</p>
        </div>
      </div>
    </div>
  )
}

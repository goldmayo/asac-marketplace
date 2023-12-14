'use client'
import React, { FormEvent, useState } from 'react'

import { Input } from '@/components/ui/input'
import { ChevronLeft, Search, XCircle } from '@/components/icons'

export default function SearchBar({
  setIsBarClicked,
  searchedWord,
  setSearchWord,
}: {
  setIsBarClicked: (isBarClicked: boolean) => void
  searchedWord: string
  setSearchWord: (searchWord: string) => void
}) {
  const [inputWord, setInputWord] = useState('')

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearchWord(inputWord)
  }
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event
    // console.log(value)
    setInputWord(value)
  }
  return (
    <form className="relative flex w-full" onSubmit={handleSearch} onClick={() => setIsBarClicked(true)}>
      <div className="absolute flex items-center left-3 h-full text-grayscale-300 ">
        <Search width={'1.2rem'} height={'1.2rem'} fill="transparent" />
      </div>
      <button type="reset" className="absolute flex items-center right-3 h-full text-grayscale-300">
        <XCircle width={'1.2rem'} height={'1.2rem'} fill="transparent" />
      </button>
      <Input
        type="text"
        name="search"
        placeholder="검색어를 입력해주세요"
        className="h-full pl-10 bg-gray-100 border-0 focus-visible:ring-0"
        onChange={onChange}
        defaultValue={searchedWord}
      />
    </form>
  )
}

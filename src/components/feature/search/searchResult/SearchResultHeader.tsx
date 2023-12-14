'use client'
import React, { useEffect, useState } from 'react'
import SearchBar from '@/components/feature/search/SearchBar'
import { useRouter } from 'next/navigation'
import { Bag, ChevronLeft } from '@/components/icons'

export default function SearchResultHeader({ searchedWord }: { searchedWord: string }) {
  const [isBarClicked, setIsBarClicked] = useState(false)
  const [searchWord, setSearchWord] = useState(searchedWord)
  const router = useRouter()

  useEffect(() => {
    router.push(`/search/${searchWord}`)
    console.log('검색!', searchWord)
    console.log(searchWord)
  }, [searchWord])

  return (
    <div className="h-full flex gap-2 bg-white">
      <button className="font-bold" onClick={() => router.push('/search')}>
        <ChevronLeft width={'1.5rem'} height={'1.5rem'} fill="transparent" />
      </button>
      <SearchBar setIsBarClicked={setIsBarClicked} searchedWord={searchedWord} setSearchWord={setSearchWord} />
      <button className="font-bold">
        <Bag width={'1.5rem'} height={'1.5rem'} fill="transparent" />
      </button>
    </div>
  )
}

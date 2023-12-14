'use client'
import React, { useEffect, useState } from 'react'

import SearchBar from '@/components/feature/search/SearchBar'
import SearchHeader from '@/components/feature/search/SearchHeader'
import SuggestedSearches from '@/components/feature/search/SuggestedSearches'
import TopSearches from '@/components/feature/search/TopSearches'
import { useRouter } from 'next/navigation'
import { ChevronLeft } from '@/components/icons'

export default function SearchPage() {
  const router = useRouter()
  const [isBarClicked, setIsBarClicked] = useState(false)
  const [searchWord, setSearchWord] = useState('')
  useEffect(() => {
    router.push(`/search/${searchWord}`)
    console.log('검색!', searchWord)
    console.log(searchWord)
  }, [searchWord])

  return (
    <>
      <div className="sticky top-0">
        {!isBarClicked && <SearchHeader />}
        <div className="flex gap-2 py-2 px-4 bg-white">
          {isBarClicked && (
            <button className="font-bold" onClick={() => setIsBarClicked(false)}>
              <ChevronLeft width={'1.5rem'} height={'1.5rem'} fill="transparent" />
            </button>
          )}
          <SearchBar setIsBarClicked={setIsBarClicked} searchedWord={searchWord} setSearchWord={setSearchWord} />
        </div>
      </div>
      <div className="w-full py-2 px-4 flex flex-col gap-8">
        <SuggestedSearches setSearchWord={setSearchWord} />
        <TopSearches setSearchWord={setSearchWord} />
      </div>
    </>
  )
}

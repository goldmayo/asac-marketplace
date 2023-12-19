'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import AutoComplete from '@/components/feature/search/AutoComplete'
import SearchBar from '@/components/feature/search/SearchBar'
import SearchHeader from '@/components/feature/search/SearchHeader'
import SuggestedSearches from '@/components/feature/search/SuggestedSearches'
import TopSearches from '@/components/feature/search/TopSearches'
import { ChevronLeft } from '@/components/icons'

export default function SearchPage() {
  const router = useRouter()
  const [isBarClicked, setIsBarClicked] = useState(false)
  const [searchWord, setSearchWord] = useState('')
  const [searchingWord, setSearchingWord] = useState('')

  useEffect(() => {
    router.push(`/search/${searchWord}`)
    console.log('검색!', searchWord)
    console.log(searchWord)
  }, [searchWord])

  return (
    <>
      <div className="sticky top-0 z-30">
        {!isBarClicked && <SearchHeader />}
        <div className="flex gap-2 py-2 px-4 bg-white">
          {isBarClicked && (
            <button className="font-bold" onClick={() => setIsBarClicked(false)}>
              <ChevronLeft width={'1.5rem'} height={'1.5rem'} fill="transparent" />
            </button>
          )}
          <SearchBar
            setSearchingWord={setSearchingWord}
            setIsBarClicked={setIsBarClicked}
            searchedWord={searchWord}
            setSearchWord={setSearchWord}
          />
        </div>
      </div>
      {/* 자동완성  */}
      {isBarClicked && searchingWord && <AutoComplete searchingWord={searchingWord} />}

      <div className="w-full py-2 px-4 flex flex-col gap-8">
        <SuggestedSearches setSearchWord={setSearchWord} />
        <TopSearches setSearchWord={setSearchWord} />
      </div>
    </>
  )
}

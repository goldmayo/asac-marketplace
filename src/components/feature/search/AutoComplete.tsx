import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

interface AutoCompleteProps {
  searchingWord: string
}

interface AutoCompleteWord {
  name: string
}
async function fetchAutoCompleteWords(searchingWord: string) {
  // const res = await fetch(`/api/search/autokeyword?keyword=${searchingWord}`)
  const res = await fetch(`/dummyData/autoKeywordsData.json`)
  if (!res.ok) {
    throw new Error('Failed to fetch')
  }
  return res.json()
}

export default function AutoComplete({ searchingWord }: { searchingWord: string }) {
  const [autoCompleteWords, setAutoCompleteWords] = useState<AutoCompleteWord[]>([])
  const router = useRouter()

  useEffect(() => {
    fetchAutoCompleteWords(searchingWord)
      .then((data) => {
        setAutoCompleteWords(data)
        console.log('auto complete keywords 패치')
      })
      .catch((error) => {
        console.error('data fetch 실패', error)
      })
  }, [searchingWord])
  return (
    <>
      <div className="left-0 w-full absolute bg-white h-full z-20 text-sm font-medium">
        {/* <div>{searchingWord}</div> */}
        <div className="pt-1 flex flex-col">
          {autoCompleteWords.map((word, index) => (
            <div className="border-b border-brand-grayscale-200 py-4 mx-4">
              <button onClick={() => router.push(`/search/${word.name}`)} className="" key={index}>
                {word.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

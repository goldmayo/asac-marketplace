import React from 'react'

export default function EmptySearchResult() {
  return (
    <div className="flex flex-col text-center p-10 gap-2 text-headline4 text-grayscale-400">
      <span>검색결과가 없습니다</span>
      <span>다른 키워드로 검색해 주세요</span>
    </div>
  )
}

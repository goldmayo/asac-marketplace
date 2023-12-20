import React from 'react'

export default function ReviewNotice() {
  return (
    // 공지사항 구현 시 수정 예정 (후기관련 공지 데이터로 대체, 클릭시 이동)
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <div className="bg-grayscale-50 rounded-md py-1 px-3 text-xs text-grayscale-400">공지</div>
        <button className=" text-body-xs font-light text-gray-500">금주의 베스트 후기 안내</button>
      </div>
      <div className="flex gap-2">
        <div className="bg-grayscale-50 rounded-md py-1 px-3 text-xs text-grayscale-400">공지</div>
        <button className=" text-body-xs font-light text-gray-500">금주의 베스트 후기 안내</button>
      </div>
    </div>
  )
}

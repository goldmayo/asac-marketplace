import type { SVGProps } from 'react'
import * as React from 'react'
function SvgChevronLeft(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g id="chevron-left">
        <path
          id="Icon"
          d="M15 18L9 12L15 6"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}
export default SvgChevronLeft

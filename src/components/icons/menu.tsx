import type { SVGProps } from 'react'
import * as React from 'react'
function SvgMenu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g id="menu">
        <path
          id="Icon"
          d="M3 12H21M3 6H21M3 18H21"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}
export default SvgMenu

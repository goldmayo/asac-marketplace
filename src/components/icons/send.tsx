import type { SVGProps } from 'react'
import * as React from 'react'
function SvgSend(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g id="send">
        <path
          id="Icon"
          d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}
export default SvgSend

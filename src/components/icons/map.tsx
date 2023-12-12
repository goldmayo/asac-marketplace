import type { SVGProps } from 'react'
import * as React from 'react'
function SvgMap(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g id="map">
        <path
          id="Icon"
          d="M8 18L1 22V6L8 2M8 18L16 22M8 18V2M16 22L23 18V2L16 6M16 22V6M16 6L8 2"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}
export default SvgMap

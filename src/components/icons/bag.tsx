import type { SVGProps } from 'react'
import * as React from 'react'
function SvgBag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g id="Bag">
        <path
          id="Vector"
          d="M17.5 7.5L16.6666 14.1667C16.5423 15.074 16.0993 15.9074 15.4169 16.5181C14.7345 17.1288 13.8571 17.4768 12.9416 17.5H6.99162C6.07615 17.4768 5.19876 17.1288 4.51633 16.5181C3.8339 15.9074 3.39094 15.074 3.26662 14.1667L2.43329 7.5"
          stroke="currentColor"
          strokeWidth={1.57895}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M2.5 7.49961C7.34537 5.74102 12.6546 5.74102 17.5 7.49961"
          stroke="currentColor"
          strokeWidth={1.57895}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_3"
          d="M5.35809 6.68332L7.56643 2.5"
          stroke="currentColor"
          strokeWidth={1.57895}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_4"
          d="M14.6416 6.68332L12.4333 2.5"
          stroke="currentColor"
          strokeWidth={1.57895}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}
export default SvgBag

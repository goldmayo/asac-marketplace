import type { SVGProps } from 'react'
import * as React from 'react'
const SvgShare = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      fill="#333"
      fillRule="evenodd"
      d="M6.905 8.443 9.98 5.368v8.416a1.009 1.009 0 0 0 2.017 0V5.369l3.076 3.074a1.003 1.003 0 0 0 1.425 0 1.008 1.008 0 0 0 0-1.426L11.701 2.22a1.012 1.012 0 0 0-1.425 0L5.479 7.017a1.01 1.01 0 0 0 1.426 1.426Z"
      clipRule="evenodd"
    />
    <path
      fill="#333"
      fillRule="evenodd"
      d="M18.683 12.002a1.01 1.01 0 0 0-1.01 1.008v3.857c0 .657-.534 1.191-1.19 1.191H5.496a1.193 1.193 0 0 1-1.191-1.191v-3.858a1.008 1.008 0 0 0-2.017 0v3.858c0 1.769 1.44 3.208 3.208 3.208h10.987a3.213 3.213 0 0 0 3.208-3.208v-3.858a1.008 1.008 0 0 0-1.008-1.008"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgShare

import * as React from 'react'
function SvgThumbsUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        d="M3.716 6.903A1.428 1.428 0 0 0 2.288 8.33v5.99c0 .789.639 1.429 1.428 1.429h1.447V6.903H3.716ZM15.31 5.248h-3.407V2.052a1.302 1.302 0 0 0-2.43-.651L6.296 6.903h-.008v8.847h6.926a2.857 2.857 0 0 0 2.773-2.172l1.403-5.673a2.143 2.143 0 0 0-2.08-2.657Z"
        clipRule="evenodd"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export default SvgThumbsUp

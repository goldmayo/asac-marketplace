import { NextResponse } from 'next/server'
export async function POST(request: Request) {
  console.log(request)

  return NextResponse.json({ status: 200, message: true })
}

/**
 * 1. base_url 설정 및 파일 위치
 * 2. interceptor
 * 3. error handling
 * @returns
 */

// export async function GET() {
//   const res = await fetch('http://', {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//   const data = await res.json()

//   return NextResponse.json({ data })
// }

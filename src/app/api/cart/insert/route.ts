import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

import { baseURL } from '@/api/util/instance'

export async function POST(req: NextRequest) {
  try {
    const itemId = req.nextUrl.searchParams.get('itemId')
    const requestHeaders = new Headers(req.headers)

    const authToken = cookies().get('AUTH_TOKEN')?.value
    const hasCookies = cookies().has('AUTH_TOKEN')

    if (hasCookies) {
      requestHeaders.set('Authorization', `Bearer ${authToken}`)
    }

    const res = await fetch(`${baseURL}/cart/insert?itemId=${itemId}`, {
      method: 'POST',
      headers: requestHeaders,
    })

    if (!res.ok) {
      // throw new Error('Failed to login authenticate')
      console.log('Failed to insert item Cart', res.status)
      const response = await res.json()
      return NextResponse.json(response)
    }

    const response = await res.json()

    return NextResponse.json(response)
  } catch (error) {
    return NextResponse.json({ msg: '상품을 장바구니에 추가하지 못했습니다.' })
  }
}

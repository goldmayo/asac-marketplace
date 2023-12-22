import { commonHeader } from '@/api/util/instance'
import { baseURL } from '@/api/util/instance'
import { ILoginParams } from '@/types/login'

export async function fetchLogin(body: ILoginParams) {
  const res = await fetch(`${baseURL}/members/authenticate`, {
    method: 'POST',
    headers: {
      ...commonHeader,
    },
    body: JSON.stringify(body),
  })

  if (res.status !== 200) {
    const errorMsg = await res.text()
    return { errorMessage: errorMsg }
  }

  return await res.json()
}

export async function fetchAuthenticate() {
  const res = await fetch(`http://3.36.91.126:8080/login`, {
    method: 'GET',
    headers: {
      ...commonHeader,
    },
    // body: JSON.stringify({ redirect_url: 'http://localhost:3000/additional-login' }),
  })

  if (res.status !== 200) {
    const errorMsg = await res.text()
    return { errorMessage: errorMsg }
  }

  return await res.json()
}

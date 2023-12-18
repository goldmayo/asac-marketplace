import { baseURL } from '@/api/util/instance'
import { ICheckEmailParams, ICheckUserIdParams, ISignUpPrams } from '@/types/signup'

export async function fetchCheckLoginId(body: ICheckUserIdParams): Promise<boolean> {
  const res = await fetch(`${baseURL}/members/check-loginid`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    throw new Error('Failed to ')
  }

  return await res.json()
}

export async function fetchCheckEmail(body: ICheckEmailParams): Promise<boolean> {
  const res = await fetch(`${baseURL}/members/check-email`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    throw new Error('Failed to ')
  }

  return await res.json()
}

export async function fetchSignUp(body: ISignUpPrams) {
  const res = await fetch(`${baseURL}/members/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(body),
  })

  if (res.status === 409) {
    const errorMsg = res.json()
    return { errorMessage: errorMsg }
  }

  return await res.json()
}

import { baseURL } from '../util/instance'

export async function fetchLastSaleProducts() {
  const res = await fetch(`${baseURL}/items/endofseason`)
  if (!res.ok) {
    throw new Error('failed to fetch')
  }
  return res.json()
}

export async function fetchWeekendSaleProducts() {
  const res = await fetch(`${baseURL}/items/weekend`)
  if (!res.ok) {
    throw new Error('failed to fetch')
  }
  return res.json()
}

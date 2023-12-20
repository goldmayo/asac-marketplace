import { baseURL } from '../util/instance'

export async function fetchItemDetails(itemId: number) {
  const res = await fetch(`${baseURL}/items?itemId=${itemId}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return await res.json()
}

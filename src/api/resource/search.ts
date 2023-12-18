import { baseURL } from '@/api/util/instance'
export async function fetchSearchItemsData(
  searchWord: string,
  categoryParams: string | null,
  brandParams: string | null,
  priceParams: string | null,
) {
  const res = await fetch(
    `${baseURL}/search/complexitem?name=${searchWord}${categoryParams ? `&categoryName=${categoryParams}` : ''}${
      brandParams ? `&brand=${brandParams}` : ''
    }${priceParams ? `&price=${priceParams}` : ''}`,
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return await res.json()
}

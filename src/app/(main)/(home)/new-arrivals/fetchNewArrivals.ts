export async function fetchNewArrivalsData(params: any) {
  const res = await fetch(`/dummyData/searchResult.json`)
  // const res = await fetch(`/api/search/complexitem?${params}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  //filter data with params~
  const newArrivals = await res.json()
  return newArrivals
}

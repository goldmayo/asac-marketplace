export async function fetchBestItemsData(params: any) {
  const res = await fetch(`/dummyData/searchResult.json`)
  // const res = await fetch(`/api/search/complexitem?${params}`)
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  //filter data with params~
  const bestItems = await res.json()
  return bestItems
}

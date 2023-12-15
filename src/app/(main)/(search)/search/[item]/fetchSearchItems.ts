export async function fetchSearchItemsData(searchWord: any) {
  const res = await fetch(`/dummyData/searchResult.json`)
  // const res = await fetch(`/api/search/complexitem?${params}`)
  // const res = await fetch(`/api/search/${searchWord}`)
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  //filter data with params~
  const searchItems = await res.json()
  return searchItems
}

import filterData from '@/../public/dummyData/filterData.json'
export async function fetchFilterData(params: string) {
  // const res = await fetch(`/api/search/${params}/filter`)
  // if (!res.ok) {
  //   throw new Error('Failed to fetch job data')
  // }
  // //filter data with params~~~
  // return res.json()
  return filterData
}

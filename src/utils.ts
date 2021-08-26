import axios from "axios"

export type ModuleData = {
  name: string
  stars: number
  owner: string
  repository_url: string
}

export default async function getModules(
  page: number,
  itemsPerPage: number,
  search: string,
  sortByStars: boolean,
) : Promise<ModuleData[]> {

  const query = new URLSearchParams({
    page: page.toFixed(0),
    per_page: itemsPerPage.toFixed(0),
    q: search.toString(),
    sort: sortByStars ? 'stars' : '',
  }).toString()

  const response = await axios.get<ModuleData[]>(`https://libraries.io/api/bower-search?${query}`)
  response.data.forEach((module: ModuleData) => {
    const match = module.repository_url.match(/.*\/(.*)\/(.*)$/)
    if (match !== null) {
      module.owner = match[1]
    }
  })
  return response.data
}

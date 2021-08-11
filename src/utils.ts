export default async function getModules(
  page: number,
  itemsPerPage: number,
  search: string,
  sortByStars: boolean,
) {

  const query = new URLSearchParams({
    page: page.toFixed(0),
    per_page: itemsPerPage.toFixed(0),
    q: search.toString(),
    sort: sortByStars ? 'stars' : '',
  }).toString()

  return fetch('https://libraries.io/api/bower-search?' + query)
    .then((response) => {
      if (response.ok) return response.json()
      throw new Error('something went wrong in the modules request')
    })
    .then((modules) => {
      modules.forEach((module:any) => {
        const match = module.repository_url.match(/.*\/(.*)\/(.*)$/)
        if (match !== null) {
          module.owner = match[1]
        }
      })
      return modules
    })
}

import React, { useState, useEffect } from 'react'
import Pagination from '@material-ui/lab/Pagination'

export type ModulesArray = {
  name: string
  stars: number
  owner: string
}

function Modules() {
  const [modules, setModules] = useState<ModulesArray[]>([])
  const [error, setError] = useState(false)
  const [page, setPage] = React.useState(1)
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)

  const itemsPerPage = 5

  useEffect(() => {
    const query = new URLSearchParams({
      page: page.toFixed(0),
      per_page: itemsPerPage.toFixed(0),
      q: search.toString(),
      // sort: 'stars',
    }).toString()

    fetch('https://libraries.io/api/bower-search?' + query)
      .then((response) => {
        if (response.ok) return response.json()
        throw new Error('something went wrong in the modules request')
      })
      .then((modules) => {
        setLoading(false)
        setModules(modules)
      })
      .catch((error) => {
        setError(error.message)
      })
  }, [page, search])

  if (error) return <h1>{error}</h1>

  const handlePaginationChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setPage(value)
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value)
  }

  return (
    <div>
      <div>
        <input
          type="search"
          id="search"
          name="search"
          placeholder="Search..."
          value={search}
          onChange={handleSearchChange}
        ></input>
      </div>
      {loading && <div>Loading...</div>}
      {!loading && !error && modules.length > 0 ? (
        modules
          .sort((a, b) => (a.stars < b.stars ? 1 : -1))
          .map((module) => (
            <div key={module.name}>
              <p>{module.name}</p>
              <p>{module.stars}</p>
              {/* add the owner */}
            </div>
          ))
      ) : (
        <h1>No results, please try different query</h1>
      )}

      {error && <div>Error message</div>}

      <Pagination
        count={100}
        page={page}
        siblingCount={2}
        onChange={handlePaginationChange}
        showLastButton
      />
    </div>
  )
}

export default Modules

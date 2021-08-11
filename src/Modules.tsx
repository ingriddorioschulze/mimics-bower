import React, { useState, useEffect } from 'react'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

import Pagination from '@material-ui/lab/Pagination'
import { findByLabelText } from '@testing-library/react'

export type ModuleData = {
  name: string
  stars: number
  repository_url: string
  owner: string
}

function Modules() {
  const [modules, setModules] = useState<ModuleData[]>([])
  const [error, setError] = useState(false)
  const [page, setPage] = React.useState(1)
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [sortByStars, setSortByStars] = useState(false)

  const itemsPerPage = 5

  useEffect(() => {
    const query = new URLSearchParams({
      page: page.toFixed(0),
      per_page: itemsPerPage.toFixed(0),
      q: search.toString(),
      sort: sortByStars ? 'stars' : '',
    }).toString()

    fetch('https://libraries.io/api/bower-search?' + query)
      .then((response) => {
        if (response.ok) return response.json()
        throw new Error('something went wrong in the modules request')
      })
      .then((modules: ModuleData[]) => {
        setLoading(false)
        modules.forEach((module) => {
          const match = module.repository_url.match(/.*\/(.*)\/(.*)$/)
          if (match !== null) {
            module.owner = match[1]
          }
        })
        setModules(modules)
      })
      .catch((error) => {
        setError(error.message)
      })
  }, [page, search, sortByStars])

  if (error) return <h1>{error}</h1>

  const handlePaginationChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setPage(value)
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true)
    setSearch(event.currentTarget.value)
  }

  return (
    <div>
      <div className="searchbar-container">
        <input
          type="search"
          id="search"
          name="search"
          placeholder="Search..."
          value={search}
          onChange={handleSearchChange}
        ></input>
      </div>
      <div className="modules-container">
        {loading && <h1>Loading search results</h1>}
        {!loading && modules.length === 0 && (
          <h1>No results, please try different query</h1>
        )}
        {error && <div>Error message</div>}
        <TableContainer component={Paper}>
          <Table aria-label="modules table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Owner</TableCell>
                <TableCell>Stars</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!error &&
                modules.map((module) => (
                  <TableRow key={module.name}>
                    <TableCell>{module.name}</TableCell>
                    <TableCell>{module.owner}</TableCell>
                    <TableCell>{module.stars}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="pagination">
        <Pagination
          count={100}
          page={page}
          siblingCount={2}
          onChange={handlePaginationChange}
          showLastButton
        />
      </div>
    </div>
  )
}

export default Modules

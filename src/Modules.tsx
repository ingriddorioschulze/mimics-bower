import React, { useState, useEffect } from 'react'
import Pagination from '@material-ui/lab/Pagination'

export type ModulesArray = {
  name: string
  stars: number
  owner: string
}

function Modules() {
  const [modules, setModules] = useState<ModulesArray[]>([])
  const [error, setError] = useState('')
  const [page, setPage] = React.useState(1)

  const itemsPerPage = 5

  useEffect(() => {
    const query = new URLSearchParams({
      page: page.toFixed(0),
      per_page: itemsPerPage.toFixed(0),
      q: '',
      sort: 'stars',
    }).toString()
    fetch('https://libraries.io/api/bower-search?' + query)
      .then((response) => {
        if (response.ok) return response.json()
        throw new Error('something went wrong in the modules request')
      })
      .then((modules) => {
        setModules(modules)
      })
      .catch((error) => {
        setError(error.message)
      })
  }, [page])

  if (error) return <h1>{error}</h1>

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  console.log(modules)

  return (
    <div>
      <div>
        <input type="search" id="search" name="search"></input>
      </div>
      {modules.map((module) => (
        <div key={module.name}>
          <p>{module.name}</p>
          <p>{module.stars}</p>
          {/* add the owner */}
        </div>
      ))}
      <Pagination
        count={100}
        page={page}
        siblingCount={2}
        onChange={handleChange}
        showLastButton
      />
    </div>
  )
}

export default Modules

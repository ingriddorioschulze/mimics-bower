import React, { useState, useEffect } from 'react'
import Pagination from '@material-ui/lab/Pagination'

export type ModulesObject = {
  name: string
  stars: number
  owner: string
}

const renderModules = (modules: []) => {
  return (
     {modules
      .sort((a, b) => (a.stars < b.stars ? 1 : -1))
        .map((module) => (
          <div key={module.name}>
            <p>{module.name}</p>
            <p>{module.stars}</p>
            {/* add the owner */}
          </div>
        ))}
  )
}

function Modules() {
  const [modules, setModules] = useState<ModulesObject[]>([])
  const [error, setError] = useState('')
  const [itemsPerPage, setItemsPerPage] = useState(5)
  const [page, setPage] = React.useState(1)

  useEffect(() => {
    fetch('https://libraries.io/api/bower-search?q=')
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
  }, [])

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
      {modules
        .slice(0, itemsPerPage ? itemsPerPage : modules.length)
        .sort((a, b) => (a.stars < b.stars ? 1 : -1))
        .map((module) => (
          <div key={module.name}>
            <p>{module.name}</p>
            <p>{module.stars}</p>
            {/* add the owner */}
          </div>
        ))}
      <Pagination
        count={5}
        page={page}
        onChange={handleChange}
        showFirstButton
        showLastButton
      />
    </div>
  )
}

export default Modules

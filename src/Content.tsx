import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import getModules from './utils'

import Input from '@material-ui/core/Input'
import Checkbox from '@material-ui/core/Checkbox'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import Pagination from '@material-ui/lab/Pagination'

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 30px;
`

export interface ModuleData {
  name: string
  stars: number
  owner: string
}

function Content() {
  const [modules, setModules] = useState<ModuleData[]>([])
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [sortByStars, setSortByStars] = useState(false)
  const itemsPerPage = 5

  useEffect(() => {
    setLoading(true)
    setModules([])
    getModules(page, itemsPerPage, search, sortByStars).then((modules) => {
      setModules(modules)
      setLoading(false)
    })
  }, [page, search, sortByStars])

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

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSortByStars(event.target.checked)
  }

  return (
    <ContentWrapper>
      <div className="searchbar-container">
        <Input
          type="search"
          id="search"
          name="search"
          placeholder="Search..."
          value={search}
          onChange={handleSearchChange}
          fullWidth={true}
        ></Input>
        <div className="checkbox-container">
          <Checkbox
            checked={sortByStars}
            onChange={handleCheckboxChange}
            data-testid="input-checkbox"
          />
          <span>Sort by Stars</span>
        </div>
      </div>

      <div className="modules-container">
        <TableContainer>
          <Table aria-label="modules table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Owner</TableCell>
                <TableCell>Stars</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading && (
                <tr>
                  <td>Loading search results</td>
                </tr>
              )}
              {!loading && modules.length === 0 && (
                <tr>
                  <td>No results, please try different query</td>
                </tr>
              )}
              {modules.map((module) => (
                <TableRow key={module.name} data-testid="module-item">
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
    </ContentWrapper>
  )
}

export default Content

import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import getModules, { ModuleData } from './utils'

import Pagination from '@material-ui/lab/Pagination'
import ModuleTable from './ModuleTable'
import Search from './Search'

const ContentWrapper = styled.div`
  display: flex;
  padding: 0 30px;
  flex-direction: column;
`

const StyledPagination = styled(Pagination)`
  display: flex;
  padding: 30px 0;
  align-items: center;
  justify-content: center;
`

const Content: React.FC = (): JSX.Element => {
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

  return (
    <ContentWrapper>
      <Search
        search={search}
        sortByStars={sortByStars}
        setSearch={setSearch}
        setSortByStars={setSortByStars}
      />
      <ModuleTable modules={modules} loading={loading} />
      <StyledPagination
        count={100}
        page={page}
        siblingCount={2}
        onChange={handlePaginationChange}
        showLastButton
      />
    </ContentWrapper>
  )
}

export default Content

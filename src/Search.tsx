import React from 'react'
import styled from 'styled-components'

import Input from '@material-ui/core/Input'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const SearchWrapper = styled.div`
  padding: 25px 0;
`

const StyledInput = styled(Input)`
  border: 0;
  box-shadow: 0 0 1px #ccc;
  font-size: 18px;
  padding: 12px 10px;
  font-weight: 400;
  margin-bottom: 10px;
`

type SearchProperties = {
  search: string
  sortByStars: boolean
  setSearch: (search: string) => unknown
  setSortByStars: (sortByStars: boolean) => unknown
}

function Search(props: SearchProperties) {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setSearch(event.currentTarget.value)
  }

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setSortByStars(event.target.checked)
  }

  return (
    <SearchWrapper>
      <StyledInput
        type="search"
        id="search"
        name="search"
        placeholder="Search..."
        value={props.search}
        onChange={handleSearchChange}
        fullWidth={true}
        disableUnderline={true}
      ></StyledInput>
      <div className="checkbox-container">
        <FormControlLabel
          control={
            <Checkbox
              checked={props.sortByStars}
              onChange={handleCheckboxChange}
              data-testid="input-checkbox"
            />
          }
          label="Sort by Stars"
        />
      </div>
    </SearchWrapper>
  )
}

export default Search

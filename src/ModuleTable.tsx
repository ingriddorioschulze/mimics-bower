import React from 'react'
import styled from 'styled-components'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { ModuleData } from './utils'

const StyledTableContainer = styled(TableContainer)`
  border: 0;
  box-shadow: 0 0 1px #ccc;
`

const StyledTableCellHead = styled(TableCell)`
  .MuiTableCell-head {
    font-size: 16px;
    font-weight: bold;
    color: red;
  }
`
const StyledTableCell = styled(TableCell)`
  padding: 20px;

  .MuiTableCell-root {
    font-size: 34px;
    color: red;
  }
`
type ModuleTableProperties = {
  modules: ModuleData[]
  loading: boolean
}

function ModuleTable(props: ModuleTableProperties) {
  return (
    <StyledTableContainer>
      <Table aria-label="modules table">
        <TableHead>
          <TableRow>
            <StyledTableCellHead>Name</StyledTableCellHead>
            <StyledTableCellHead>Owner</StyledTableCellHead>
            <StyledTableCellHead>Stars</StyledTableCellHead>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.loading && (
            <tr>
              <td>Loading search results</td>
            </tr>
          )}
          {!props.loading && props.modules.length === 0 && (
            <tr>
              <td>No results, please try different query</td>
            </tr>
          )}
          {props.modules.map((module) => (
            <TableRow key={module.name} data-testid="module-item">
              <StyledTableCell>{module.name}</StyledTableCell>
              <StyledTableCell>{module.owner}</StyledTableCell>
              <StyledTableCell>{module.stars}</StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  )
}

export default ModuleTable

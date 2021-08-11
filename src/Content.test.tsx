import React from 'react'
import { render, fireEvent, RenderResult } from '@testing-library/react'
import Content from './Content'

let documentBody: RenderResult

describe('<Content/>', () => {
  beforeEach(() => {
    documentBody = render(<Content />)
  })

  it('should show a loading message while searching for results', async () => {
    expect(documentBody.getByText('Loading search results')).toBeInTheDocument()
  })

  it('should render 5 modules per page', async () => {
    expect(documentBody.getByText('Loading search results')).toBeInTheDocument()
  })

  it('should render module name, owner and stars', async () => {
    expect(documentBody.getByText('bootstrap')).toBeInTheDocument()
    expect(documentBody.getByText('twbs')).toBeInTheDocument()
    expect(documentBody.getByText('152095')).toBeInTheDocument()
  })

  it('should show a message when no search results were found', async () => {
    expect(
      documentBody.getByText('No results, please try different query'),
    ).toBeInTheDocument()
  })

  it('should search for a specific module', async () => {
    const setSearch = jest.fn((value) => {})
    const { queryByPlaceholderText } = render(<Content setSearch={setSearch} />)
    const searchInput = queryByPlaceholderText('Search...')
    fireEvent.change(searchInput, { target: { value: 'bootstrap' } })
    expect(searchInput.value).toBe('bootstrap')
  })

  it('should sort by stars clicking in the checkbox', async () => {
    expect(documentBody.getByTestId('input-checkbox')).toBeChecked()
  })

  it.todo('should show the modules sorted by stars', async () => {
    expect(
      documentBody.getByText('No results, please try different query'),
    ).toBeInTheDocument()
  })
})

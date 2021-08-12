import React from 'react'
import axios from 'axios'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Content from './Content'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const modules = [
  {
    name: 'bootstrap',
    stars: 152095,
    repository_url: 'https://github.com/twbs/bootstrap',
  },
  {
    name: 'Font-Awesome	',
    stars: 65892,
    repository_url: 'https://github.com/FortAwesome/Font-Awesome',
  },
  {
    name: 'vue',
    stars: 185415,
    repository_url: 'https://github.com/vuejs/vue',
  },
  {
    name: 'jQuery',
    stars: 55212,
    repository_url: 'https://github.com/jquery/jQuery',
  },
  {
    name: 'lodash',
    stars: 49949,
    repository_url: 'https://github.com/lodash/lodash',
  },
]

test('should show a loading message while searching for results', async () => {
  mockedAxios.get.mockReturnValue(new Promise(() => {}))
  render(<Content />)
  const loadingMessage = await screen.findByText('Loading search results')
  expect(loadingMessage).toBeInTheDocument()
})

test('should render 5 modules per page', async () => {
  mockedAxios.get.mockResolvedValue({ data: modules })
  render(<Content />)
  const modulesList = await screen.findAllByTestId('module-item')
  expect(modulesList).toHaveLength(5)
})

test('should render module name, owner and stars', async () => {
  mockedAxios.get.mockResolvedValue({ data: modules })
  render(<Content />)
  const moduleName = await screen.findByText('bootstrap')
  expect(moduleName).toBeInTheDocument()
  const moduleOwner = await screen.findByText('twbs')
  expect(moduleOwner).toBeInTheDocument()
  const moduleStars = await screen.findByText('152095')
  expect(moduleStars).toBeInTheDocument()
})

test('should search for a specific module', async () => {
  mockedAxios.get.mockResolvedValue({ data: [] })
  render(<Content />)
  mockedAxios.get.mockResolvedValue({
    data: [
      {
        name: 'jQuery',
        stars: 55212,
        repository_url: 'https://github.com/jquery/jQuery',
      },
    ],
  })
  const searchInput = (await screen.findByPlaceholderText(
    'Search...',
  )) as HTMLInputElement
  fireEvent.change(searchInput, { target: { value: 'jQuery' } })

  expect(searchInput.value).toBe('jQuery')
  const moduleName = await screen.findByText('jQuery')
  expect(moduleName).toBeInTheDocument()
  const moduleOwner = await screen.findByText('jquery')
  expect(moduleOwner).toBeInTheDocument()
  const moduleStars = await screen.findByText('55212')
  expect(moduleStars).toBeInTheDocument()
})

test('should show a message when no search results were found', async () => {
  mockedAxios.get.mockResolvedValue({ data: [] })
  render(<Content />)

  const searchResultsMessage = await screen.findByText(
    'No results, please try different query',
  )
  expect(searchResultsMessage).toBeInTheDocument()
})

test('should sort by stars clicking in the checkbox', async () => {
  mockedAxios.get.mockResolvedValue({ data: modules })
  render(<Content />)
  const checkbox = await screen.findByLabelText('Sort by Stars')
  await waitFor(() => {
    userEvent.click(checkbox)
  })
  expect(checkbox).toBeChecked()

  expect(mockedAxios.get).toHaveBeenCalledWith(
    'https://libraries.io/api/bower-search?page=1&per_page=5&q=&sort=stars',
  )
})

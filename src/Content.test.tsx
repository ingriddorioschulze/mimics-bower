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
    owner: 'twbs',
    stars: 152095,
  },
  {
    name: 'Font-Awesome	',
    owner: 'FortAwesome',
    stars: 65892,
  },
  {
    name: 'vue',
    owner: 'vuejs',
    stars: 185415,
  },
  {
    name: 'jQuery',
    owner: 'jquery',
    stars: 55212,
  },
  {
    name: 'lodash',
    owner: 'lodash',
    stars: 49949,
  },
]

test('should show a loading message while searching for results', async () => {
  render(<Content />)
  const loadingMessage = await waitFor(() =>
    screen.getByText('Loading search results'),
  )
  expect(loadingMessage).toBeInTheDocument()
})

test('should render 5 modules per page', async () => {
  mockedAxios.get.mockResolvedValue({ data: modules })
  render(<Content />)
  const modulesList = await waitFor(() => screen.findAllByTestId('module-item'))
  expect(modulesList).toHaveLength(5)
})

test('should render module name, owner and stars', async () => {
  mockedAxios.get.mockResolvedValue({ data: modules })
  render(<Content />)
  const moduleName = await waitFor(() => screen.findByText('bootstrap'))
  expect(moduleName).toBeInTheDocument()
  const moduleOwner = await waitFor(() => screen.findByText('twbs'))
  expect(moduleOwner).toBeInTheDocument()
  const moduleStars = await waitFor(() => screen.findByText(152095))
  expect(moduleStars).toBeInTheDocument()
})

test('should search for a specific module', async () => {
  mockedAxios.get.mockResolvedValue({ data: [] })
  render(<Content />)
  mockedAxios.get.mockResolvedValue({
    data: [
      {
        name: 'jQuery',
        owner: 'jquery',
        stars: 55212,
      },
    ],
  })
  const searchInput = await waitFor(() =>
    screen.findByPlaceholderText('Search...'),
  )
  fireEvent.change(searchInput, { target: { value: 'jQuery' } })
  expect(searchInput.value).toBe('jQuery')
  const moduleName = await waitFor(() => screen.findByText('jQuery'))
  expect(moduleName).toBeInTheDocument()
  const moduleOwner = await waitFor(() => screen.findByText('jquery'))
  expect(moduleOwner).toBeInTheDocument()
  const moduleStars = await waitFor(() => screen.findByText(55212))
  expect(moduleStars).toBeInTheDocument()
})

test('should show a message when no search results were found', async () => {
  mockedAxios.get.mockResolvedValue({ data: [] })
  render(<Content />)
  mockedAxios.get.mockResolvedValue({
    data: [
      {
        name: 'bootstrap',
        owner: 'twbs',
        stars: 152095,
      },
    ],
  })
  const searchInput = await waitFor(() =>
    screen.findByPlaceholderText('Search...'),
  )
  fireEvent.change(searchInput, { target: { value: 'grajau' } })
  const searchResultsMessage = await screen.findByText(
    'No results, please try different query',
  )
  expect(searchResultsMessage).toBeInTheDocument()
})

// test('should sort by stars clicking in the checkbox', async () => {
//   mockedAxios.get.mockResolvedValue({ data: modules })
//   render(<Content />)
//   const checkbox = screen.getByTestId('input-checkbox')
//   userEvent.click(checkbox)
//   expect(mockedAxios.get).toHaveBeenCalledWith(
//     'https://libraries.io/api/bower-search?',
//   )
// })

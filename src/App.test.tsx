import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('should render the menu component', () => {
  render(<App />)
  const menuElement = screen.getByText('Home')
  expect(menuElement).toBeInTheDocument()
})

test('should render the search bars', () => {
  render(<App />)
  const searchElement = screen.getByPlaceholderText('Search...')
  expect(searchElement).toBeInTheDocument()
})

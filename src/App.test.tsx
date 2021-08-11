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

// test('should render the checkbox text', () => {
//   const checkboxElement = screen.getByText('Sort by Stars')
//   expect(checkboxElement).toBeInTheDocument()
// })

//renders the modules after loading
//search brings the correct result
//sort by starts brings the correct results
//show owner name is correct

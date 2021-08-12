import React from 'react'
import styled from 'styled-components'

import Sidebar from './Sidebar'
import Content from './Content'
import Header from './Header'

const AppWrapper = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  .container {
    display: grid;
    grid-template-columns: 250px auto;
    grid-auto-flow: column;
    column-gap: 1rem;
    row-gap: 10px;
  }
`

function App() {
  return (
    <AppWrapper>
      <Header />
      <div className="container">
        <Sidebar />
        <Content />
      </div>
      <footer>
        <p>footer</p>
      </footer>
    </AppWrapper>
  )
}

export default App

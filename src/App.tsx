import React from 'react'
import styled from 'styled-components'

import Sidebar from './Sidebar'
import Content from './Content'
import Header from './Header'
import Footer from './Footer'

const AppWrapper = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`

const AppContainer = styled.div`
  row-gap: 10px;
  display: grid;
  grid-row: start;
  column-gap: 1rem;
  grid-auto-flow: column;
  height: calc(100vh - 200px);
  grid-template-columns: 200px auto;

  @media screen and (max-width: 600px) {
    column-gap: 0;
    display: grid;
    grid-column: start;
    justify-self: center;
    grid-template-columns: auto;
  }
`

const App: React.FC = (): JSX.Element => {
  return (
    <AppWrapper>
      <Header />
      <AppContainer>
        <Sidebar />
        <Content />
      </AppContainer>
      <Footer />
    </AppWrapper>
  )
}

export default App

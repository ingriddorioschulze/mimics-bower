import React from 'react'
import './App.css'
import Menu from './Menu'
import Content from './Content'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>mimics bower</h1>
      </header>

      <div className="container">
        <div className="menu">
          <Menu />
        </div>
        <div className="content">
          <Content />
        </div>
      </div>

      <footer>
        <p>footer</p>
      </footer>
    </div>
  )
}

export default App

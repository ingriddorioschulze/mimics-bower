import React from 'react'
import './App.css'
import Sidebar from './Sidebar'
import Content from './Content'
import Header from './Header'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="menu">
          <Sidebar />
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

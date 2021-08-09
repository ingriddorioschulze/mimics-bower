import React from 'react'
import './App.css'
import Modules from './Modules'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>mimics bower</h1>
      </header>

      <div className="container">
        <div className="leftmenu">left menu</div>
        <div className="content">
          <Modules />
        </div>
      </div>

      <footer>
        <p>footer</p>
      </footer>
    </div>
  )
}

export default App

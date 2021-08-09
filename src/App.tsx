import React from 'react';
import './App.css';
import Modules from './Modules';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>mimics bower</h1>
        <div>
          <label>Search</label>
          <input type="search" id="search" name="search"></input>
        </div>
      </header>

      <div className="container">
        <div className="leftmenu">left menu</div>
        <div className="content">
          <Modules/>
        </div>
      </div>

      <footer>
        <p>made by me</p>
      </footer>

    </div>
  );
}

export default App;

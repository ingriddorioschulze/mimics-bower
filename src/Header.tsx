import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 20px;
  }

  .nav-link {
    padding: 10px;
    text-decoration: none;
    font-weight: bold;
    font-size: 16px;
  }

  @media screen and (max-width: 600px) {
    .navbar {
      display: flex;
      flex-direction: column;
      text-align: center;
    }
  }
`

function Header() {
  return (
    <HeaderContainer>
      <header className="header">
        <nav className="navbar">
          <h1>Mimics Bower</h1>
          <div className="links">
            <a className="nav-link" href="/">
              Docs
            </a>
            <a className="nav-link" href="/">
              Search packages
            </a>
            <a className="nav-link" href="/">
              Blog
            </a>
            <a className="nav-link" href="/">
              Stats
            </a>
          </div>
        </nav>
      </header>
    </HeaderContainer>
  )
}

export default Header

import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  display: flex;
  height: 130px;
  align-items: center;
  background-color: #ffcc2f;
  justify-content: space-between;

  .navbar {
    padding: 20px;
    text-align: center;
  }

  .header-title {
    margin: 0;
    font-size: 64px;
    color: #543729;
    font-weight: bold;
    padding-left: 15px;
    font-family: Roboto, sans-serif;
  }

  .nav-link {
    padding: 10px;
    font-size: 16px;
    color: #2baf2b;
    font-weight: bold;
    text-decoration: none;
    font-family: Roboto, sans-serif;
  }
  .nav-link-blue {
    color: #00acee;
  }

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .header-title {
      font-size: 32px;
    }
  }
`

const Header: React.FC = (): JSX.Element => {
  return (
    <HeaderContainer>
      <h1 className="header-title">Mimics Bower</h1>
      <nav className="navbar">
        <div className="links">
          <a className="nav-link nav-link-blue" href="/">
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
    </HeaderContainer>
  )
}

export default Header

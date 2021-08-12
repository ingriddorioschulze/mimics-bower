import React from 'react'
import styled from 'styled-components'

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;

  ul {
    list-style-type: none;
    margin: 0;
    padding-left: 15px;
  }

  .sidebar-item {
    padding: 5px;
  }

  .sidebar-link {
    font-size: 18px;
    font-weight: bold;
    text-decoration: none;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`

function Sidebar() {
  return (
    <MenuContainer>
      <ul>
        <li className="sidebar-item">
          <a className="sidebar-link" href="/">
            Home
          </a>
        </li>
        <li className="sidebar-item">
          <a className="sidebar-link" href="/">
            Install Bower
          </a>
        </li>
        <li className="sidebar-item">
          <a className="sidebar-link" href="/">
            Getting started
          </a>
        </li>
        <li className="sidebar-item">
          <a className="sidebar-link" href="/">
            @bower
          </a>
        </li>
        <li className="sidebar-item">
          <a className="sidebar-link" href="/">
            Creating Packages
          </a>
        </li>
        <li className="sidebar-item">
          <a className="sidebar-link" href="/">
            API
          </a>
        </li>
        <li className="sidebar-item">
          <a className="sidebar-link" href="/">
            Configuration
          </a>
        </li>
        <li className="sidebar-item">
          <a className="sidebar-link" href="/">
            Pluggable Resolvers
          </a>
        </li>
        <li className="sidebar-item">
          <a className="sidebar-link" href="/">
            Tools
          </a>
        </li>
        <li className="sidebar-item">
          <a className="sidebar-link" href="/">
            About
          </a>
        </li>
      </ul>
    </MenuContainer>
  )
}

export default Sidebar

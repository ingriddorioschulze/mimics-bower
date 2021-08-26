import React from 'react'
import styled from 'styled-components'

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;

  ul {
    margin: 0;
    padding-top: 20px;
    padding-left: 15px;
    list-style-type: none;
  }

  .sidebar-item {
    display: flex;
    flex-direction: column;
  }

  .sidebar-link {
    padding: 5px;
    font-size: 18px;
    color: #00acee;
    font-weight: bold;
    text-decoration: none;
    font-family: Roboto, sans-serif;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`

const sidebarLinks = [
  'Home',
  'Install Bower',
  'Getting started',
  '@bower',
  'Creating Packages',
  'API',
  'Configuration',
  'Pluggable Resolvers',
  'Tools',
  'About',
]

const Sidebar: React.FC = (): JSX.Element => {
  return (
    <MenuContainer>
      <ul>
        <li className="sidebar-item">
          {sidebarLinks.map((sidebarLink, index) => (
            <a className="sidebar-link" key={index} href="/">
              {sidebarLink}
            </a>
          ))}
        </li>
      </ul>
    </MenuContainer>
  )
}

export default Sidebar

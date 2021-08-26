import React from 'react'
import styled from 'styled-components'

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const SidebarList = styled.ul`
  margin: 0;
  padding-top: 20px;
  padding-left: 15px;
  list-style-type: none;
`

const SidebarItem = styled.li`
  display: flex;
  flex-direction: column;
`

const SidebarLink = styled.a`
  padding: 5px;
  font-size: 18px;
  color: #00acee;
  font-weight: bold;
  text-decoration: none;
  font-family: Roboto, sans-serif;

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
      <SidebarList>
        <SidebarItem>
          {sidebarLinks.map((sidebarLink, index) => (
            <SidebarLink key={index} href="/">
              {sidebarLink}
            </SidebarLink>
          ))}
        </SidebarItem>
      </SidebarList>
    </MenuContainer>
  )
}

export default Sidebar

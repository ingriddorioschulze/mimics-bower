import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  display: flex;
  height: 130px;
  align-items: center;
  background-color: #ffcc2f;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`
const Navbar = styled.nav`
  padding: 20px;
  text-align: center;
`

const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 64px;
  color: #543729;
  font-weight: bold;
  padding-left: 15px;
  font-family: Roboto, sans-serif;

  @media screen and (max-width: 800px) {
    font-size: 32px;
  }
`

const NavLink = styled.a`
  padding: 10px;
  font-size: 16px;
  color: #2baf2b;
  font-weight: bold;
  text-decoration: none;
  font-family: Roboto, sans-serif;
  &:first-child {
    color: #00acee;
  }
`

const headerLinks = ['Docs', 'Search packages', 'Blog', 'Stats']

const Header: React.FC = (): JSX.Element => {
  return (
    <HeaderContainer>
      <HeaderTitle>Mimics Bower</HeaderTitle>
      <Navbar>
        {headerLinks.map((headerLinks, index) => (
          <NavLink key={index} href="/">
            {headerLinks}
          </NavLink>
        ))}
      </Navbar>
    </HeaderContainer>
  )
}

export default Header

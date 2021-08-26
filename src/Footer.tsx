import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2188b6;
`

const FooterText = styled.h1`
  color: white;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  font-family: Roboto, sans-serif;
`

const Footer: React.FC = (): JSX.Element => {
  return (
    <FooterWrapper>
      <FooterText>Mimics Bower</FooterText>
    </FooterWrapper>
  )
}

export default Footer

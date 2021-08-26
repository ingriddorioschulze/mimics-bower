import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2188b6;

  .footer-text {
    color: white;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    font-family: Roboto, sans-serif;
  }
`

const Footer: React.FC = (): JSX.Element => {
  return (
    <FooterWrapper>
      <h1 className="footer-text">Mimics Bower</h1>
    </FooterWrapper>
  )
}

export default Footer

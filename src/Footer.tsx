import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  left: 0;
  bottom: 0;
  width: 100%;
  position: fixed;
  background-color: #2188b6;

  .footer-text {
    color: white;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    font-family: Roboto, sans-serif;
  }
`

function Footer() {
  return (
    <FooterWrapper>
      <h1 className="footer-text">Mimics Bower</h1>
    </FooterWrapper>
  )
}

export default Footer

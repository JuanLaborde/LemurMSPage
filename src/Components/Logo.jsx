import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LogoText from '../assets/Images/logoText.png';

const Container = styled.div`
  position: absolute;
  top: 4rem;
  left: 1rem;

  width: 100%;
  color: white;
  z-index:5;
  img {
    width: 20%;
  }
  @media (max-width: 64em) {
  img {
    display: none;
  }
}
`
const Logo = () => {
  return (
    <Container data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
      <Link to="/">
        <img src={LogoText} alt="logo" />
      </Link>
    </Container>
  )
}

export default Logo
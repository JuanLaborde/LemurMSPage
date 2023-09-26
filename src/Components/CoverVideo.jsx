import React from 'react'
import styled from 'styled-components'
import MainGif from '../assets/lemur-animado.gif';
import { motion } from 'framer-motion';

const ImageContainer = styled.section`
width: 100%;
height: 100vh;
position: relative;
background: url(${MainGif}) no-repeat center center;
background-size: fit;
background-color: black;
@media (max-width: 48em) {
      object-position: center 10%;
    }
    @media (max-width: 30em) {
      object-position: center 50%;
    }
`;

const Title = styled(motion.div)`
position: absolute;
top: 500px;
bottom: 0;
left: 0;
right: 0;
z-index: 5;

display: flex;
justify-content: center;
align-items: center;
color: ${props => props.theme.text};

div {
    display: flex;
    flex-direction: row;
}
h1 {
    font-family: "Kaushan Script";
    font-size: ${(props) => props.theme.fontxxxl};

    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    margin-right: 10px;
  }
  @media (max-width: 64em) {
  h1 {
    font-size: calc(2rem + 4vw);
  }
}

`;

const container = {
  hidden : {
    opacity:0,
  },
  show : {
    opacity: 1,

    transition : {
        delayChildren: 0.5,
        staggerChildren: 0.3,
    }
  },

}

const item = {
  hidden : {
    opacity:0,
  },
  show : {
    opacity: 1,
  },

}

const CoverImage = () => {
  return (
    <ImageContainer>
        <Title variants = {container} initial="hidden" animate="show">
            <div>
                <motion.h1 variants = {item} animate="show" data-scroll data-scroll-delay= "0.23" data-scroll-speed="4">We</motion.h1>
                <motion.h1 variants = {item} data-scroll data-scroll-delay= "0.13" data-scroll-speed="4">Design</motion.h1>
                <motion.h1 variants = {item} data-scroll data-scroll-delay= "0.9" data-scroll-speed="4">your</motion.h1>
                <motion.h1 variants = {item} data-scroll data-scroll-delay= "0.3" data-scroll-speed="4">wish</motion.h1>
            </div>
        </Title>        
    </ImageContainer>
  )
}

export default CoverImage
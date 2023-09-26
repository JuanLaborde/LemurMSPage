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
    padding: 80px 0 0 0;

    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    margin-right: 10px;
  }
  @media (max-width: 64em) {
  h1 {
    font-size: calc(1rem + 2vw);
  }
}

`;


const CoverImage = () => {
  return (
    <ImageContainer>
        <Title>
            <div>
                <motion.h1 >We</motion.h1>
                <motion.h1>Design</motion.h1>
                <motion.h1>your</motion.h1>
                <motion.h1>wish</motion.h1>
            </div>
        </Title>        
    </ImageContainer>
  )
}

export default CoverImage
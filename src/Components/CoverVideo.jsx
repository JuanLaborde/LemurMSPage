import React from 'react'
import styled from 'styled-components'
import MainGif from '../assets/lemur-animado.gif';
import NeonText from './Neontext';

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

const Title = styled.div`
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
    font-size: ${(props) => props.theme.fontxl};
    padding: 80px 0 0 0;


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
                <h1><NeonText type="neon-slogan neon-wrapper" text="We Design your wish" data="We Design your wish" /></h1>
            </div>
        </Title>        
    </ImageContainer>
  )
}

export default CoverImage
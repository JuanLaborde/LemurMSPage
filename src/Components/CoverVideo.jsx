import React from 'react'
import styled from 'styled-components'
import MainGif from '../assets/Images/Lemur-1.png';
import ladrillos from '../assets/Images/ladrillos.jpg'

const ImageContainer = styled.section`
width: 100%;
height: 100vh;
position: relative;
background-image: url(${ladrillos});
@media (max-width: 48em) {
      object-position: center 10%;
    }
    @media (max-width: 30em) {
      object-position: center 50%;
    }
`;

const Title = styled.div`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
z-index: 5;

display: flex;
justify-content: center;
align-items: center;
color: ${props => props.theme.text};

h1 {
    font-size: ${(props) => props.theme.fontxl};
    
    margin-right: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
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
                <img src={MainGif} alt="lemur logo"></img>
            </div>
        </Title>        
    </ImageContainer>
  )
}

export default CoverImage
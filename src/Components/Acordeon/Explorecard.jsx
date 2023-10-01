import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn } from './Motion';

const CardContainer = styled(motion.section)`
  min-width: 170px;
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: flex 0.7s ease-out;
  overflow: hidden;
  &.active {
    flex: 10;
  }

  &.inactive {
    flex: 2;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 24px;
  object-fit: cover;
`;

const TextContainer = styled.div`
  position: absolute;
  bottom: 0;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 0 0 24px 24px;
  p {
    font-weight: normal;
    font-size: 16px;
    line-height: 1.26;
    color: #fff;
    text-transform: uppercase;
  }
`;


const Title = styled.h3`
  font-weight: bold;
  position: absolute;
  font-size: 30px;
  color: white;
  position: absolute;
  z-index: 0;
  ${(props) =>
        props.active
            ? 'display: none;'
            : 'display: block; transform: rotate(-90deg); transform-origin: 0 0; margin-top: 35%; margin-left: 5%;'}
`;

const Below = styled.h2`
font-weight: bold;
font-size: 24px;
color: white;
margin-bottom: 20px;
z-index: 0;
${(props) =>
        props.active
            ? 'display: block; margin-bottom: 60px;'
            : 'display: none;'}
`;

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
    <CardContainer variants={fadeIn('right', 'spring', index * 0.5, 0.75)} className={active === id ? 'active' : 'inactive'} onClick={() => handleClick(id)} >
        <Image src={imgUrl} alt="planet-04" />
        {active !== id ? (
            <Title>{title}</Title>
        ) : (
            <TextContainer>
                <p>
                    Enter Metaverse
                </p>
                <Below  >{title}</Below>
            </TextContainer>
        )}
    </CardContainer>
);

export default ExploreCard;

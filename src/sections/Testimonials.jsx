import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ExploreCard from '../Components/Acordeon/Explorecard';
import ExploreWorlds from '../Components/Acordeon/index';
import { staggerContainer } from '../Components/Acordeon/Motion';
import ladrillos from '../assets/Images/ladrillos.jpg'
import NeonText from '../Components/Neontext';


const ExploreSection = styled.section`
  padding: 1rem;
  background-image: url(${ladrillos});
  overflow: hidden;
`;

const InnerWrapper = styled(motion.div)`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const CardContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontfs};
  /* text-transform: capitalize; */

  position: relative;
  top: 1rem;
  left: -30%;
  z-index: 5;

  span {
    display: inline-block;
  }

  @media (max-width: 64em) {
    font-size: ${(props) => `calc(${props.theme.fontBig} - 5vw)`};
    top: 0;
    left: 0%;
    color: white;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxxxl};
  }
`;

const Testimonials = () => {
  const [active, setActive] = useState('world-2');

  return (
    <ExploreSection id='explore' className='Testimonial'>
      <Title data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
        <NeonText type="neon-titles neon-wrapper" text="Testimonials" data="Testimonials" />
      </Title>
      <InnerWrapper
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
      >
        <CardContainer>
          {ExploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </CardContainer>
      </InnerWrapper>
    </ExploreSection>
  );
};

export default Testimonials;
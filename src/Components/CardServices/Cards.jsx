import React from "react";
import { Tilt } from "react-tilt";
import { services } from './index';
import SectionWrapper from './sectionWrapper';
import { fadeIn } from "../Acordeon/Motion";
import styled from "styled-components";
import { motion } from "framer-motion";

const ServiceCardWrapper = styled.div`
  width: 100%;
  background: linear-gradient(90deg, #A738D6, #00E7FF);
  padding: 2px;
  border-radius: 20px;
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.02);
    transition: transform 0.3s ease;
  }
`;

const ServiceCardContent = styled.div`
  background-color: #2a394f;
  border-radius: 20px;
  padding: 20px 40px;
  min-height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ServiceIcon = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-bottom: 20px;
`;

const ServiceTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: white;
  text-align: center;
`;


const ServiceCard = ({ index, title, icon }) => (
  <Tilt>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    >
      <ServiceCardWrapper>
        <ServiceCardContent>
          <ServiceIcon src={icon} alt='web-development' />
          <ServiceTitle>{title}</ServiceTitle>
        </ServiceCardContent>
      </ServiceCardWrapper>
    </motion.div>
  </Tilt>
);

const ServiceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin-top: 20px;
`;

const Cards = () => {
  return (
    <>
      <ServiceContainer>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </ServiceContainer>
    </>
  );
};

export default SectionWrapper(Cards, "cards");
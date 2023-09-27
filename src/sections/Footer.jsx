import { motion } from "framer-motion";
import React from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import styled from "styled-components";

import logo from '../assets/Images/lemur.png';
import logoText from '../assets/Images/logoText.png';
import ladrillos from '../assets/Images/ladrillos.jpg'

import NeonText from '../Components/Neontext';

const Section = styled.section`
  min-height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  background-image: url(${ladrillos});
  color: ${(props) => props.theme.text};
  
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 20vw;
    height: auto;
  }

`;

const FooterComponent = styled(motion.footer)`
  width: 80vw;

  @media (max-width: 48em) {
    width: 90vw;
  }
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem;
    margin-top: 4rem;
    padding: 0 1rem;
    border-top: 1px solid ${(props) => props.theme.text};
    border-bottom: 1px solid ${(props) => props.theme.text};

    @media (max-width: 48em) {
      justify-content: center;
    }
  }

  li {
    padding: 2rem;
    font-size: ${(props) => props.theme.fontlg};
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      transform: scale(1.1);
    }

    @media (max-width: 48em) {
      padding: 1rem;
      font-size: ${(props) => props.theme.fontmd};
    }
  }
`;

const Bottom = styled.div`
  padding: 0.5rem 0;
  margin: 0 4rem;
  font-size: ${(props) => props.theme.fontlg};

  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: underline;
  }

  @media (max-width: 64em) {
    flex-direction: column;
    justify-content: center;
    span {
      transform: none !important;
    }
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const Footer = () => {
  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {
    let elem = document.querySelector(id);
    // console.log(elem);
    scroll.scrollTo(elem, {
      offset: "-100",
      duration: "2000",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  return (
    <Section>
      <LogoContainer>
        <img width="300" height="300" src={logo} alt="Lemur Logo" data-scroll data-scroll-speed="2" /> 
        <img src={logoText} alt="Logo text" data-scroll data-scroll-speed="-1" />
      </LogoContainer>
      <FooterComponent
        initial={{ y: "-400px" }}
        whileInView={{ y: 0 }}
        viewport={{ once: false }}
        transition={{
          duration: 1.5,
        }}
      >
        <ul>
          <li aria-hidden="true" onClick={() => handleScroll(".Home")}>
          <NeonText type="neon-text" text="home" data="home" />
          </li>
          <li aria-hidden="true" onClick={() => handleScroll(".About")}>
          <NeonText type="neon-text" text="about" data="about" />
          </li>
          <li aria-hidden="true" onClick={() => handleScroll(".Services")}>
          <NeonText type="neon-text" text="services" data="services" />
          </li>
          <li aria-hidden="true" onClick={() => handleScroll(".Testimonial")}>
          <NeonText type="neon-text" text="testimonials" data="testimonials" />
          </li>
          <li>
            <a href="/portfolio" target={"_blank"} rel="noreferrer">
            <NeonText type="neon-text" text="contact" data="contact" />
            </a>
          </li>
          <li>
            <a href="/portfolio" target={"_blank"} rel="noreferrer">
            <NeonText type="neon-text" text="portfolio" data="portfolio" />
            </a>
          </li>
        </ul>
        <Bottom>
          <span
            data-scroll
            data-scroll-speed="2"
            data-scroll-direction="horizontal"
          >
            &copy; 2023. All Rights Reserved.
          </span>
          <span
            data-scroll
            data-scroll-speed="-2"
            data-scroll-direction="horizontal"
          >
            Site design / logo Lemur Media Studio
          </span>
        </Bottom>
      </FooterComponent>
    </Section>
  );
};

export default Footer;
import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion';
import NeonText from './Neontext';
import ladrillos from '../assets/Images/ladrillos.jpg'
import { useLocomotiveScroll } from "react-locomotive-scroll";

const NavContainer = styled(motion.div)`
width: 100vw;
z-index: 6;
position: absolute;
top: ${props => props.click ? '0' : `-${props.theme.navHeight}`};

display: flex;
justify-content: center;
align-items: center;

transition: all 0.3s ease;
@media (max-width: 40em) {
    top: ${(props) => (props.click ? '0' : `calc(-50vh - 4rem)`)};

  }
`;
const MenuItems = styled(motion.ul)`
position: relative;
height: ${props => props.theme.navHeight};
background-image: url(${ladrillos});

list-style: none;
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;
padding: 0 10rem;
@media (max-width: 40em) {
    flex-direction:column;
    padding:2rem 0;
    height: 50vh;
  }
`

const MenuBtn = styled.li`
background-color: ${props => `rgba(${props.theme.textRgba}, 0.4)`};
list-style-type: style none;
color:#ff9d00;
width: 15rem;
height: 2.5rem;
clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
position: absolute;
top: 100%;
left: 50%;
transform: translateX(-50%);
display: flex;
justify-content: center;
align-items: center;
font-size: ${props => props.theme.fontmd};
font-weight: 600;
text-transform: uppercase;
cursor: pointer;
@media (max-width: 40em) {
    width: 10rem;
    height: 2rem;

  }
`

const MenuItem = styled(motion.li)`
color:${props => props.theme.text};
@media (max-width: 40em) {
    flex-direction:column;
    padding:0.5rem 0;

  }
`

const NavBar = () => {
    const [click, setClick] = useState(false);
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
        <NavContainer click={click}
            initial={{
                y: '-100%'
            }}
            animate={{
                y: 0
            }}
            transition={{
                duration: 1, delay: 0.5,
            }}
        >
            <MenuItems
                drag="y"
                dragConstraints={{
                    top: 0,
                    bottom: 70,

                }}
                dragElastic={0.05}
                dragSnapToOrigin
            >
                <MenuBtn onClick={() => setClick(!click)}>Menu</MenuBtn>
                <MenuItem whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.9, y: 0 }} aria-hidden="true" onClick={() => handleScroll(".Home")}><NeonText type="neon-text neon-wrapper" text="home" data="home" /></MenuItem>
                <MenuItem whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.9, y: 0 }} aria-hidden="true" onClick={() => handleScroll(".About")}><NeonText type="neon-text neon-wrapper" text="about us" data="about us" /></MenuItem>
                <MenuItem whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.9, y: 0 }} aria-hidden="true" onClick={() => handleScroll(".Services")}><NeonText type="neon-text neon-wrapper" text="services" data="services" /></MenuItem>
                <MenuItem whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.9, y: 0 }} aria-hidden="true" onClick={() => handleScroll(".Testimonial")}><NeonText type="neon-text neon-wrapper" text="testimonials" data="testimonials" /></MenuItem>
            </MenuItems>
        </NavContainer>
    )
}

export default NavBar
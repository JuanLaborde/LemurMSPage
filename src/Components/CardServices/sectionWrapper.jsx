import { motion } from "framer-motion";
import { staggerContainer } from '../Acordeon/Motion';
import styled from "styled-components";

const Wrapper = styled(motion.section)`
  ${props => props.theme.padding};
  max-width: 7xl;
  margin: 0 auto;
  position: relative;
  z-index: 0;
`;

const SectionWrapper = (Component, idName) => {
    return () => (
        <Wrapper
            variants={staggerContainer()}
            initial='hidden'
            animate='show'
            exit='hidden'
            transition={{ once: true, duration: 0.25 }}
        >            
            <Component />
        </Wrapper>
    );
};

export default SectionWrapper;
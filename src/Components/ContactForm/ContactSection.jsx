import React from 'react';
import styled from 'styled-components';
import ContactForm from './ContactForm';
import ladrillos from '../../assets/Images/ladrillos.jpg'
import Lemurgif from '../../assets/lemur-animado.gif'
import NeonText from '../Neontext';


const ContactSectionStyle = styled.div`
  padding: 1rem 0;
  background-image: url(${ladrillos});
  .container {
    justify-content: center;
    align-items: center;
  }
  .contactSection__wrapper {
    display: flex;
    gap: 1rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    background-color: #ff9d00;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
    margin-left: 20%;
    h1 {
        font-size: 80px;
    }
  }
  .right {
    max-width: 500px;
    width: 100%;
    border-radius: 12px;
    margin-right: 20%;
    /* padding-left: 3rem; */
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;


export default function ContactSection() {
    return (
        <ContactSectionStyle className='Contact'>
            <div className="container">
                <div className="contactSection__wrapper">
                    <div className="left">
                        <NeonText type="neon-titles neon-wrapper" text="Contact us" data="Contact us" />
                        <img src={Lemurgif} alt="lemur logo" />
                    </div>
                    <div className="right">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </ContactSectionStyle>
    );
}
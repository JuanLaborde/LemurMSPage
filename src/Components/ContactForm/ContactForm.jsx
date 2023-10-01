import React, { useState } from 'react';
import styled from 'styled-components';
import NeonButton from '../NeonButton';

const FormStyle = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
    div {
        margin-top: -50px;
    }
  }
  label {
    font-size: 1.5rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 1rem;
    padding: 1.2rem;
    color: white;
    background-color: transparent;
    outline: none;
    border: 2px solid transparent; /* Set the border to transparent */
    border-image: linear-gradient(90deg, #ff9d00, #ffff94); /* Use border-image for the gradient */
    border-image-slice: 1; 
    border-radius: 15px;
    margin-top: 1rem;
  }
  label{
    color: white;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type='submit'] {
    cursor: pointer;
  }
`;

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    return (
        <>
            <FormStyle>
                <div className="form-group">
                    <label htmlFor="name">
                        Your Name
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="email">
                        Your Email
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="message">
                        Your message
                        <textarea
                            type="text"
                            id="message"
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </label>
                    <div>
                        <NeonButton type="flash" text="Send" />
                    </div>
                </div>

            </FormStyle>
        </>
    );
}
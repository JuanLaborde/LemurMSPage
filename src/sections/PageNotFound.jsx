import React from 'react'
import styled from 'styled-components'
import NeonText from '../Components/Neontext'
import ladrillos from '../assets/Images/ladrillos.jpg'

const Section = styled.section `
width: 100%;
height: 100vh;
position: absolute;
background-image: url(${ladrillos});

`

const PageNotFound = () => {
    return (
        <Section>
            <NeonText type="neon-titles neon-wrapper" text="404 - Page Not Found" data="404 - Page Not Found" />
        </Section>
    )
}

export default PageNotFound
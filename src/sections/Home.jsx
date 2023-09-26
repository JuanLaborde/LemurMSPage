import React, { Suspense } from 'react'
import styled from 'styled-components'

const CoverImage = React.lazy(() => import('../Components/CoverVideo'));
const NavBar = React.lazy(() => import('../Components/NavBar'));
const Logo = React.lazy(() => import('../Components/Logo'));



const Section = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`

function Home() {
  return (
    <Section id='Home'>
      <Suspense fallback={<></>}>
        <Logo />
        <NavBar />
        <CoverImage />
      </Suspense>
    </Section>
  )
}

export default Home
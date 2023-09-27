import { createGlobalStyle } from "styled-components";
import "@fontsource/kaushan-script";


const GlobalStyles = createGlobalStyle`
@import url('https://fonts.cdnfonts.com/css/itc-benguiat-std');
*,*::before,*::after{
    margin: 0;
    padding: 0; 
}

body {
    font-family: 'ITC Benguiat Std', sans-serif;
    overflow-x: hidden; 
    background-color: black;
}

h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;     
}

a {
    color: inherit;
    text-decoration: none;
}
`

export default GlobalStyles;
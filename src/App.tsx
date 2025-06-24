import React from "react";

import './assets/global.css'
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Home } from './pages/Home';
import { Theme } from "./features/utils/GlogalInterfaces";

const theme: Theme = {
    colors: {
        blue: '#1DA1F2',
        black: '#14171a',
        darkGray: '#657786',
        gray: '#AAB8C2',
        lightGray: '#AAB8C8',
        white: '#F5F8FA',
        error: 'red'

    }
}

const GlobalStyle = createGlobalStyle`
*{
font-family: 'IBM PLEX Sans', sans-serif;
font-weight: 500;
}
`


export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Home />

        </ThemeProvider>

    )
}
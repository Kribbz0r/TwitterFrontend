import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './assets/global.css'
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Landing } from './pages/Landing';
import { Theme } from "./features/utils/GlogalInterfaces";
import { Feed } from "./pages/Feed";

const theme: Theme = {
    colors: {
        blue: '#1DA1F2',
        black: '#14171a',
        darkGray: '#657786',
        gray: '#8a8b8b',
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
            <Router>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/home" element={<Feed />} />

                </Routes>
            </Router>

        </ThemeProvider>

    )
}
import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from './components/pages/Home'
import Characters from "./components/pages/Characters";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import { GlobalStyles } from "./components/styles/Global.styled";
import { ThemeProvider } from "styled-components";
import { test, starwars} from "./components/styles/Theme";
import { Container } from "./components/styles/App.styled"
import Character from "./components/pages/Character";
import Main from './components/Main'
import Planets from "./components/pages/Planets";
import Planet from "./components/pages/Planet";

export default function App() {
    return (
        <ThemeProvider theme={starwars}>
            <Router>
                <GlobalStyles />
                <Container>
                    <Header />
                    <Main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/characters" element={<Characters />} />
                            <Route path="/character/:id" element={<Character />} />
                            <Route path="/planets" element={<Planets />} />
                            <Route path="/planet/:id" element={<Planet />} />
                        </Routes>
                    </Main>
                    <Footer />
                </Container>
            </Router>
        </ThemeProvider>
    );
}
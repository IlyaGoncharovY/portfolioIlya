import React from 'react';
import styled from "styled-components";

import {Works} from "./components/works/Works";
import {Header} from "./components/header/Header";
import {AboutMe} from "./components/abutMe/AboutMe";
import {Contact} from "./components/contact/Contact";

import dgImage from "./assects/img/dg.jpeg";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url(${dgImage});

  &::-webkit-scrollbar {
    display: none;
  }
`

function App() {
    return (
        <Container>
            <Header/>
            <AboutMe/>
            <Works/>
            <Contact/>
        </Container>
    );
}

export default App;

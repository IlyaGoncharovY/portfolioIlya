import React from 'react';

import {Works} from "./works/Works";
import {Header} from "./header/Header";
import {AboutMe} from "./abutMe/AboutMe";
import {Contact} from "./contact/Contact";

import {Container} from "./AppStyle";

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

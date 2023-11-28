import React, {lazy, Suspense} from 'react';

import {Container} from "./AppStyle";

const Header = lazy(() => import('./header/Header'));
const AboutMe = lazy(() => import('./abutMe/AboutMe'));
const Works = lazy(() => import('./works/Works'));
const Contact = lazy(() => import('./contact/Contact'));

function App() {
    return (
        <Container>
            <Suspense fallback={<div>Loading...</div>}>
                <Header/>
                <AboutMe/>
                <Works/>
                <Contact/>
            </Suspense>
        </Container>
    );
}

export default App;

import React, {lazy, Suspense, useState} from 'react';

import {Container} from './AppStyle';

const Header = lazy(() => import('./header/Header'));
const AboutMe = lazy(() => import('./abutMe/AboutMe'));
const Works = lazy(() => import('./works/Works'));
const Contact = lazy(() => import('./contact/Contact'));

function App() {

  const [searchMode, setSearchMode] = useState<boolean>(false);

  return (
    <Container searchMode={searchMode}>
      <Suspense fallback={<div style={{height: '100vh'}}>Loading...</div>}>
        <Header searchMode={searchMode} setSearchMode={setSearchMode}/>
        <AboutMe/>
        <Works/>
        <Contact/>
      </Suspense>
    </Container>
  );
}

export default App;

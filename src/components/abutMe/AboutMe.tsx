import React from 'react';
import {Canvas} from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';

import lineImg from '../../assects/img/line.png';
import {Cube} from '../../assects/components/Cube';
import {UniversalButton} from '../../assects/components/UniversalButton';

import {Container, Desc, Left, Line, Right, Section, SubTitle, Title, WhatWeDo} from './AdoutMeStyle';

const AboutMe = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Canvas camera={{fov: 25, position: [5, 5, 5]}}>
            <OrbitControls enableZoom={false} autoRotate/>
            <ambientLight intensity={1}/>
            <directionalLight position={[3, 2, 1]}/>
            <Cube/>
          </Canvas>
        </Left>
        <Right>
          <Title>About Me</Title>
          <WhatWeDo>
            <Line src={`${lineImg}`}/>
            <SubTitle>My name is Ilya.</SubTitle>
          </WhatWeDo>
          <Desc>
                        I am well versed in the language,
                        every day I develop my own projects
                        or study new language features.
          </Desc>
          <UniversalButton title={'Sea are works'}/>
        </Right>
      </Container>
    </Section>
  );
};

export default AboutMe;

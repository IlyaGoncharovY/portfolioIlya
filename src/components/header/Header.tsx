import React from 'react';
import {MeshDistortMaterial, OrbitControls, Sphere} from '@react-three/drei';

import {Canvas} from '@react-three/fiber';

import lineImg from '../../assects/img/line.png';
import starShipsImg from '../../assects/img/starShips.png';
import {UniversalButton} from '../../assects/components/UniversalButton';

import {Navbar} from './navbar/Navbar';
import {Container, Desc, Img, Left, Line, Right, Section, SubTitle, Title, WhatWeDo} from './HeaderStyle';

const Header = () => {
  return (
    <Section>
      <Navbar/>
      <Container>
        <Left>
          <Title>Hello</Title>
          <WhatWeDo>
            <Line src={`${lineImg}`}/>
            <SubTitle>That's what I do</SubTitle>
          </WhatWeDo>
          <Desc>
                        I create interesting applications, I try not to stand still.
          </Desc>
          <UniversalButton title={'Learn more'}/>
        </Left>
        <Right>
          <Canvas camera={{fov: 25, position: [5, 5, 5]}}>
            <OrbitControls enableZoom={false}/>
            <ambientLight intensity={1}/>
            <directionalLight position={[3, 2, 1]}/>
            <Sphere args={[1, 100, 200]} scale={1.5}>
              <MeshDistortMaterial
                color="#ba8ae7"
                attach={'material'}
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <Img src={`${starShipsImg}`}/>
        </Right>
      </Container>
    </Section>
  );
};

export default Header;

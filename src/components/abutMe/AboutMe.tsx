import React from 'react';
import styled from "styled-components";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";

import {Cube} from "../Cube";
import lineImg from "../../assects/img/line.png";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`
const Left = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`
const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
const Line = styled.img`
  height: 5px;
`
const SubTitle = styled.h2`
  color: #9bc2c2;
`
const Desc = styled.p`
  font-size: 24px;
  color: #737d81;
  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: #737d81;
    padding: 5px;
  }
`
const Button = styled.button`
  background-color: #9bc2c2;
  color: white;
  font-weight: 500;
  width: 120px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`
export const AboutMe = () => {
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
                    <Button>Sea are works</Button>
                </Right>
            </Container>
        </Section>
    );
};

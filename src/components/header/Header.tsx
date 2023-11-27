import React from 'react';
import styled from "styled-components";
import {MeshDistortMaterial, OrbitControls, Sphere} from "@react-three/drei";

import {Navbar} from "./navbar/Navbar";
import {Canvas} from "@react-three/fiber";
import lineImg from "../../assects/img/line.png"
import starShipsImg from "../../assects/img/starShips.png"
import {UniversalButton} from "../../assects/components/UniversalButton";


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  @media only screen and (max-width: 768px) {
    text-align: center;
    padding: 20px;
  }
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
    padding: 20px;
    text-align: center;
  }
`
const Right = styled.div`
  flex: 3;
  position: relative;

  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`
const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;


  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(25px);
    }
  }
`
export const Header = () => {
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
                    <UniversalButton title={"Learn more"}/>
                </Left>
                <Right>
                    <Canvas camera={{fov: 25, position: [5, 5, 5]}}>
                        <OrbitControls enableZoom={false}/>
                        <ambientLight intensity={1}/>
                        <directionalLight position={[3, 2, 1]}/>
                        <Sphere args={[1, 100, 200]} scale={1.5}>
                            <MeshDistortMaterial
                                color="#ba8ae7"
                                attach={"material"}
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

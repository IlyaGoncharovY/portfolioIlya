import React from 'react';
import styled from "styled-components";
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Stage} from "@react-three/drei";

import TelegramLogo from "./3dModel/TelegramLogo";
import {UniversalButton} from "../../../assects/components/UniversalButton";

const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: #61dafb;
  border-radius: 5px;
  position: absolute;
  bottom: 100px;
  right: 100px;
  
  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`

export const SocialMedia = () => {
    return (
        <>
            <Canvas>
                <Stage environment={"city"} intensity={0.6}>
                    <TelegramLogo/>
                </Stage>
                <OrbitControls enableZoom={false} autoRotate={true}/>
            </Canvas>
            <Desc>
                <UniversalButton title={"Send Me"}/>
            </Desc>
        </>
    );
};

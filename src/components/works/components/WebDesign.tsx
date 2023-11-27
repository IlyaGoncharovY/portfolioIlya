import React from 'react';
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Stage} from "@react-three/drei";

import LaptopLogo from "./3dModel/LaptopLogo";

export const WebDesign = () => {
    return (
        <Canvas>
            <Stage environment={"city"} intensity={0.6}>
                <LaptopLogo/>
            </Stage>
            <OrbitControls enableZoom={false} autoRotate={true}/>
        </Canvas>
    );
};

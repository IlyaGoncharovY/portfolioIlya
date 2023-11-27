import React from 'react';
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Stage} from "@react-three/drei";

import ReactLogo from "./3dModel/ReactLogo"

export const Development = () => {
    return (
        <Canvas>
            <Stage environment={"city"} intensity={0.6}>
                <ReactLogo/>
            </Stage>
           <OrbitControls enableZoom={false} autoRotate={true}/>
        </Canvas>
    );
};

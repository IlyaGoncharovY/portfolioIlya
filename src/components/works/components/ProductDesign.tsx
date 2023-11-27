import React from 'react';
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Stage} from "@react-three/drei";

import ReactorLogo from "./3dModel/ReactorLogo";

export const ProductDesign = () => {
    return (
        <Canvas>
            <Stage environment={"city"} intensity={0.6}>
                <ReactorLogo/>
            </Stage>
            <OrbitControls enableZoom={false} autoRotate={true}/>
        </Canvas>
    );
};

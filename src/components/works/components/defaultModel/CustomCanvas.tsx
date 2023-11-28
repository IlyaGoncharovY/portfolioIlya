import React, {ReactNode} from 'react';
import {Canvas} from '@react-three/fiber';
import {OrbitControls, Stage} from '@react-three/drei';

type CustomCanvasType = {
    children: ReactNode
}

export const CustomCanvas = (props: CustomCanvasType) => {
  return (
    <Canvas>
      <Stage environment={'city'} intensity={0.6}>
        {props.children}
      </Stage>
      <OrbitControls enableZoom={false} autoRotate={true}/>
    </Canvas>
  );
};


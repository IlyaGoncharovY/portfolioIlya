import React from 'react';
import {Canvas} from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';

import {Cube} from '../../../assects/components/Cube';

export const AbutMeCanvas = () => {
  return (
    <>
      <Canvas camera={{fov: 25, position: [5, 5, 5]}}>
        <OrbitControls enableZoom={false} autoRotate/>
        <ambientLight intensity={1}/>
        <directionalLight position={[3, 2, 1]}/>
        <Cube/>
      </Canvas>
    </>
  );
};

import React from 'react';
import {Canvas} from '@react-three/fiber';
import {MeshDistortMaterial, OrbitControls, Sphere} from '@react-three/drei';

export const HeaderCanvas = () => {
  return (
    <>
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
    </>
  );
};

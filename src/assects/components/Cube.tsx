import React, {useRef} from 'react';
import * as THREE from 'three';
import {useFrame} from '@react-three/fiber';
import {PerspectiveCamera, RenderTexture, Text} from '@react-three/drei';

export const Cube = () => {
  const textRef = useRef<THREE.Object3D>(null);
  useFrame((state) => {
    if (textRef.current) {
      textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 1.1;
    }
  });
  return (
    <mesh>
      <boxGeometry/>
      <meshStandardMaterial>
        <RenderTexture attach={'map'}>
          <PerspectiveCamera
            makeDefault
            position={[0, 0, 5]}
          />
          <color attach={'background'} args={['#7aec66']}/>
          <Text fontSize={2.5} color="#ce5427" position={[0, 0, 1]} ref={textRef}>
                        hello
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

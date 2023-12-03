/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 piratLogo.gltf --transform
Files: piratLogo.gltf [120.08KB] > piratLogo-transformed.glb [17.33KB] (86%)
Author: cherryslugeater (https://sketchfab.com/cherryslugeater)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/cnf-model-a-walker-detection-robot-286b9d5997ce4d37816b735720390b01
Title: CNF Model A | Walker Detection Robot
*/

import React from 'react';
import {useGLTF} from '@react-three/drei';

export default function Model(props) {
  const { nodes, materials } = useGLTF('/piratLogo-transformed.glb');
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_7.geometry} material={materials['Walker.png']} position={[0, 1.469, 0.125]} />
    </group>
  );
}

useGLTF.preload('/piratLogo-transformed.glb');
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 lapTopLogo.gltf --transform
Files: lapTopLogo.gltf [14.8KB] > lapTopLogo-transformed.glb [7.44KB] (50%)
Author: FishyBusiness (https://sketchfab.com/FishyBusiness)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/laptop-v2-10b153c036d54f6ea03e08e6f81e33f6
Title: Laptop V2
*/

import React from 'react';
import {useGLTF} from '@react-three/drei';

export default function Model(props) {
  const {nodes, materials} = useGLTF('/lapTopLogo-transformed.glb');
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.material_0} position={[-0.5, 0.063, -0.75]}
        rotation={[2.749, 0, Math.PI]}/>
      <mesh geometry={nodes.Object_5.geometry} material={materials.material_1} position={[-0.5, 0.063, -0.75]}
        rotation={[2.749, 0, Math.PI]}/>
      <mesh geometry={nodes.Object_7.geometry} material={materials.material_2} position={[0, 0, -0.063]}
        rotation={[-Math.PI, 0, -Math.PI]}/>
      <mesh geometry={nodes.Object_8.geometry} material={materials.material_3} position={[0, 0, -0.063]}
        rotation={[-Math.PI, 0, -Math.PI]}/>
    </group>
  );
}

useGLTF.preload('/lapTopLogo-transformed.glb');

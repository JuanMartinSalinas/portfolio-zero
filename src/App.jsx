// import {useEffect, useMemo, useRef, useState} from 'react';
import styles from './App.module.css';
import MainPage from './layout/MainPage/MainPage.jsx';
import About from './layout/About/About.jsx';
import Projects from './layout/Projects/Projects.jsx';
import {Route, Routes, useLocation} from 'react-router-dom';
// import { Canvas, useFrame } from '@react-three/fiber';
// import * as THREE from "three";

// import discordJs from './assets/techs/discordjs-logo.png'
// import express from './assets/techs/express-logo.png'
// import javascript from './assets/techs/javascript-logo.png'
// import nodeJs from './assets/techs/nodejs-logo.png'
// import postgresql from './assets/techs/postgresql-logo.png'
// import react from './assets/techs/react-logo.png'
// import redux from './assets/techs/redux-logo.png'
// import sequelize from './assets/techs/sequelize-logo.png'
// import tailwind from './assets/techs/tailwind-logo.png'
// import threeJs from './assets/techs/threejs-logo.png'
// import vite from './assets/techs/vite-logo.png'
// import zustand from './assets/techs/zustand-logo.png'

// import {useTexture} from '@react-three/drei'

// function Box(pathName) {

//   const meshRef = useRef();

//   const positions = {
//     "/": [2,2,2],
//     "/about": [10,1,1],
//     "/projects": [-9,2,3],
//   }

//   const [targetPosition, setTargetPosition] = useState(positions[pathName.pathName] || [0, 0, 0]);

//   useEffect(() => {
//     setTargetPosition(positions[pathName.pathName] || [0, 0, 0]);
//     console.log(pathName.pathName)
//   }, [pathName])

//   useFrame((_, delta)=> {
//     meshRef.current.rotation.z +=0.002;
//     if (meshRef.current) {
//       meshRef.current.position.lerp(
//         { x: targetPosition[0], y: targetPosition[1], z: targetPosition[2] },
//         delta * 2 // Ajusta la velocidad de la transición
//       );
//     }
//   })

//   return(
//     <mesh ref={meshRef} rotation={[5,0.3,0]}>
//       <torusGeometry args={[12, 2, 16, 100]}/>
//       <meshBasicMaterial color={"#1f262c"} wireframe transparent opacity={0.1} depthWrite={false}/>
//     </mesh>
//   )
// }

// function Techs(pathName) {

//   const imageUrls = [discordJs, express, javascript, nodeJs, postgresql, react, redux, sequelize, tailwind, threeJs, vite, zustand];
//   const textures = useTexture(imageUrls);
//   const techRef = useRef();

//   const positions = {
//     "/": [4,-4,-10],
//     "/about": [-1.9,0,2.4],
//     "/projects": [-10,-4,-20],
//   }

//   const [targetPosition, setTargetPosition] = useState(positions[pathName.pathName] || [0, 0, 0]);

//   const vertices = useMemo(() => {
//     const geometry = new THREE.IcosahedronGeometry(1);
//     const positions = geometry.attributes.position.array;
//     const vertexSet = new Set();
  
//     for (let i = 0; i < positions.length; i += 3) {
//       const key = `${positions[i]},${positions[i + 1]},${positions[i + 2]}`;
//       vertexSet.add(key);
//     }
  
//     return [...vertexSet].map((key) => {
//       const [x, y, z] = key.split(",").map(Number);
//       return new THREE.Vector3(x, y, z);
//     });
//   }, []);

//   useEffect(() => {
//     setTargetPosition(positions[pathName.pathName] || [0, 0, 0]);
//   },[pathName])

//   useFrame((_, delta)=> {
//     techRef.current.rotation.z +=0.002;
//     if (techRef.current) {
//       techRef.current.position.lerp(
//         { x: targetPosition[0], y: targetPosition[1], z: targetPosition[2] },
//         delta * 2 // Ajusta la velocidad de la transición
//       );
//     }
//   })

//   return(
//     <group ref={techRef}>
//     <mesh>
//       <icosahedronGeometry args={[1,0]}/>
//       <meshBasicMaterial color={"#1f262c"} wireframe/>
//     </mesh>
//     {pathName.pathName === "/about" ? vertices.map((pos, index) => (
//         <sprite scale={[0.3, 0.3, 1]} key={index} position={pos} >
//           <spriteMaterial map={textures[index % textures.length]} />
//         </sprite>
//       )) : null}
//     </group>
//   )
// }

function App() {

  // const currentLocation = useLocation();
  // const pathName = currentLocation.pathname

  return (
    <>
      <div className={styles.mainBox}>
        <div className={styles.thinBorderBox}/>
        <div className={styles.borderBox}/>
        <div className={styles.box}>
          <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/projects" element={<Projects />}/>
          </Routes>
        </div>
        <div className={styles.blobOuterContainer}>
            <div className={styles.blobInnerContainer}>
            <div className={styles.blob}></div>
          </div>
        </div>
      </div>
      <div className={styles.threeJs}>
        {/* <Canvas >
            <ambientLight intensity={0.5}/>
            <pointLight position={[2,2,2]}/>
            <Box pathName={pathName}/>
        </Canvas> 
      </div>
      <div className={pathName === "/about" ? styles.threeJs2 : styles.threeJs}>
        <Canvas>
          <ambientLight intensity={0.5}/>
          <pointLight position={[2,2,2]}/>
            <Techs pathName={pathName}/>
          </Canvas> */}
      </div>
    </>
  )
}

export default App
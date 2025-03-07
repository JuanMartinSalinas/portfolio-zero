import * as THREE from "three";
import { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Main from "./layout/MainPage/MainPage.jsx";
import About from "./layout/About/About.jsx";
import Projects from "./layout/Projects/Projects.jsx";
import styles from "./App.module.css";

import gsap from "gsap";

import discordJs from './assets/techs/discordjs-logo.png'
import express from './assets/techs/express-logo.png'
import javascript from './assets/techs/javascript-logo.png'
import nodeJs from './assets/techs/nodejs-logo.png'
import postgresql from './assets/techs/postgresql-logo.png'
import react from './assets/techs/react-logo.png'
import redux from './assets/techs/redux-logo.png'
import sequelize from './assets/techs/sequelize-logo.png'
import tailwind from './assets/techs/tailwind-logo.png'
import threeJs from './assets/techs/threejs-logo.png'
import vite from './assets/techs/vite-logo.png'
import zustand from './assets/techs/zustand-logo.png'


const App = () => {
  const mountRef = useRef(null);
  const torusRef = useRef(null);
  // const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const icoRef = useRef(null);
  const textureRef = useRef(null);
  
  const location = useLocation();
  
  useEffect(() => {
    // Si ya existe la escena, no la volvemos a crear / If scene exists, we don't create it again (unnecesary, works nonetheless)
    
    // if (!sceneRef.current) {
      const scene = new THREE.Scene();
    //   sceneRef.current = scene;
  
      const renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      rendererRef.current = renderer;
      mountRef.current.appendChild(renderer.domElement);
  
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 20;
      cameraRef.current = camera;
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);
      const pointLight = new THREE.PointLight(0xffffff, 1);
      pointLight.position.set(2, 2, 2);
      scene.add(pointLight);
  
      const torusGeometry = new THREE.TorusGeometry(12, 2, 16, 100); // Creación del toroide / torus creation
      const torusMaterial = new THREE.MeshBasicMaterial({ 
        color: "#1f262c", 
        wireframe: true, 
        transparent:true,
        opacity:0.05,
        depthWrite: false 
      });
      const torus = new THREE.Mesh(torusGeometry, torusMaterial);
      torus.rotation.set(5, 0.3, 0);
      scene.add(torus);
      torusRef.current = torus;
  
      const icosahedronGroup = new THREE.Group();
      scene.add(icosahedronGroup);

      const textureLoader = new THREE.TextureLoader()
      const textures = [
        textureLoader.load(discordJs), textureLoader.load(express), textureLoader.load(javascript), textureLoader.load(nodeJs),
        textureLoader.load(postgresql), textureLoader.load(nodeJs), textureLoader.load(react), textureLoader.load(redux),
        textureLoader.load(sequelize), textureLoader.load(tailwind), textureLoader.load(threeJs), textureLoader.load(vite),
        textureLoader.load(zustand)
      ]

      const icosahedronGeometry = new THREE.IcosahedronGeometry(1,0) // Creación del icosaedro / icosahedron creation
      const positions = icosahedronGeometry.attributes.position.array;
      const vertexSet = new Set();
      const icosahedronMaterial = new THREE.MeshBasicMaterial({
        color: "#1f262c",
        wireframe:true,
        transparent:true,
        opacity:0.05,
        depthWrite:false,
      });
      const icosahedron = new THREE.Mesh(icosahedronGeometry,icosahedronMaterial);
      icosahedronGroup.add(icosahedron);
      icoRef.current = icosahedronGroup;
      
      for (let i = 0; i < positions.length; i += 3) {
        const key = `${positions[i]},${positions[i + 1]},${positions[i + 2]}`;
        vertexSet.add(key);
      }

      const vertices = [...vertexSet].map((key) => {
        const [x, y, z] = key.split(",").map(Number);
        return new THREE.Vector3(x, y, z);
      });


        vertices.forEach((vertex, index) => {
        const spriteMaterial = new THREE.SpriteMaterial({ map: textures[index % textures.length], transparent:true, opacity:1});
        const sprite = new THREE.Sprite(spriteMaterial);
        sprite.position.copy(vertex);
        sprite.scale.set(0.3, 0.3, 0.3); // Ajustar tamaño
        icosahedronGroup.add(sprite); 
      });

      textureRef.current = vertices;


      function animate() {
        requestAnimationFrame(animate);
        torus.rotation.z += 0.002;
        icosahedronGroup.rotation.x += 0.002;
        icosahedronGroup.rotation.y += 0.002;
        icosahedronGroup.rotation.z += 0.002;
        renderer.render(scene, camera);
      }
      animate();
      
    }
  , []);
  
  useEffect(() => {
    if (torusRef.current) {
      const positions = {
        "/": [1, 1, 10],
        "/about": [10, 1, 14],
        "/projects": [-9, 2, 10],
      };
  
      const targetPosition = positions[location.pathname] || [0, 0, 0];
  
      gsap.to(torusRef.current.position, {
        x: targetPosition[0],
        y: targetPosition[1],
        z: targetPosition[2],
        duration: 1.2,
        ease: "power2.out",
      });
    }
  }, [location.pathname]);
  

  useEffect(() => {
    if(icoRef.current) {
      const positions = {
        "/":[0,-5,-4],
        "/about":[-2,0,17],
        "/projects":[7,2,12],
      };

      const targetPosition = positions[location.pathname] || [0, 0, 0];
  
      gsap.to(icoRef.current.position, {
        x: targetPosition[0],
        y: targetPosition[1],
        z: targetPosition[2],
        duration: 1.2,
        ease: "power2.out",
      });

    }
  }, [location.pathname])
  


  return (
    <>
      <div className={styles.mainBox}>
        <div className={styles.thinBorderBox}/>
        <div className={styles.borderBox}/>
        <div className={styles.box}>
          <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/projects" element={<Projects />}/>
          </Routes>
        </div>
        <div ref={mountRef} className={styles.threeJs} />
        <div className={styles.blobOuterContainer}>
          <div className={styles.blobInnerContainer}>
            <div className={styles.blob}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

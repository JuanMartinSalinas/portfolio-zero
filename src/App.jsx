import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Main from "./layout/MainPage/MainPage.jsx";
import About from "./layout/About/About.jsx";
import Projects from "./layout/Projects/Projects.jsx";
import styles from "./App.module.css";

import gsap from "gsap";


const App = () => {
  const mountRef = useRef(null);
  const torusRef = useRef(null);
  // const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  
  const location = useLocation();
  
  useEffect(() => {
    // Si ya existe la escena, no la volvemos a crear
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
  
      new OrbitControls(camera, renderer.domElement);
  
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);
      const pointLight = new THREE.PointLight(0xffffff, 1);
      pointLight.position.set(2, 2, 2);
      scene.add(pointLight);
  
      const torusGeometry = new THREE.TorusGeometry(12, 2, 16, 100);
      const torusMaterial = new THREE.MeshBasicMaterial({ 
        color: "#1f262c", 
        wireframe: true, 
        transparent: true, 
        opacity: 1, 
        depthWrite: false 
      });
      const torus = new THREE.Mesh(torusGeometry, torusMaterial);
      torus.rotation.set(5, 0.3, 0);
      scene.add(torus);
      torusRef.current = torus; // Guardamos la referencia del toroide
  
      function animate() {
        requestAnimationFrame(animate);
        torus.rotation.z += 0.002;
        renderer.render(scene, camera);
      }
      animate();
  
      const handleResize = () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      };
      window.addEventListener("resize", handleResize);
  
      return () => {
        mountRef.current.removeChild(renderer.domElement);
        window.removeEventListener("resize", handleResize);
      };
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

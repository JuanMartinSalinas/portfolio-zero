import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Main from "./layout/MainPage/MainPage.jsx";
import About from "./layout/About/About.jsx";
import Projects from "./layout/Projects/Projects.jsx";
import styles from "./App.module.css";

const App = () => {
  const mountRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 20;

    const controls = new OrbitControls(camera, renderer.domElement);
    
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(2, 2, 2);
    scene.add(pointLight);

    const torusGeometry = new THREE.TorusGeometry(12, 2, 16, 100);
    const torusMaterial = new THREE.MeshBasicMaterial({ color: "#1f262c", wireframe: true, transparent: true, opacity: 0.1, depthWrite: false });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.rotation.set(5, 0.3, 0);
    scene.add(torus);

    const positions = {
        "/": [2, 2, 2],
        "/about": [10, 1, 1],
        "/projects": [-9, 2, 3],
    };

    let targetPosition = new THREE.Vector3(...(positions[location.pathname] || [0, 0, 0]));

    function animate() {
        requestAnimationFrame(animate);
        torus.rotation.z += 0.002;
        torus.position.lerp(targetPosition, 0.02);
        renderer.render(scene, camera);
    }

    // animate();

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
        <div className={styles.blobOuterContainer}>
          <div className={styles.blobInnerContainer}>
            <div className={styles.blob}></div>
          </div>
        </div>
      </div>
      <div ref={mountRef} className={styles.threeJs} />
    </>
  );
};

export default App;

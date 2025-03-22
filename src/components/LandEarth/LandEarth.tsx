// import React from "react";
// import { useLoader } from "@react-three/fiber";
// import { TextureLoader } from "three";
// import { OrbitControls, Stars } from "@react-three/drei";
// import * as THREE from "three";

// import EarthClouds from "../../assets/Office/textures/8k_earth_clouds.jpg";
// import EarthDayMap from "../../assets/Office/textures/8k_earth_daymap.jpg";
// import EarthNightMap from "../../assets/Office/textures/8k_earth_nightmap.jpg";
// import EarthNormalMap from "../../assets/Office/textures/8k_earth_normal_map.jpg";
// import EarthSpecularMap from "../../assets/Office/textures/8k_earth_specular_map.jpg";

// const LandEarth: React.FC = (props) => {
//     const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
//         TextureLoader,
//         // [EarthClouds, EarthDayMap, EarthNightMap, EarthNormalMap, EarthSpecularMap]
//         [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthClouds]
//     );

//     return (
//         <>
//             {/* <ambientLight intensity={1} /> */}
//             <pointLight color="#f6f3ea" position={[2, 0, 2]} intensity={1.2} />
//             <Stars
//                 radius={300}
//                 depth={60}
//                 count={20000}
//                 factor={7}
//                 saturation={0}
//                 fade={true}
//             />
//             <mesh>
//                 <sphereGeometry args={[1.005, 32, 32]} />
//                 <meshPhongMaterial
//                     map={cloudsMap}
//                     opacity={0.4}
//                     depthWrite={true}
//                     transparent={true}
//                     side={THREE.DoubleSide}
//                 />
//             </mesh>
//             <mesh>
//                 <sphereGeometry args={[1, 32, 32]} />
//                 <meshPhongMaterial specularMap={specularMap} />
//                 <meshStandardMaterial map={colorMap} normalMap={normalMap} />
//                 <OrbitControls
//                     enableZoom={true}
//                     enablePan={true}
//                     zoomSpeed={0.6}
//                     panSpeed={0.5}
//                     rotateSpeed={0.4}
//                 //   target={}
//                 />
//             </mesh>
//         </>
//     );
// };

// export default LandEarth;


import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

import EarthCloudsMap from "../../assets/Office/textures/8k_earth_clouds.jpg";
import EarthDayMap from "../../assets/Office/textures/8k_earth_daymap.jpg";
import EarthNormalMap from "../../assets/Office/textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../../assets/Office/textures/8k_earth_specular_map.jpg";
import { TextureLoader } from "three";

const LandEarth: React.FC = (props) => {
    const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
        TextureLoader,
        [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
    );

    const earthRef = useRef<THREE.Mesh>(null);
    const cloudsRef = useRef<THREE.Mesh>(null);

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();

        if (earthRef.current && cloudsRef.current) {
            earthRef.current.rotation.y = elapsedTime / 6;
            cloudsRef.current.rotation.y = elapsedTime / 6;
        }
    });
    return (
        <>
            <ambientLight intensity={0.4} />
            <pointLight color="#f6f3ea" position={[2, 0, 5]} intensity={15.2} />
            <Stars
                radius={300}
                depth={60}
                count={10000}
                factor={7}
                saturation={0}
                fade={true}
            />
            <Stars
                radius={300}
                depth={60}
                count={100}
                factor={43}
                saturation={0}
                fade={true}
            />
            <mesh ref={cloudsRef} position={[0, 0, 3]}>
                <sphereGeometry args={[1.009, 32, 32]} />
                <meshPhongMaterial
                    map={cloudsMap}
                    opacity={0.4}
                    depthWrite={true}
                    transparent={true}
                    side={THREE.DoubleSide}
                />
            </mesh>
            <mesh ref={earthRef} position={[0, 0, 3]}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshPhongMaterial specularMap={specularMap} />
                <meshStandardMaterial
                    map={colorMap}
                    normalMap={normalMap}
                    metalness={0.4}
                    roughness={0.7}
                />
                {/* <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        /> */}
            </mesh>
        </>
    );
}

export default LandEarth;
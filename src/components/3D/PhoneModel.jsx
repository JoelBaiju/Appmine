import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import './PhoneModel.css';

const Phone = ({ phoneRef, startPosition, isSecondPhone = false }) => {
    const { scene } = useGLTF(process.env.PUBLIC_URL + '/Phone_3D.glb'); // Adjust path to your model file
    const [animationStarted, setAnimationStarted] = useState(false);

    useEffect(() => {
        // Trigger the animation after the component mounts
        setAnimationStarted(true);
    }, []);

    // Animate the position and rotation of the phone
    useFrame(() => {
        if (phoneRef.current && animationStarted) {
            const t = Math.min(1, (performance.now() - startTime) / 2000); // Progress from 0 to 1 over 2 seconds
            const direction = isSecondPhone ? 1 : -1; // Set direction based on whether it's the second phone
            phoneRef.current.position.x = startPosition + direction * t * 5; // Moves from -5 to 0 or 5 to 0

            // if (t > 0.5) {
                const rotationProgress = Math.min(1, (t - 0.5) * 2); // After x reaches 0, rotate the phone
                phoneRef.current.rotation.y = -rotationProgress * Math.PI / 4 * direction;
                phoneRef.current.rotation.x = -rotationProgress * Math.PI / 30 ; 
            // }
        }
    });

    // Track start time for animation
    const startTime = performance.now();

    return <primitive ref={phoneRef} object={scene} scale={0.3} />;
};

const PhoneModel = () => {
    const phoneRef2 = useRef();

    return (
        <div className="w-full h-full">
            <Canvas camera={{ position: [-5, 0, 0], fov: 20 }}>
                {/* Add lighting */}
                <ambientLight intensity={3} />
                <directionalLight position={[0, 1, 5]} intensity={1} />

                {/* Load the 3D phones */}
                <Phone phoneRef={phoneRef2} startPosition={5} isSecondPhone={true} />

                {/* Enable camera controls */}
                <OrbitControls />
            </Canvas>
        </div>
    );
};

export default PhoneModel;













































// import React, { useRef, useState, useEffect } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';
// import './PhoneModel.css';

// const Phone = ({ phoneRef, startPosition, isSecondPhone = false }) => {
//     const { scene } = useGLTF(process.env.PUBLIC_URL + '/Phone_3D.glb'); // Adjust path to your model file
//     const [animationStarted, setAnimationStarted] = useState(false);
//     const startTimeRef = useRef(null);

//     useEffect(() => {
//         // Start animation on mount
//         setAnimationStarted(true);
//         startTimeRef.current = performance.now(); // Store start time for animation
//     }, []);

//     useFrame(() => {
//         if (phoneRef.current && animationStarted && startTimeRef.current) {
//             const t = Math.min(1, (performance.now() - startTimeRef.current) / 1000); // Progress from 0 to 1 over 2 seconds
//             const direction = isSecondPhone ? 1 : -1; // Set direction based on whether it's the second phone
//             phoneRef.current.position.x = startPosition + direction * t * 5; // Moves from -5 to 0 or 5 to 0

//             const rotationProgress = Math.min(1, (t - 0.5) * 2); // After x reaches 0, rotate the phone
//             phoneRef.current.rotation.y = -rotationProgress * Math.PI / 4 * direction;
//         }
//     });

//     return <primitive ref={phoneRef} object={scene} scale={0.3} />;
// };

// const PhoneModel = () => {
//     const phoneRef1 = useRef();
//     const phoneRef2 = useRef();

//     return (
//         <div className='w-full h-full'>
//             <Canvas camera={{ position: [-5, 0, 0], fov: 20 }}>
//                 {/* Add lighting */}
//                 <ambientLight intensity={1} />
//                 <directionalLight position={[0, 1, 5]} intensity={1} />

//                 {/* Load the 3D phones */}
//                 <Phone phoneRef={phoneRef1} startPosition={-5} />
//                 <Phone phoneRef={phoneRef2} startPosition={5} isSecondPhone={true} />

//                 {/* Enable camera controls */}
//                 {/* <OrbitControls />    */}
//             </Canvas>
//         </div>
//     );
// };

// export default PhoneModel;


































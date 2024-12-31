import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import './PhoneModel.css';





const Phone = ({ phoneRef, startPosition, isSecondPhone }) => {
    const { scene } = useGLTF(process.env.PUBLIC_URL + '/2b_jump (1).glb');
    const [animationStarted, setAnimationStarted] = useState(false);
    const [startTime, setStartTime] = useState(null); // Track the animation start time

    // useEffect(() => {
    //     if (phoneRef.current) {
    //         // Set the initial rotation of the phone based on its position
    //         phoneRef.current.rotation.y = -90 * (Math.PI / 180); // Convert to radians
    //         phoneRef.current.rotation.x = 0; // Optional: Set pitch
    //         phoneRef.current.rotation.z = 0; // Optional: Set roll
    //     }
    //     // Trigger the animation after the component mounts
    //     setAnimationStarted(true);
    //     setStartTime(performance.now()); // Set the start time
    // }, [phoneRef]);

    // Animate the position and rotation of the phone
    // useFrame(() => {
    //     if (phoneRef.current && animationStarted && startTime) {
    //         const t = Math.min(1, (performance.now() - startTime) / 2000); // Progress from 0 to 1 over 2 seconds
    //         // phoneRef.current.position.x = startPosition + t * 5; // Moves from -5 to 0 or 5 to 0

    //         // Adjust rotation from the initial state
    //         if (t > 0.5) {
    //             const rotationProgress = Math.min(1, (t - 0.5) * 2); // After x reaches 0, rotate the phone
    //             phoneRef.current.rotation.y = -90 * (Math.PI / 180) + rotationProgress * (-Math.PI / -4); // Start from initial rotation
    //             phoneRef.current.rotation.x = -rotationProgress * (Math.PI / 180) + rotationProgress * (-Math.PI / 12); // Start from initial rotation
    //         }
    //     }
    // });

    return <primitive ref={phoneRef} object={scene} scale={0.019} />;
};







const Screen = ({ ScreenRef, startPosition }) => {
    const { scene } = useGLTF(process.env.PUBLIC_URL + '/netflix.glb'); 
    const [animationStarted, setAnimationStarted] = useState(false);

    useEffect(() => {
        // Trigger the animation after the component mounts
        setAnimationStarted(true);
    }, []);

    // Animate the position and rotation of the phone
    // useFrame(() => {
    //     if (ScreenRef.current && animationStarted) {
    //         const t = Math.min(1, (performance.now() - startTime) / 2000); // Progress from 0 to 1 over 2 seconds
    //         const direction = 1; // Set direction based on whether it's the second phone
    //         // ScreenRef.current.position.x = startPosition + direction * t * 5; // Moves from -5 to 0 or 5 to 0
    
    //         if (t > 0.5) {
    //             const rotationProgress = Math.min(1, (t - 0.5) * 2); // After x reaches 0, rotate the phone
    //             ScreenRef.current.rotation.y = -rotationProgress * Math.PI / -5;
    //             ScreenRef.current.rotation.x = -rotationProgress * Math.PI / 11 ; 
    
    //             if (rotationProgress < 1) { 
    //                 // Only update Z while rotation is in progress
    //                 const rightwardOffset = rotationProgress * 0.0005; // Adjust the multiplier for desired movement
    //                 ScreenRef.current.position.z += rightwardOffset;
    //             } else {
    //                 console.log("Rotation complete, stopping Z movement");
    //             }
    //         }
    //     }
    // });
    

    // Track start time for animation
    const startTime = performance.now();

    return <primitive ref={ScreenRef} object={scene} scale={0.} />;
};





const PhoneModel = () => {
    const phoneRef = useRef();
    const ScreenRef = useRef();

    return (
        <div className="bg-black w-1/3 h-full ">
            <h1 className='text-white'>helloooo</h1>
            <Canvas camera={{ position: [-5, 0, 0], fov: 5 }}>
                {/* Add lighting */}
                <ambientLight intensity={3} />
                <directionalLight position={[0, 1, 5]} intensity={1} />

                {/* Load the 3D phones */}
                <Phone phoneRef={phoneRef} startPosition={5} isSecondPhone={true} />
                {/* <Screen ScreenRef={ScreenRef} startPosition={4} isSecondPhone={true} /> */}

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


































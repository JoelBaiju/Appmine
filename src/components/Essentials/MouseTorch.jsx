import React, { useState, useEffect, useRef } from "react";

const MouseTorch = () => {
    const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });
    const [isMouseMoving, setIsMouseMoving] = useState(false);
    const mouseMoveTimeout = useRef(null);
    const animationFrameId = useRef(null);
    const angle = useRef(0);

    const handleMouseMove = (event) => {
        setIsMouseMoving(true);
        clearTimeout(mouseMoveTimeout.current);

        const { offsetX, offsetY, target } = event.nativeEvent;
        const { offsetWidth, offsetHeight } = target;
        const xPercent = (offsetX / offsetWidth) * 100;
        const yPercent = (offsetY / offsetHeight) * 100;
        setGradientPosition({ x: xPercent, y: yPercent });

        // Reset `isMouseMoving` after 500ms of no movement
        mouseMoveTimeout.current = setTimeout(() => {
            setIsMouseMoving(false);
        }, 500);
    };

    useEffect(() => {
        const moveGradientSmoothly = () => {
            if (!isMouseMoving) {
                angle.current += 0.002; // Adjust speed
                const radius = 20; // Adjust the radius of movement
                const centerX = 50; // Center of the div
                const centerY = 50;

                const newX = centerX + radius * Math.cos(angle.current);
                const newY = centerY + radius * Math.sin(angle.current);

                setGradientPosition({ x: newX, y: newY });
            }
            animationFrameId.current = requestAnimationFrame(moveGradientSmoothly);
        };

        animationFrameId.current = requestAnimationFrame(moveGradientSmoothly);

        return () => {
            cancelAnimationFrame(animationFrameId.current);
        };
    }, [isMouseMoving]);

    return (
        <div
            style={{
                background: `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, rgba(0,0,0,0.6839985994397759) 0%, rgba(0,0,0,0.9641106442577031) 22%)`,
                border: "1px solid black",
            }}
            className="w-full absolute top-0 left-0 z-10 h-full"
            onMouseMove={handleMouseMove}
        ></div>
    );
};

export default MouseTorch;

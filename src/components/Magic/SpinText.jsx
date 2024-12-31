import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";


const SpinText = ({ text,color,id }) => {
    const textRef = useRef(null);

    useEffect(() => {
        // Select the paragraph
        const textElement = textRef.current;

        // Ensure the text is split into spans
        const textContent = textElement.textContent;
        const letters = textContent.split("").map((char) => {
            const span = document.createElement("span");
            span.className = char === " " ? "letter space" : "letter"; // Add a class for spaces
            span.textContent = char === " " ? "\u00A0" : char; // Use non-breaking space for spaces
            return span;
        });

        // Clear existing content and append wrapped spans
        textElement.innerHTML = "";
        letters.forEach((letter) => textElement.appendChild(letter));

        // Create a timeline for looping animation
        const timeline = gsap.timeline({ repeat: -1, repeatDelay: 2 });

        timeline.fromTo(
            ".letter",
            { rotateY: 180, 
                opacity: 0
             },
            {
                rotateY: 360,
                opacity: 1,
                duration: 1,
                ease: "power2.inOut",
                stagger: 0.04, // Delay between animations for each letter
            }
        );
    }, []);

    return (
        <p ref={textRef}
            className={`text-[#${color}]`}
            id='dtext' >
            {text}
        </p>
    );
};

export default SpinText;

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const SpinTextOnScroll = ({ text }) => {
    const textRef2 = useRef(null);

    useEffect(() => {
        // Select the paragraph
        const textElement = textRef2.current;

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

        // Create a scroll-triggered animation
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: textElement, // Element that triggers the animation
                start: "top 55%", // Start when the element is 75% in the viewport
                end: 1000, // End when the element is 25% in the viewport
                // toggleActions: "play pause resume reset", // Animation actions
                markers: false, // Set true to see scroll-trigger markers
            },
        });

        timeline.fromTo(
            ".letter",
            { scale: 1.5,
                 opacity: 1 
                },
            {
                scale: 1,
                opacity: 1,
                duration: 1,
                ease: "power2.inOut",
                stagger: 0.03, // Delay between animations for each letter
            }
        );
    }, []);

    return (
        <p ref={textRef2} className="w-full">
            {text}
        </p>
    );
};

export default SpinTextOnScroll;

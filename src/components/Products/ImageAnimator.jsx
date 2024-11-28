import React, { useEffect, useState } from "react";

function ImageAnimator({ imageSrc, altText }) {
  const [isFading, setIsFading] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(imageSrc);

  useEffect(() => {
    // Trigger fade-out effect
    setIsFading(true);
    const timeout = setTimeout(() => {
      // Change the image source after fade-out
      setCurrentSrc(imageSrc);
      // Trigger fade-in effect
      setIsFading(false);
    }, 500); // Duration should match CSS transition time

    return () => clearTimeout(timeout);
  }, [imageSrc]);

  return (
    <img
      className={`md:w-40 w-32 min-h-32 ${isFading ? "fade-in-out" : "visible"}`}
      src={currentSrc}
      alt={altText}
    />
  );
}

export default ImageAnimator;

import React, { useState } from "react";
import images from "../../images";

function HangmanStatus() {
  const [hangmanImages, setHangmanImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => prevIndex + 1);
  };

  console.log(currentImageIndex);

  return (
    <section>
      <img
        key={currentImageIndex}
        src={images[currentImageIndex]}
        alt="hangman"
      ></img>
      <button onClick={showNextImage}>click for roll image</button>
    </section>
  );
}

export default HangmanStatus;

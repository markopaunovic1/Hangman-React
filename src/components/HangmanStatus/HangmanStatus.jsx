import React, { useState } from "react";
import images from "../../images";

function HangmanStatus({ guessedLetters, currentWord }) {
  const [hangmanImages, setHangmanImages] = useState(images);
  const [currentImageIndex, setCurrentImageIndex] = useState(-1);
  const [attempts, setAttempts] = useState(8);

  // Show the next image
  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => prevIndex + 1);
  };

  // Count the number of wrong guesses
  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter)
  ).length;

  if (wrongGuessCount - 1 > currentImageIndex) {
    if (wrongGuessCount) {
      setAttempts(attempts - 1);
    }
    showNextImage();
  }

  console.log(currentImageIndex);
  console.log("atempts left: " + attempts);

  return (
    <section>
      {currentImageIndex >= 0 && (
        <img
          key={wrongGuessCount && hangmanImages[currentImageIndex]}
          src={wrongGuessCount && hangmanImages[currentImageIndex]}
        ></img>
      )}
    </section>
  );
}

export default HangmanStatus;

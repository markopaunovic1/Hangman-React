import React, { useState } from "react";
import images from "../../images";

function HangmanStatus({ guessedLetters, currentWord }) {
  const [hangmanImages, setHangmanImages] = useState(images);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Show the next image
  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => prevIndex + 1);
  };

  // Count the number of wrong guesses
  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter)
  ).length;

  if (wrongGuessCount - 1 > currentImageIndex) {
    showNextImage();
  }

  console.log(currentImageIndex);

  return (
    <section>
      <img
        key={wrongGuessCount && hangmanImages[currentImageIndex]}
        src={wrongGuessCount && hangmanImages[currentImageIndex]}
        alt="hangman"
      ></img>
    </section>
  );
}

export default HangmanStatus;

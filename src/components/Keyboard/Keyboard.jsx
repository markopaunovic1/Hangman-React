import React from "react";
import { useState } from "react";
import "./index.css";

function Keyboard() {
  // useState() values
  const [guessedLetters, setGuessedLetters] = useState([]);

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  // function to handle the guessed letter
  function handleGuessLetter(letter) {
    setGuessedLetters((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    );
  }

  console.log(guessedLetters);

  const displayKeyboard = alphabet.split("").map((eachKey, index) => {
    return (
      <button
        key={index}
        className="eachKey"
        onClick={() => handleGuessLetter(eachKey)}
      >
        {eachKey.toUpperCase()}
      </button>
    );
  });

  return <span className="keyboardElements">{displayKeyboard}</span>;
}

export default Keyboard;

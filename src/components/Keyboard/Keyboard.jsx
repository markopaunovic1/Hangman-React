import React from "react";
import { useState } from "react";
import "./index.css";
import clsx from "clsx";

function Keyboard({ guessedLetters, setGuessedLetters, displayCurrentWord }) {
  //static values
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  // function to handle the guessed letter
  function handleGuessLetter(letter) {
    setGuessedLetters((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    );
  }

  const displayKeyboard = alphabet.split("").map((eachKey, index) => {
    const isGuessed = guessedLetters.includes(eachKey);
    const isCorrect = isGuessed && displayCurrentWord.includes(eachKey);
    const isIncorrect = isGuessed && !displayCurrentWord.includes(eachKey);
    const className = clsx({
      eachKey: "eachKey",
      correct: isCorrect,
      incorrect: isIncorrect,
    });
    return (
      <button
        key={index}
        className={className}
        onClick={() => handleGuessLetter(eachKey)}
      >
        {eachKey.toUpperCase()}
      </button>
    );
  });

  return <span className="keyboardElements">{displayKeyboard}</span>;
}

export default Keyboard;

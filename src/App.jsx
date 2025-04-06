import "./index.css";
import Information from "./components/Information/Information";
import HangmanStatus from "./components/HangmanStatus/HangmanStatus";
import CurrentWord from "./components/CurrentWord/CurrentWord";
import Keyboard from "./components/Keyboard/Keyboard";
import { useEffect, useState } from "react";
import getRandomWord from "./randomWords";
import clsx from "clsx";

function App() {
  // useState() hooks
  const [displayCurrentWord, setDisplayCurrentWord] = useState("testword");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [attempts, setAttempts] = useState(8);

  // Derived values
  const isGameWon = displayCurrentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  const isGameLost = attempts === 0;
  const isGameOver = isGameWon || isGameLost;

  // Attempts left
  const attemptsLeft = guessedLetters.filter(
    (letter) => !displayCurrentWord.includes(letter)
  ).length;

  useEffect(() => {
    if (attemptsLeft) {
      setAttempts((prevAttempts) => prevAttempts - 1);
    }
  }, [attemptsLeft]);

  // Display the current word
  const letterElements = displayCurrentWord
    .split("")
    .map((eachLetter, index) => {
      const showMissingLetter =
        isGameLost || guessedLetters.includes(eachLetter);

      const styleLetter = clsx({
        eachLetterElements: true,
        colorMissingLetter: isGameLost && !guessedLetters.includes(eachLetter),
        colorCorrectLetter: isGameWon,
      });

      return (
        <span key={index} className={styleLetter}>
          {showMissingLetter ? eachLetter.toUpperCase() : ""}
        </span>
      );
    });

  const styleAttempts = clsx({
    attempts: attempts,
    attemptsLow: attempts < 4,
  });

  return (
    <main>
      <section className="information-section">
        <Information />
      </section>

      <section className="hangmanStatus">
        <HangmanStatus
          guessedLetters={guessedLetters}
          currentWord={displayCurrentWord}
        />
      </section>

      <section className="currentWord">
        <p className={styleAttempts}>Attempts: {attempts}</p>
        <CurrentWord word={letterElements} />
      </section>

      <section>
        <Keyboard
          guessedLetters={guessedLetters}
          setGuessedLetters={setGuessedLetters}
          displayCurrentWord={displayCurrentWord}
        />
      </section>

      <section>
        {isGameOver && <button className="newGameButton">New Game</button>}
      </section>
    </main>
  );
}

export default App;

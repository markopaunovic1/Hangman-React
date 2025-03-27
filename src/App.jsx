import "./index.css";
import Information from "./components/Information/Information";
import HangmanStatus from "./components/HangmanStatus/HangmanStatus";
import CurrentWord from "./components/CurrentWord/CurrentWord";
import Keyboard from "./components/Keyboard/Keyboard";
import { useEffect, useState } from "react";

function App() {
  // useState() hooks
  const [displayCurrentWord, setDisplayCurrentWord] = useState("testword");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [attempts, setAttempts] = useState(8);

  const letterElements = displayCurrentWord
    .split("")
    .map((eachLetter, index) => {
      return (
        <span key={index} className="eachLetterElements">
          {guessedLetters.includes(eachLetter) ? eachLetter.toUpperCase() : ""}
        </span>
      );
    });

  const attemptsLeft = guessedLetters.filter(
    (letter) => !displayCurrentWord.includes(letter)
  ).length;

  useEffect(() => {
    if (attemptsLeft) {
      setAttempts((prevAttempts) => prevAttempts - 1);
    }
  }, [guessedLetters, displayCurrentWord]);

  console.log("attempts from APP: " + attempts);

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
        <p>Attempts: {attempts}</p>
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
        <button className="newGameButton">New Game</button>
      </section>
    </main>
  );
}

export default App;

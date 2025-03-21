import "./index.css";
import Information from "./components/Information/Information";
import HangmanStatus from "./components/HangmanStatus/HangmanStatus";
import CurrentWord from "./components/CurrentWord/CurrentWord";
import Keyboard from "./components/Keyboard/Keyboard";
import { useState } from "react";

function App() {
  // useState() hooks
  const [displayCurrentWord, setDisplayCurrentWord] = useState("testword");
  const [guessedLetters, setGuessedLetters] = useState([]);

  const letterElements = displayCurrentWord
    .split("")
    .map((eachLetter, index) => {
      return (
        <span key={index} className="eachLetterElements">
          {guessedLetters.includes(eachLetter) ? eachLetter.toUpperCase() : ""}
        </span>
      );
    });

  return (
    <main>
      <section className="information-section">
        <Information />
      </section>

      <section className="hangmanStatus">
        <HangmanStatus />
      </section>

      <section className="currentWord">
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

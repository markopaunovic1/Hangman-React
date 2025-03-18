import "./index.css";
import Information from "./components/Information/Information";
import HangmanStatus from "./components/HangmanStatus/HangmanStatus";
import CurrentWord from "./components/CurrentWord/CurrentWord";
import Keyboard from "./components/Keyboard/Keyboard";
import { useState } from "react";

function App() {
  const [displayCurrentWord, setDisplayCurrentWord] = useState("TestWord");

  return (
    <main>
      <section className="information-section">
        <Information />
      </section>

      <section>
        <HangmanStatus />
      </section>

      <section>
        <CurrentWord word={displayCurrentWord} />
      </section>

      <section>
        <Keyboard />
      </section>
    </main>
  );
}

export default App;

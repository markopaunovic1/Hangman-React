import "./index.css";
import Information from "./components/Information/Information";
import HangmanStatus from "./components/HangmanStatus/HangmanStatus";
import CurrentWord from "./components/CurrentWord/CurrentWord";
import Keyboard from "./components/Keyboard/Keyboard";

function App() {
  return (
    <main>
      <section className="information-section">
        <Information />
      </section>

      <section>
        <HangmanStatus />
      </section>

      <section>
        <CurrentWord />
      </section>

      <section>
        <Keyboard />
      </section>
    </main>
  );
}

export default App;

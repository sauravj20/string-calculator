import "./App.css";
import {useState} from "react";
import sum from "../stringCalculator";

function App() {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<number>(0);

  function addNumbers() {
    try {
      setResult(sum(input));
    } catch (error) {
      alert((error as Error).message);
    }
  }

  return (
    <div className="container">
      <section className="input-section">
        <label htmlFor="number-input">
          Enter Numbers
          <textarea id="number-input" value={input}
                 onChange={(e) => setInput(e.target.value)}/>
        </label>
        <button onClick={addNumbers}>Add</button>
      </section>

      <section className="Results">
        Result: {result}
      </section>
    </div>
  )
}

export default App

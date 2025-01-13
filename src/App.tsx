import "./App.css";
import {useState} from "react";
import sum from "../stringCalculator";

function App() {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<number>(0);

  function addNumbers() {
    setResult(sum(input));
  }

  return (
    <div className="container">
      <section className="input-section">
        <label htmlFor="number-input">
          Enter Numbers
          <input type="text" id="number-input" value={input}
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

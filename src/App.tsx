import "./App.css";

function App() {
  return (
    <div className="container">
      <section className="input-section">
        <label htmlFor="number-input">
          Enter Numbers
          <input type="text" id="number-input"/>
        </label>
        <button>Add</button>
      </section>

      <section className="Results">
        Result: 0
      </section>
    </div>
  )
}

export default App

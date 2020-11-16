import logo from "./logo.svg";
import Title from "./components/title";
import "./App.css";

function App() {
  return (
    <div className="App">
      <main>
        <Title />
      </main>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This moving thing above me is pretty cool :)</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello Pappie, hoe gaat ie?
        </a>
      </header>
    </div>
  );
}

export default App;

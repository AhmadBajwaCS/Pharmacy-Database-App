import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pharmacy DB</h1>
        <button class="button">Search the database</button>
        <button class="button">Log prescription</button>
        <button class="button">Track active prescriptions</button>
        <button class="button">View drug inventory</button>
        <button class="button">Add new customer</button>
        <button class="button">Quit</button>
        <p>
          Pharmacy DB
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

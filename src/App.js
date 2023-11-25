import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          EDITAR <code>src/App.js</code> graba y recarga la pagina.
        </p>
        <a
          className="App-link"
          href="https://www.puce.edu.ec"
          target="_blank"
          rel="noopener noreferrer"
        >
          PUCE
        </a>
      </header>
    </div>
  );
}

export default App;

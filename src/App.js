import logo from './logo.svg';
import "@cloudscape-design/global-styles/index.css"
import './App.css';
import SampleTable from './Table'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React - Narendra
          <SampleTable/>
        </a>
      </header>
      
    </div>
  );
}

export default App;

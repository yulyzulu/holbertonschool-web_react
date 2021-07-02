import logo from './logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header><hr />
      <body>
        <main className="App-body">
          <p>Login to access the full dashboard</p>
          <label htmlFor="email" >Email:</label>
          <input id="email" type="email" />
          <label htmlFor="password" >Password:</label>
          <input id="password" type="password" />
          <button>OK</button>
        </main><hr />
        <footer className="App-footer">
          <i>
            Copyright {getFullYear()} - {getFooterCopy()}
            </i>
          </footer>
      </body>
    </div>
  );
}

export default App;

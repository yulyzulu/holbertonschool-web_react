import logo from './logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';
import Notifications from './Notifications.js';

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
        </main><hr />
        <footer className="App-footer">
          <i>
            Copyright {getFullYear()} - {getFooterCopy()}
            </i>
          </footer>
          <p>{Notifications}</p>
      </body>
    </div>
  );
}

export default App;

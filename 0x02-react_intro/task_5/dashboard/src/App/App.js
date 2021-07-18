import logo from '../assets/holberton-log.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div><hr />
      <body>
        <div className="App-body">
          <p>Login to access the full dashboard</p>
          <label htmlFor="email" >Email:</label>
          <input id="email" type="email" />
          <label htmlFor="password" >Password:</label>
          <input id="password" type="password" />
          <button>OK</button>
        </div><hr />
        <div className="App-footer">
          <i>
            Copyright {getFullYear()} - {getFooterCopy()}
            </i>
          </div>
      </body>
    </div>
  );
}

export default App;
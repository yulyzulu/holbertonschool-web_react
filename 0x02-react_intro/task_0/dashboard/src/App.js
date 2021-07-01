import logo from './logo.jpg';
import './App.css';

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
        <footer className="App-footer"><i>Copyright 2020 - holberton School</i></footer>
      </body>
    </div>
  );
}

export default App;

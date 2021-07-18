import React from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications.js';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js'

function App() {
  return (
    <React.Fragment>
      <Notifications />
      <div className="App">
        <Header /><hr />
      </div>
        <div className="App-body">
          <Login /><hr />
        </div>
        <div className="App-footer">
          <Footer />
        </div>
    </React.Fragment>
  );
}

export default App;
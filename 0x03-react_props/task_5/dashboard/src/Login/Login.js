import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import './Login.css';

import { getFullYear, getFooterCopy } from '../utils/utils';
import Notifications from '../Notifications/Notifications.js';
import Header from '../Header/Header.js';

function Login() {
  return (
    <React.Fragment>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email" >Email:</label>
        <input id="email" type="email" />
        <label htmlFor="password" >Password:</label>
        <input id="password" type="password" />
        <button>OK</button>
      </div>
    </React.Fragment>
  );
}

export default Login;
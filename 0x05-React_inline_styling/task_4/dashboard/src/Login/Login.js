import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <React.Fragment>
      <div>
        <p>Login to access the full dashboard</p>
        <div>
          <label htmlFor="email" >Email:</label>
          <input id="email" type="email" className={css(styles.inputLogin)} />
        </div>
        <div>
          <label htmlFor="password" >Password:</label>
          <input id="password" type="password" className={css(styles.inputLogin)} />
        </div>
        <button>OK</button>
      </div>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  inputLogin: {
    marginLeft: '4px',
    marginRight: '4px',
    border: 'none'
  }
});

export default Login;
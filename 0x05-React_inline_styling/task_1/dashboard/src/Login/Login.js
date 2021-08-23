import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <React.Fragment>
      <div className={css(styles.appBody)}>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email" >Email:</label>
        <input id="email" type="email" className={css(styles.inputLogin)} />
        <label htmlFor="password" >Password:</label>
        <input id="password" type="password" className={css(styles.inputLogin)} />
        <button>OK</button>
      </div>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  appBody: {
    height: '350px'
  },
  inputLogin: {
    marginLeft: '4px',
    marginRight: '4px'
  }
});

export default Login;
import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';

function Header() {
  return (
    <div className={css(styles.appHeader)}>
        <img src={logo} className={css(styles.appLogo)} alt="logo" />
        <h1>School dashboard</h1>
    </div>
  );
}

const styles = StyleSheet.create({
  appHeader: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: '#e0344b'
  },
  appLogo: {
    width: '200px'
  }
});

export default Header;
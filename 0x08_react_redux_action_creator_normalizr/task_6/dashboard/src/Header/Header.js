import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import AppContext from '../App/AppContext';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user, logOut } = this.context;
    return (
      <header className={css(styles.appHeader)}>
          <img src={logo} className={css(styles.appLogo)} alt="logo" />
          <h1>School dashboard</h1>
          {
            user.isLoggedIn && (
              <p id="logoutSection">
                Welcome <b>{user.email}</b>
                  <span onClick={logOut}><i>(logout)</i></span>
              </p>
            )
          }
      </header>
    );
  }
}

Header.contextType = AppContext;

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
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      enableSubmit: false,
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit(e) {
    e.preventDefault();
    this.setState({ isLoggedIn: true});
  }

  handleChangeEmail(e) {
    this.setState({ email: e.target.value });
    if (e.target.value.length > 0 && this.state.password.length > 0) {
      this.setState({ enableSubmit: true })
    } else {
      this.setState({ enableSubmit: false })
    }
  }

  handleChangePassword(e) {
    this.setState({ password: e.target.value });
    if (this.state.email.length > 0 && e.target.value.length > 0) {
      this.setState({ enableSubmit: true })
    } else {
      this.setState({ enableSubmit: false })
    }
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleLoginSubmit}>
          <p>Login to access the full dashboard</p>
          <div>
            <label htmlFor="email" >Email:</label>
            <input
              id="email"
              value={this.state.email}
              type="email"
              className={css(styles.inputLogin)}
              onChange={this.handleChangeEmail}
            />
          </div>
          <div>
            <label htmlFor="password" >Password:</label>
            <input
              id="password"
              value={this.state.password}
              type="password"
              className={css(styles.inputLogin)}
              onChange={this.handleChangePassword}
            />
          </div>
          <input type="submit" value="OK" disabled={!this.state.enableSubmit} />
        </form>
      </>
    );
  }
}

const styles = StyleSheet.create({
  inputLogin: {
    marginLeft: '4px',
    marginRight: '4px',
    border: 'none'
  }
});

export default Login;
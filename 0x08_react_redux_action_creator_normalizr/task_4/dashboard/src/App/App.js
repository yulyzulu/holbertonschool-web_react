import React from 'react';
import Notifications from '../Notifications/Notifications.js';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { StyleSheet, css } from 'aphrodite';
import { user, logOut } from './AppContext.js';
import AppContext from './AppContext.js';

const listCourses = [
  {id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 40}
];
// const listNotifications = [
//   { id: 1, type: "default", value: "New course available", },
//   { id: 2, type: "urgent", value: "New resume available", },
//   { id: 3, type: "urgent", html: { __html: getLatestNotification() }, },
// ];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyboardKeys = this.handleKeyboardKeys.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
    this.state = {
      displayDrawer: false,
      user: user,
      logOut: this.logOut,
      listNotifications: [
        { id: 1, type: "default", value: "New course available", },
        { id: 2, type: "urgent", value: "New resume available", },
        { id: 3, type: "urgent", html: { __html: getLatestNotification() }, },
      ],
    };
  };

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }
  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  handleKeyboardKeys(e) {
    if (e.keyCode === 72 && e.ctrlKey) {
      alert('Logging you out');
      this.state.logOut();
    }
  }

  componentDidMount() {
    if (typeof window === 'object') {
      document.addEventListener("keydown", this.handleKeyboardKeys);
    }
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyboardKeys);
  }

  logIn(email, password) {
    this.setState({ user: { email: email, password: password, isLoggedIn: true } });
  }

  logOut() {
    this.setState({ user: user });
  }

  markNotificationAsRead(id) {
    const newListNotifications = this.state.listNotifications.filter(item => item.id !== id);
    this.setState({ listNotifications: newListNotifications });
  }

  render() {
    const { displayDrawer, user, logOut, listNotifications } = this.state;
    const value = { user, logOut };

    return (
      <AppContext.Provider value={value}>
        <Notifications
          listNotifications={listNotifications}
          displayDrawer={displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
          markNotificationAsRead={this.markNotificationAsRead}
        />
        <div className="App">
          <Header /><hr className={css(styles.hrColor)} />
        </div>
          <div className={css(styles.appBody)}>
            {
              !user.isLoggedIn ?
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={this.logIn} />
              </BodySectionWithMarginBottom>
              :
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            }
            <BodySection title="News from the School">
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </BodySection>
          </div>
          <div className="App-footer">
            <Footer />
          </div>
      </AppContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  appBody: {
    margin: '30px'
  },
  hrColor: {
    backgroundColor: '#e0344b',
    border: 'none',
    height: '2px'
  }
});


export default App;
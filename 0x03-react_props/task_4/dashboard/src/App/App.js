import React from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications.js';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import CourseList from '../CourseList/CourseList';
import Proptypes from 'prop-types';

function App({ isLoggedIn }) {
  return (
    <React.Fragment>
      <Notifications />
      <div className="App">
        <Header /><hr />
      </div>
        <div className="App-body">
          {
            isLoggedIn ? <CourseList /> : <Login />
          }
        </div>
        <div className="App-footer">
          <Footer />
        </div>
    </React.Fragment>
  );
}

App.defaultProps = {
  isLoggedIn: false,
}

App.propTypes = {
  isLoggedIn: Proptypes.bool,
};

export default App;
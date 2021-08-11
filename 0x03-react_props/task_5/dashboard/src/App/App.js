import React from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications.js';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import CourseList from '../CourseList/CourseList';
import Proptypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';

function App({ isLoggedIn }) {
  const listCourses = [
    {id: 1, name: 'ES6', credit: 60},
    {id: 2, name: 'Webpack', credit: 20},
    {id: 3, name: 'React', credit: 40}
  ];

  const listNotifications = [
    {
      id: 1,
      type: "default",
      value: "New course available",
    },
    {
      id: 2,
      type: "urgent",
      value: "New resume available",
    },
    { id: 3,
      type: "urgent",
      html: { __html: getLatestNotification() },
    },
  ];

  return (
    <React.Fragment>
      <Notifications listNotifications={listNotifications} />
      <div className="App">
        <Header /><hr />
      </div>
        <div className="App-body">
          {
            !isLoggedIn ? <Login /> : <CourseList listCourses={listCourses} />
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
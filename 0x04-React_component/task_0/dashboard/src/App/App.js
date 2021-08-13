import React from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications.js';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listCourses: [
        {id: 1, name: 'ES6', credit: 60},
        {id: 2, name: 'Webpack', credit: 20},
        {id: 3, name: 'React', credit: 40}
      ],
      listNotifications: [
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
      ]
    };
  };

  render() {
    return (
      <React.Fragment>
        <Notifications listNotifications={this.state.listNotifications} />
        <div className="App">
          <Header /><hr />
        </div>
          <div className="App-body">
            {
              !this.props.isLoggedIn ? <Login /> : <CourseList listCourses={this.state.listCourses} />
            }
          </div>
          <div className="App-footer">
            <Footer />
          </div>
      </React.Fragment>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
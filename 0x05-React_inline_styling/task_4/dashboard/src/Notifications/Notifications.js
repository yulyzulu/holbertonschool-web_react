import React from 'react';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import NotificationItem from './NotificationItem';
import closeIcon from  '../assets/close-icon.png';
import { StyleSheet, css } from 'aphrodite';

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    return (
        <>
          <div className={css(styles.menuItem, styles.menuItemSmall)}>
            {
              !this.props.displayDrawer && 'Your notifications'
            }
          </div>
          { this.props.displayDrawer &&
              <div className={css(styles.notifications, styles.notificationSmall)}>
                  <button
                      style={{float: 'right', background: 'transparent', border: 'white'}}
                      aria-label="Close"
                      onClick={() => console.log('Close button has been clicked')}
                      >
                      <img src={closeIcon} alt="close-icon" style={{width: '15px', marginRight: '10px' }} />
                  </button>
                  <p>Here is the list of notifications</p>
                  <ul className={css(styles.ulStyle)}>
                      {
                          this.props.listNotifications.length === 0 &&
                          (<NotificationItem
                              type="default"
                              value="No new notification for now"
                              markAsRead={this.markAsRead}
                          />)
                      }
                      {
                          this.props.listNotifications.map((notification) => (
                              <NotificationItem
                                  key={notification.id}
                                  type={notification.type}
                                  value={notification.value}
                                  html={notification.html}
                                  markAsRead={this.markAsRead}
                                  id={notification.id}
                              />
                          ))
                      }
                  </ul>
              </div>
          }
      </>
    );
  }
}

const translateKeyframes = {
  '0%': {
    transform: 'translateY(0)',
  },
  '50%': {
    transform: 'translateY(0px)',
  },
  '75%': {
    transform: 'translateY(5px)',
  },
  '100%': {
    transform: 'translateY(5px)',
  },
};

const opacityKeyframes = {
  'from': {
    opacity: 0.5,
  },

  'to': {
    opacity: 1,
  }
};

const styles = StyleSheet.create({
  notifications: {
      float: 'right',
      borderWidth: '1px',
      borderStyle: 'dashed',
      borderColor: '#e0344b',
      padding: '3px'
  },
  menuItem: {
    textAlign: 'right',
    marginRight: '10px',
    backgroundColor: '#fff8f8',
    ":hover": {
      cursor: 'pointer',
      animationName: [opacityKeyframes, translateKeyframes],
      animationDuration: "1s, 0.5s",
      animationIterationCount: 3
    }
  },
  notificationSmall: {
    '@media (max-width: 900px)': {
      position: 'absolute',
      backgroundColor: 'white',
      height: '200vh',
      width: '100vw',
      border: 'none',
      fontSize: '20px',
    }
  },
  ulStyle: {
    '@media (max-width: 900px)': {
      padding: '0px',
      listStyle: 'none'
    }
  },
  menuItemSmall: {
    '@media (max-width: 900px)': {
      fontSize: '20px'
    }
  }
});

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;
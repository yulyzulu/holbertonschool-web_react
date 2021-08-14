import React from 'react';
import './Notifications.css';
import PropTypes from 'prop-types';

function NotificationItem({ type, html, value, markAsRead, id }) {
  if (value) {
    return <li data-notification-type={type} onClick={() => markAsRead(id)} >{value}</li>;
  } else {
    return <li data-notification-type={type} onClick={() => markAsRead(id)} dangerouslySetInnerHTML={html}></li>;
  }
}

NotificationItem.defaultProps = {
  type: 'default',
  value: '',
  html: {},
  markAsRead: (() => {}),
  id: 0
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  markAsRead: PropTypes.func,
  id: PropTypes.number
};

export default NotificationItem;
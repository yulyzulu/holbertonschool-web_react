import React from 'react';
import './Notifications.css';
import PropTypes from 'prop-types';

class NotificationItem extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { type, html, value, markAsRead, id } = this.props;
    if (value) {
      return <li data-notification-type={type} onClick={() => markAsRead(id)} >{value}</li>;
    } else {
      return <li data-notification-type={type} onClick={() => markAsRead(id)} dangerouslySetInnerHTML={html}></li>;
    }
  }
}

NotificationItem.defaultProps = {
  type: 'default',
  value: '',
  html: {},
  markAsRead: () => {},
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
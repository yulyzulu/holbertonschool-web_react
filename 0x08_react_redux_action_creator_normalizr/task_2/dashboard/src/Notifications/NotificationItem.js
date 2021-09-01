import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { type, html, value, markAsRead, id } = this.props;
    if (value) {
      return <li data-notification-type={type} className={css(type === 'default' ? styles.blue : styles.red, type === 'default' ? styles.blueSmall : styles.redSmall)} onClick={() => markAsRead(id)} >{value}</li>;
    } else {
      return <li data-notification-type={type} className={css(type === 'default' ? styles.blue : styles.red, type === 'default' ? styles.blueSmall : styles.redSmall)} onClick={() => markAsRead(id)} dangerouslySetInnerHTML={html}></li>;
    }
  }
}

const styles = StyleSheet.create({
  red: {
    color: 'red',
  },
  blue: {
    color: 'blue'
  },
  redSmall: {
    '@media (max-width: 900px)': {
      color: 'red',
      width: '100%',
      borderBottom: '1px solid black',
      fontSize: '20px',
      padding: '10px 8px'
    }
  },
  blueSmall: {
    '@media (max-width: 900px)': {
      color: 'blue',
      width: '100%',
      borderBottom: '1px solid black',
      fontSize: '20px',
      padding: '10px 8px'
    }
  }
});

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
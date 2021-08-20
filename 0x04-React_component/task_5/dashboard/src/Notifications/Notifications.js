import React from 'react';
import './Notifications.css';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import NotificationItem from './NotificationItem';
import closeIcon from  '../assets/close-icon.png';

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
                <div className="menuItem">
                    Your notifications
                </div>
                { this.props.displayDrawer &&
                    <div className="Notifications">
                        <button
                            style={{float: 'right', background: 'transparent', border: 'white'}}
                            aria-label="Close"
                            onClick={() => console.log('Close button has been clicked')}
                            >
                            <img src={closeIcon} alt="close-icon" style={{width: '15px'}} />
                        </button>
                        <p>Here is the list of notifications</p>
                        <ul>
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

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
};

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;
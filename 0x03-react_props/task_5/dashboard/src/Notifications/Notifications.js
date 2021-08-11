import React from 'react';
import './Notifications.css';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import NotificationItem from './NotificationItem';
import closeIcon from  '../assets/close-icon.png';

function Notifications({ displayDrawer, listNotifications }) {
    return (
        <>
            <div className="menuItem">
                Your notifications
            </div>
            { displayDrawer &&
                <div className="Notifications">
                    <button style={{float: 'right', background: 'transparent', border: 'white'}} aria-label="Close" onClick={() => console.log('Close button has been clicked')} >
                        <img src={closeIcon} alt="close-icon" style={{width: '15px'}} />
                    </button>
                    <p>Here is the list of notifications</p>
                    <ul>
                        {
                            listNotifications.length === 0 &&
                            (<NotificationItem type="default" value="No new notification for now" />)
                        }
                        {
                            listNotifications.map((notification) => (
                                <NotificationItem key={notification.id} type={notification.type} value={notification.value} html={notification.html} />
                            ))
                        }
                    </ul>
                </div>
            }
        </>
    );
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
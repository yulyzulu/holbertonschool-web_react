import React from 'react';
import './Notifications.css';
import Proptypes from 'prop-types';
import NotificationItem from './NotificationItem';
import closeIcon from  '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';

function Notifications({ displayDrawer }) {
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
                        <NotificationItem type="default" value="New course available" />
                        <NotificationItem type="urgent" value="New resume available" />
                        <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
                    </ul>
                </div>
            }
        </>
    );
}

Notifications.defaultProps = {
    displayDrawer: false,
};

Notifications.propTypes = {
    displayDrawer: Proptypes.bool,
};

export default Notifications;
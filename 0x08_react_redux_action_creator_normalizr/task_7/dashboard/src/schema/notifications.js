import * as data from '../../dist/notifications.json';
import { normalize, schema } from 'normalizr';

export const getAllNotificationsByUser = (userId) => {
  const notifications = normalizedData.entities.notifications;
  const messages = normalizedData.entities.messages;
  const userNotifications = [];

  for (const i in notifications) {
    if (notifications[i].author === userId) {
      userNotifications.push(messages[notifications[i].context]);
    }
  }
  return userNotifications;
};

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', { author: user, context: message });

export const normalizedData = normalize(data, [notification]);
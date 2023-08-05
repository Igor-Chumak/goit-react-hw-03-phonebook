import PropTypes from 'prop-types';
import { Message, NotificationBox } from './Notification.styled';

export const Notification = ({ children, message }) => {
  return (
    <NotificationBox>
      <Message>{message}</Message>
      {children}
    </NotificationBox>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
  children: PropTypes.element,
};

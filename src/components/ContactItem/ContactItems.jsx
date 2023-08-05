import PropTypes from 'prop-types';
import { Delete } from 'components';
import { ContactItem } from './ContactItems.styled';

export const ContactItems = ({ name, number, id }) => {
  return (
    <ContactItem>
      {name} : {number}
      <Delete type="button" id={id}>
        Delete
      </Delete>
    </ContactItem>
  );
};

ContactItems.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

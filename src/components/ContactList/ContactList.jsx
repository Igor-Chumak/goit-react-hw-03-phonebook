import PropTypes from 'prop-types';
import { ContactItems } from 'components';
import { ContactListBox } from './ContactList.styled';

export const ContactList = ({ contactsToList, deleteContactsFromList }) => {
  const handleDeleteButton = e => {
    deleteContactsFromList(e.target.id);
  };

  return (
    <ContactListBox onClick={handleDeleteButton}>
      {contactsToList.map(({ id, name, number }) => (
        <ContactItems name={name} number={number} id={id} key={id} />
      ))}
    </ContactListBox>
  );
};

ContactList.propTypes = {
  contactsToList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContactsFromList: PropTypes.func.isRequired,
};

import { ListContacts } from './Contacts.styled';
import { ContactsCard } from './Contacts.card';
import PropTypes from 'prop-types';

export const ContactsList = ({ options, onDelete }) => (
  <ListContacts>
    <ContactsCard options={options} onDelete={onDelete} />
  </ListContacts>
);

ContactsList.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

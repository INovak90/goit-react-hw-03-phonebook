import { ListItem, Delete } from './Contacts.styled';
import PropTypes from 'prop-types';

export const ContactsCard = ({ options, onDelete }) => {
  return options.map(({ name, id, number }) => {
    return (
      <ListItem key={id}>
        <p>{name}:</p>
        <p>{number}</p>
        <Delete type="button" onClick={() => onDelete(id)}>
          Delete
        </Delete>
      </ListItem>
    );
  });
};

ContactsCard.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

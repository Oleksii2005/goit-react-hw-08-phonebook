import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import {
  TableRow,
  NameCeil,
  NumberCeil,
  ActionCeil,
  Button,
} from './ContactItem.styled';

export const ContactItem = ({ contacts }) => {
  const dispatch = useDispatch();

  const onDelete = contact => {
    dispatch(deleteContact(contact.id));
    toast.success(
      <p>
        Contact <span style={{ color: 'green' }}>{contact.name}</span> deleted!
      </p>
    );
  };

  return contacts.map(contact => {
    return (
      <TableRow key={contact.id}>
        <NameCeil>{contact.name}</NameCeil>
        <NumberCeil>{contact.number}</NumberCeil>
        <ActionCeil>
          <Button type="button" onClick={() => onDelete(contact)}>
            Delete
          </Button>
        </ActionCeil>
      </TableRow>
    );
  });
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

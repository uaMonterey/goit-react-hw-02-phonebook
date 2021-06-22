import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onContactDelete }) => {
  return (
    <ul>
      {contacts.map(({ name, id, number }) => (
        <li key={id}>
          {name}: {number}
          <button onClick={() => onContactDelete(id)} type="button">
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onContactDelete: PropTypes.func.isRequired,
};

export default ContactList;

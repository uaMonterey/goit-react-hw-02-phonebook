import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ getFilter, filter }) => {
  return (
    <label className={s.label}>
      <p>Find contact by name</p>
      <input
        onChange={getFilter}
        value={filter}
        type="text"
        name="name"
        required
      />
    </label>
  );
};

Filter.propTypes = {
  getFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Filter;

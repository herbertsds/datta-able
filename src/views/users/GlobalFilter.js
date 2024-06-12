import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table';

export const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);
  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 1000);
  return (
    <span className="d-flex align-items-center justify-content-end">
      Search:{' '}
      <input
        className="form-control ms-2 w-auto"
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </span>
  );
};

GlobalFilter.propTypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func
};

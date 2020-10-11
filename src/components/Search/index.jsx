import React from 'react';
import { Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Search = ({ setSearchKey }) => {
  const handleSearch = ({ target: { value } }) => {
    setSearchKey(value);
  };

  return (
    <Input
      className="search-input"
      placeholder="Search..."
      onChange={handleSearch}
      fluid
    />
  );
};

Search.propTypes = {
  setSearchKey: PropTypes.func.isRequired,
};

export { Search };

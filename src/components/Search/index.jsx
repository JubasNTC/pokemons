import React from 'react';
import { Input } from 'semantic-ui-react';

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

export { Search };

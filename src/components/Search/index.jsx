import React from 'react';
import { Input } from 'semantic-ui-react';

const Search = ({ setSearchKey }) => {
  const handleSearch = ({ target: { value } }) => {
    setSearchKey(value);
  };

  return <Input placeholder="Search..." onChange={handleSearch} />;
};

export { Search };

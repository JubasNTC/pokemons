import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchKey, getFilteredData } from '../../actions';

const Search = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.pokemons);

  const handleSearch = ({ target: { value } }) => {
    dispatch(setSearchKey(value));
    dispatch(getFilteredData(data, value));
  };

  return (
    <div className="search">
      <i className="fas fa-search icon" />
      <input
        type={'text'}
        className={'search-bar'}
        onChange={handleSearch}
        placeholder="Find Your Pokemon"
      />
    </div>
  );
};

export default Search;

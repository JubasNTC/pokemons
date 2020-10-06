import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Pokemons from '../../components/Pokemons';
//import Search from '../../components/Search';
import Button from '../../components/Button/Button';

import { loadPokemons } from '../../actions/app';

const PokemonListPage = () => {
  const dispatch = useDispatch();
  const [offset, setOffset] = useState(0);

  const data = useSelector((state) => state.app.pokemons);
  const filteredData = useSelector((state) => state.filteredData);
  const finalData = filteredData !== null ? filteredData : data;

  const handleLoadMore = () => {
    setOffset(offset + 20);
  };

  useEffect(() => {
    loadPokemons(dispatch, offset);
  }, [dispatch, offset]);

  return (
    <>
      {/* <Search /> */}

      {data && <Pokemons pokemons={data} />}

      <Button text={'load more'} handleLoadMore={handleLoadMore} />
    </>
  );
};

export { PokemonListPage };

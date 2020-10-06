import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../../components/Button';
import { Pokemons } from '../../components/Pokemons';
import { Search } from '../../components/Search';

import { loadPokemons } from '../../actions/app';
import { filterPokemons } from '../../common/helpers';

const PokemonListPage = () => {
  const dispatch = useDispatch();
  const [offset, setOffset] = useState(0);
  const [searchKey, setSearchKey] = useState('');

  useEffect(() => {
    loadPokemons(dispatch, offset);
  }, [dispatch, offset]);

  const handleLoadMore = () => {
    setOffset(offset + 20);
  };

  const pokemons = useSelector(({ app }) => app.pokemons);
  const pokemonsToRender = searchKey
    ? filterPokemons(pokemons, searchKey)
    : pokemons;

  return (
    <>
      <Search setSearchKey={setSearchKey} />

      {pokemonsToRender && <Pokemons pokemons={pokemonsToRender} />}

      <Button text={'load more'} handleLoadMore={handleLoadMore} />
    </>
  );
};

export { PokemonListPage };

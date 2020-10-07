import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Grid } from 'semantic-ui-react';

import { Layout } from '../../components/Layout';
import { PokemonsList } from '../../components/PokemonsList';
import { Search } from '../../components/Search';

import { loadPokemons, setPokemonsList } from '../../actions/app';
import { filterPokemons } from '../../common/helpers';
import { INCRIMENT_OFFSET } from '../../common/constants';

const PokemonListPage = () => {
  const dispatch = useDispatch();
  const [offset, setOffset] = useState(0);
  const [searchKey, setSearchKey] = useState('');

  useEffect(() => {
    setPokemonsList(dispatch, []);
  }, [dispatch]);

  useEffect(() => {
    loadPokemons(dispatch, offset);
  }, [dispatch, offset]);

  const handleLoadMore = () => {
    setOffset(offset + INCRIMENT_OFFSET);
  };

  const isLoading = useSelector(({ app }) => app.isLoading);
  const pokemons = useSelector(({ app }) => app.pokemons);
  const pokemonsToRender = searchKey
    ? filterPokemons(pokemons, searchKey)
    : pokemons;

  return (
    <Layout>
      <Grid centered>
        <Grid.Row>
          <Search setSearchKey={setSearchKey} />
        </Grid.Row>
      </Grid>

      {pokemonsToRender && <PokemonsList pokemons={pokemonsToRender} />}
      {!isLoading && !searchKey && (
        <Grid centered>
          <Grid.Row>
            <Button onClick={handleLoadMore}>Load more</Button>
          </Grid.Row>
        </Grid>
      )}
    </Layout>
  );
};

export { PokemonListPage };

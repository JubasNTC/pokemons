import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Grid, Message } from 'semantic-ui-react';
import { isEmpty } from 'lodash';

import { Layout } from '../../components/Layout';
import { PokemonsList } from '../../components/PokemonsList';
import { Search } from '../../components/Search';

import { clearPokemosList, loadPokemons } from '../../actions/app';
import { filterPokemons } from '../../common/helpers';
import { INCRIMENT_OFFSET } from '../../common/constants';

const PokemonListPage = () => {
  const dispatch = useDispatch();
  const [offset, setOffset] = useState(0);
  const [searchKey, setSearchKey] = useState('');

  useEffect(() => {
    dispatch(clearPokemosList());
  }, [dispatch]);

  useEffect(() => {
    loadPokemons(dispatch, offset);
  }, [dispatch, offset]);

  const handleLoadMore = () => {
    setOffset(offset + INCRIMENT_OFFSET);
  };

  const pokemons = useSelector(({ app: { pokemons } }) => pokemons);
  const pokemonsToRender = searchKey
    ? filterPokemons(pokemons, searchKey)
    : pokemons;
  const isEmptySearchResult = searchKey && isEmpty(pokemonsToRender);

  return (
    <Layout>
      <Grid centered>
        <Grid.Row>
          <Search setSearchKey={setSearchKey} />
        </Grid.Row>
      </Grid>
      {isEmptySearchResult ? (
        <Message>Nothing found</Message>
      ) : (
        <PokemonsList pokemons={pokemonsToRender} />
      )}
      {!searchKey && (
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

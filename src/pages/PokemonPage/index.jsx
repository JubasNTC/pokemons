import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';

import { Layout } from '../../components/Layout';
import { PokemonInfo } from '../../components/PokemonInfo';
import { loadPokemonDetailedInfo } from '../../actions/app';
import GoBackButton from '../../components/GoBackButton';

const PokemonPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const pokemon = useSelector(({ app: { pokemonInfo } }) => pokemonInfo);

  useEffect(() => {
    loadPokemonDetailedInfo(dispatch, id);
  }, [dispatch, id]);

  return (
    <Layout>
      {pokemon && (
        <Segment>
          <GoBackButton />
          <PokemonInfo pokemon={pokemon} />
        </Segment>
      )}
    </Layout>
  );
};

export { PokemonPage };

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Layout } from '../../components/Layout';
import { PokemonInfo } from '../../components/PokemonInfo';
import { loadPokemonDetailedInfo } from '../../actions/app';
import GoBackButton from '../../components/GoBackButton';

const PokemonPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const pokemon = useSelector((state) => state.app.pokemonInfo);

  useEffect(() => {
    loadPokemonDetailedInfo(dispatch, id);
  }, [dispatch, id]);

  return (
    <Layout>
      {pokemon && (
        <>
          <GoBackButton />
          <PokemonInfo pokemon={pokemon} />
        </>
      )}
    </Layout>
  );
};

export { PokemonPage };

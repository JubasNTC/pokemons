import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { Layout } from '../../components/Layout';
import { PokemonInfo } from '../../components/PokemonInfo';
import { loadPokemonDetailedInfo } from '../../actions/app';

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
        <div className="pokemon-info">
          <Link to="/" as={ArrowBackIcon}>
            <ArrowBackIcon />
          </Link>
          <PokemonInfo pokemon={pokemon} />
        </div>
      )}
    </Layout>
  );
};

export { PokemonPage };

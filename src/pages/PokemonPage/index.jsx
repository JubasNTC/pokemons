import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import { Button } from '../../components/Button';
import { PokemonInfo } from '../../components/Pokemon';
import { loadPokemonDetailedInfo } from '../../actions/app';

const PokemonPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const pokemon = useSelector((state) => state.app.pokemonInfo);

  useEffect(() => {
    loadPokemonDetailedInfo(dispatch, id);
  }, [dispatch, id]);

  return (
    <div className="pokemon-container">
      <div className="pokemon-info">
        <Link to="/">
          <Button text={'go back'} />
        </Link>
        {pokemon && <PokemonInfo pokemon={pokemon} />}
      </div>
    </div>
  );
};

export { PokemonPage };

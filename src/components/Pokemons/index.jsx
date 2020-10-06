import React from 'react';
import { Link } from 'react-router-dom';

import { PokemonCard } from '../PokemonCard';

const Pokemons = ({ pokemons }) => {
  return (
    <div className="pokemon-container">
      {pokemons.map((item, index) => (
        <Link
          style={{ textDecoration: 'none' }}
          className={'pokemon'}
          key={index}
          to={`/pokemon/${item.name}`}
        >
          <PokemonCard className={'card'} id={index + 1} name={item.name} />
        </Link>
      ))}
    </div>
  );
};

export { Pokemons };

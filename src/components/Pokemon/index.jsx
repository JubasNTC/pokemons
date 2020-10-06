import React from 'react';
import { Link } from 'react-router-dom';

const PokemonInfo = ({ pokemon }) => {
  return (
    <div className="pokemon-wrapper">
      <div className="item">
        <h1>Sprites</h1>
        <img src={pokemon.sprites.front_default} alt="" />
        <img src={pokemon.sprites.back_default} alt="" />
        <img src={pokemon.sprites.front_shiny} alt="" />
        <img src={pokemon.sprites.back_shiny} alt="" />
      </div>
      <div className="item">
        <h1>detailedInfo</h1>
        {pokemon.stats.map((el) => (
          <p>
            {el.stat.name} {el.base_stat}{' '}
          </p>
        ))}
      </div>
      <div className="item">
        <h2>Abilities</h2>
        {pokemon.abilities.map((el) => (
          <Link to={`/ability/${el.ability.name}`}>
            <p>{el.ability.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export { PokemonInfo };

import React from 'react';
import { Card } from 'semantic-ui-react';
import shortid from 'shortid';

import { PokemonCard } from '../PokemonCard';
import PropTypes from 'prop-types';

const PokemonsList = ({ pokemons }) => {
  return (
    <Card.Group className="pokemos-list" centered>
      {pokemons.map(({ name }, index) => (
        <PokemonCard key={shortid.generate()} id={index + 1} name={name} as />
      ))}
    </Card.Group>
  );
};

PokemonsList.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export { PokemonsList };

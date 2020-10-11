import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const PokemonCard = ({ name, id }) => (
  <Card to={`/pokemon/${name}`} as={Link}>
    <Image
      src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
      wrapped
      ui={false}
    />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
    </Card.Content>
  </Card>
);

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export { PokemonCard };

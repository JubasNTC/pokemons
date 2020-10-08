import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react';

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

export { PokemonCard };

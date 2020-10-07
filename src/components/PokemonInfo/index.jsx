import React from 'react';
import { Grid, Image, Segment } from 'semantic-ui-react';

import { StatsList } from '../StatsList';
import { AbilitiesList } from '../AbilitiesList';

const PokemonInfo = ({ pokemon }) => {
  return (
    <Segment size="big">
      <h1>Sprites</h1>
      <Grid>
        <Grid.Row>
          <Image src={pokemon.sprites.front_default} size="tiny" />
          <Image src={pokemon.sprites.back_default} size="tiny" />
          <Image src={pokemon.sprites.front_shiny} size="tiny" />
          <Image src={pokemon.sprites.back_shiny} size="tiny" />
        </Grid.Row>
      </Grid>
      <h2>Stast info:</h2>
      <StatsList stats={pokemon.stats} />
      <h2>Abilities:</h2>
      <AbilitiesList abilities={pokemon.abilities} />
    </Segment>
  );
};

export { PokemonInfo };

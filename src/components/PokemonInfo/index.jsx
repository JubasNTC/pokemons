import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

import { StatsList } from '../StatsList';
import { AbilitiesList } from '../AbilitiesList';
import PropTypes from 'prop-types';

const PokemonInfo = ({
  pokemon: {
    abilities,
    stats,
    sprites: { front_default, back_default, front_shiny, back_shiny },
  },
}) => {
  return (
    <>
      <h1>Sprites</h1>
      <Grid>
        <Grid.Row>
          <Image src={front_default} size="tiny" />
          <Image src={back_default} size="tiny" />
          <Image src={front_shiny} size="tiny" />
          <Image src={back_shiny} size="tiny" />
        </Grid.Row>
      </Grid>
      <h2>Stast info:</h2>
      <StatsList stats={stats} />
      <h2>Abilities:</h2>
      <AbilitiesList abilities={abilities} />
    </>
  );
};

AbilitiesList.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export { PokemonInfo };

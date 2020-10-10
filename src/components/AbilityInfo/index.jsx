import React from 'react';
import { List } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const AbilityInfo = ({ ability }) => {
  return (
    <List>
      {ability.effect_entries.map(({ effect, short_effect }) => {
        return (
          <List.Item key={shortid.generate()}>
            <List.Content>{effect}</List.Content>
            <List.Content>{short_effect}</List.Content>
          </List.Item>
        );
      })}
    </List>
  );
};

AbilityInfo.propTypes = {
  ability: PropTypes.object.isRequired,
};

export { AbilityInfo };

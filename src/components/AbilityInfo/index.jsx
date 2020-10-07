import React from 'react';
import { List } from 'semantic-ui-react';
import shortid from 'shortid';

const AbilityInfo = ({ ability }) => {
  return (
    <List>
      {ability.effect_entries.map(({ effect, short_effect }, index) => {
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

export { AbilityInfo };

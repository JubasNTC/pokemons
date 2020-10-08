import React from 'react';
import { List } from 'semantic-ui-react';
import shortid from 'shortid';

const StatsList = ({ stats }) => {
  return (
    <List>
      {stats.map(({ stat, base_stat }) => (
        <List.Item
          key={shortid.generate()}
          content={`${stat.name} ${base_stat}`}
        />
      ))}
    </List>
  );
};

export { StatsList };

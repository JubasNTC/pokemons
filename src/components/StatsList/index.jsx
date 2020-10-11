import React from 'react';
import { List } from 'semantic-ui-react';
import PropTypes from 'prop-types';
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

StatsList.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export { StatsList };

import React from 'react';
import { Link } from 'react-router-dom';
import { List } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const AbilitiesList = ({ abilities }) => {
  return (
    <List>
      {abilities.map(({ ability: { name } }) => (
        <List.Item
          to={`/ability/${name}`}
          key={shortid.generate()}
          content={name}
          as={Link}
        />
      ))}
    </List>
  );
};

AbilitiesList.propTypes = {
  abilities: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export { AbilitiesList };

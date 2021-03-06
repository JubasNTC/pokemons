import React from 'react';

import { Container, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <Container className="layout">
      <Grid>
        <Grid.Column>{children}</Grid.Column>
      </Grid>
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Layout };

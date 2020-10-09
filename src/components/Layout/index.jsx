import React from 'react';

import { Container, Grid } from 'semantic-ui-react';

const Layout = ({ children }) => {
  return (
    <Container className="layout">
      <Grid>
        <Grid.Column>{children}</Grid.Column>
      </Grid>
    </Container>
  );
};

export { Layout };

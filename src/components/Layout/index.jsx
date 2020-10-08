import React from 'react';

import { Container } from 'semantic-ui-react';

const Layout = ({ children }) => {
  return <Container className="layout-page">{children}</Container>;
};

export { Layout };

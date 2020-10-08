import React from 'react';

import { Layout } from '../../components/Layout';
import { ErrorMessage } from '../../components/ErrorMessage';

const ErrorPage = () => (
  <Layout>
    <ErrorMessage
      header="Error message"
      text="An error occurred while accessing the server."
    />
  </Layout>
);

export { ErrorPage };

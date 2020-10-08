import React from 'react';
import { withRouter } from 'react-router';
import { Button } from 'semantic-ui-react';

const GoBackButton = ({ history: { goBack } }) => {
  return <Button icon="angle left" onClick={goBack} />;
};

export default withRouter(GoBackButton);

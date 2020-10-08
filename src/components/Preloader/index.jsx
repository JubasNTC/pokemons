import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

const Preloader = () => {
  return (
    <>
      <Dimmer active inverted>
        <Loader size="huge" inverted>
          Loading...
        </Loader>
      </Dimmer>
    </>
  );
};

export { Preloader };

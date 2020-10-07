import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';

import { Layout } from '../../components/Layout';
import { AbilityInfo } from '../../components/AbilityInfo';
import { loadAbilityInfo } from '../../actions/app';
import GoBackButton from '../../components/GoBackButton';

const AbilityPage = () => {
  const dispatch = useDispatch();
  const ability = useSelector((state) => state.app.abilityInfo);
  const { id } = useParams();

  useEffect(() => {
    loadAbilityInfo(dispatch, id);
  }, [dispatch, id]);

  return (
    <Layout>
      {ability && (
        <Segment size="big">
          <GoBackButton />
          <h1>{id}</h1>
          <AbilityInfo ability={ability} />
        </Segment>
      )}
    </Layout>
  );
};

export { AbilityPage };

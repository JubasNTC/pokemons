import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

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
        <div className="pokemon-info">
          <GoBackButton />
          <AbilityInfo ability={ability} />
        </div>
      )}
    </Layout>
  );
};

export { AbilityPage };

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadAbilityInfo } from '../../actions';

export default () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const abilityInfo = useSelector(state => state.abilityInfo);

  useEffect(() => {
    loadAbilityInfo(dispatch, id);
  }, [dispatch, id]);

  return (
    <>
      {abilityInfo &&
        abilityInfo.effect_entries.map(({ effect, short_effect }) => {
          return (
            <div>
              <p>{effect}</p>
              <p>{short_effect} </p>
            </div>
          );
        })}
    </>
  );
};

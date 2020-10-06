import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadDetailedInfoAsync } from '../../actions';

const Pokemon = props => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const detailedInfo = useSelector(state => state.detailedInfo);

  useEffect(() => {
    loadDetailedInfoAsync(dispatch, id);
  }, [dispatch, id]);

  console.log(detailedInfo);

  return (
    <>
      {detailedInfo && (
        <div className="pokemon-wrapper">
          <div className="item">
            <h1>Sprites</h1>
            <img src={detailedInfo.sprites.front_default} alt="" />
            <img src={detailedInfo.sprites.back_default} alt="" />
            <img src={detailedInfo.sprites.front_shiny} alt="" />
            <img src={detailedInfo.sprites.back_shiny} alt="" />
          </div>
          <div className="item">
            <h1>detailedInfo</h1>
            {detailedInfo.stats.map(el => (
              <p>
                {el.stat.name} {el.base_stat}{' '}
              </p>
            ))}
          </div>
          <div className="item">
            <h2>Abilities</h2>
            {detailedInfo.abilities.map(el => (
              <Link to={`/ability/${el.ability.name}`}>
                <p>{el.ability.name}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Pokemon;

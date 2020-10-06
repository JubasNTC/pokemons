import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { PokemonListPage } from '../pages/PokemonListPage';
import { Loader } from '../components/Loader';
//import PokemonPage from '../pages/PokemonPage';
//import AbilityPage from '../pages/AbilityPage';

const Router = () => {
  const isLoading = useSelector((state) => state.app.isLoading);
  const appReady = useSelector((state) => state.app.appReady);

  return (
    <>
      <Switch>
        <Route path="/" exact component={PokemonListPage} />
        {/* <Route path="/pokemon/:id" component={PokemonPage} />
      <Route path="/ability/:id" component={AbilityPage} /> */}
      </Switch>
      {isLoading && <Loader />}
    </>
  );
};

export { Router };

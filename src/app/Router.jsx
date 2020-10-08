import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { AbilityPage } from '../pages/AbilityPage';
import { PokemonListPage } from '../pages/PokemonListPage';
import { Preloader } from '../components/Preloader';
import { PokemonPage } from '../pages/PokemonPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { ErrorPage } from '../pages/ErrorPage';

const Router = () => {
  const isLoading = useSelector((state) => state.app.isLoading);
  const isFailedRequest = useSelector((state) => state.app.isFailedRequest);

  return (
    <>
      <Switch>
        <Route path="/" exact component={PokemonListPage} />
        <Route path="/pokemon/:id" component={PokemonPage} />
        <Route path="/ability/:id" component={AbilityPage} />
        <Route component={NotFoundPage} />
      </Switch>
      {isLoading && <Preloader />}
      {isFailedRequest && <ErrorPage />}
    </>
  );
};

export { Router };

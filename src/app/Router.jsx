import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AbilityPage } from '../pages/AbilityPage';
import { PokemonListPage } from '../pages/PokemonListPage';
import { PokemonPage } from '../pages/PokemonPage';
import { NotFoundPage } from '../pages/NotFoundPage';

const Router = () => (
  <Switch>
    <Route path="/" exact component={PokemonListPage} />
    <Route path="/pokemon/:id" component={PokemonPage} />
    <Route path="/ability/:id" component={AbilityPage} />
    <Route component={NotFoundPage} />
  </Switch>
);

export { Router };

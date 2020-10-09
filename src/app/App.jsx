import React from 'react';
import { useSelector } from 'react-redux';

import { Preloader } from '../components/Preloader';
import { ErrorPage } from '../pages/ErrorPage';

import { Router } from './Router';

const App = () => {
  const isLoading = useSelector(({ app: { isLoading } }) => isLoading);
  const isError = useSelector(({ app: { isError } }) => isError);

  return (
    <>
      <Router />
      {isLoading && <Preloader />}
      {isError && <ErrorPage />}
    </>
  );
};

export { App };

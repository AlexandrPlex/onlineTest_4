import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Footer } from 'components/Footer';
import { ContainerHeader } from 'containers/ContainerHeader';

import { HomePage } from 'pages/HomePage';
import { NotFoundPage } from 'pages/NotFoundPage';

export const router = (
  <div className='wrapper'>
    <ContainerHeader />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/login' component={HomePage} />
      <Route path='/student' component={HomePage} />
      <Route path='/admin' component={HomePage} />
      <Route path='/teacher' component={HomePage} />
      <Route component={NotFoundPage} />
    </Switch>
    <Footer />
  </div>
);

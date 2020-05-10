import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ActiveLastBreadcrumb from './ActiveLastBreadcrumb_M';
import SearchReturn from './SearchReturn';
import ArticleCard from './ArticleCard';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import ImgCard from './ImgCard_M.js';

const App = () => (
  <BrowserRouter>
    <ActiveLastBreadcrumb />
    <h1>Future Home of World View!</h1>
    <Switch>
      <Route path='/search' component={ArticleCard} />
      <Route path='/imgCard' component={ImgCard} />
      <Route path='/login' component={LoginForm} />
      <Route path='/signup' component={SignupForm} />
      <Route exact path='/' component={SearchReturn} />
    </Switch>
  </BrowserRouter>
);

export default App;

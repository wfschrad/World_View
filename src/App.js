import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navigation from './Navigation';
import SearchReturn from './SearchReturn';
import ArticleCard from './ArticleCard';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import ImgCard from './ImgCard_M';
import FetchTest from './FetchTest';
import CategorySelect from './CategorySelect';

const App = () => (
  <BrowserRouter>
    <Navigation />
    <h1>Future Home of World View!</h1>
    <Switch>
      <Route path='/search' component={ArticleCard} />
      <Route path='/imgCard' component={ImgCard} />
      <Route path='/login' component={LoginForm} />
      <Route path='/signup' component={SignupForm} />
      <Route path='/fetchTest' component={FetchTest} />
      <Route path='/categories' component={CategorySelect}/>
      <Route exact path='/' component={SearchReturn} />
    </Switch>
  </BrowserRouter>
);

export default App;

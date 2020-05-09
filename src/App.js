import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ActiveLastBreadcrumb from './ActiveLastBreadcrumb_M';

const App = () => (
  <>
    <BrowserRouter>
      <ActiveLastBreadcrumb />
      <h1>Future Home of World View!</h1>
    </BrowserRouter>
  </>
);

export default App;

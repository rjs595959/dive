import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Main from './container/Main'
import Search from './container/Search'

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Main} />
      <Route path='/search' component={Search} />
    </BrowserRouter>
  )
}

export default App;
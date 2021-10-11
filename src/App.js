import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Home from './components/home/Home';
import Favorites from './components/notes/Favorites';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/favorites' component={Favorites} />
      </Switch>
    </Router>
  );
}

export default App;
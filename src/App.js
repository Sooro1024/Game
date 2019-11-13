import React from 'react';
import { Snake } from './components/snake/Snake';
import { Navigation } from '../src/components/comon/NavBar';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { Game } from './components/matchPic/Game';

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route path='/' exact component={() => <div>HOME</div>} />
          <Route path='/snake' component={Snake} />
          <Route path='/match-the-picture' component={Game} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

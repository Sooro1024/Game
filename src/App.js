import React from 'react';
import { Snake } from './components/snake/Snake';
import { Navigation } from '../src/components/comon/NavBar';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { Game as MatchPic } from './components/matchPic/Game';
import { Puzzle15 } from './components/15Puzzle/Puzzle15';

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route path='/' exact component={() => <div>HOME</div>} />
          <Route path='/snake' component={Snake} />
          <Route path='/match-the-picture' component={MatchPic} />
          <Route path='/puzzle-15' component={Puzzle15} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

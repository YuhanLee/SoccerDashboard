import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import 'react-grid-layout/css/styles.css' 
import 'react-resizable/css/styles.css' 
import Dashboard from './components/Dashboard';
import LandingPage from './components/LandingPage'; 
import SelectGames from './components/SelectGames'; 
import SearchGames from './components/SearchGames'; 


class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route exact path='/dashboard' component={Dashboard}/>
          <Route exact path='/selectGames' component={SelectGames}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import 'react-grid-layout/css/styles.css' 
import 'react-resizable/css/styles.css' 
import Dashboard from './components/Dashboard';
import LandingPage from './components/LandingPage'; 

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          {/* <Route exact path='/' component={Dashboard}/> */}
          <Route exact path='/' component={LandingPage}/>
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

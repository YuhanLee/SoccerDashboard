import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import 'react-grid-layout/css/styles.css' 
import 'react-resizable/css/styles.css' 
import Grid from './components/Grid';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Grid}/>
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

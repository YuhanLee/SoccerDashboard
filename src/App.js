import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import 'react-grid-layout/css/styles.css' 
import 'react-resizable/css/styles.css' 
import MyFirstGrid from './components/MyFirstGrid';
class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={MyFirstGrid}/>
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

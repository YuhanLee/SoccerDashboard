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
<<<<<<< HEAD
          {/* <Route exact path='/' component={Dashboard}/> */}
          {/* <Route exact path='/' component={LandingPage}/> */}
          <Route exact path='/' component={SelectGames}/>
=======
          <Route exact path='/' component={LandingPage}/>
          <Route exact path='/dashboard' component={Dashboard}/>
          <Route exact path='/selectGames' component={SelectGames}/>
>>>>>>> 4b8f6636942b94d933d1968ff715b50ebfc9e818
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

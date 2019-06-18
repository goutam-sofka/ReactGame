import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from '../components/homePage';
// import Header from '../components/header';
import CharacterSelection from '../components/characterSelection';
import History from '../components/history';
import NotFound from '../components/notFound';
import Battle from '../components/battle';
import EasterEggBattle from '../components/easterEggBattle';
import Header from '../components/header';

const Routes = () => {
  return (
    <Router>
    <Header />
      <Switch>
        <Route path='/' component={HomePage} exact={true} />
        <Route path='/character-selection' component={CharacterSelection} />
        <Route path='/history' component={History} />
        <Route path='/battle' component={Battle} />
        <Route path='/easter-egg-battle' component={EasterEggBattle} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default Routes
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component' ;



function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path={'/'} component={HomePage} />
        <Route exact path={'/shop'} component={Shop} />
        <Route path = {'/shop/:topicId '} component = {Shop}></Route>
      </Switch>
    </div>
  );
}

export default App;

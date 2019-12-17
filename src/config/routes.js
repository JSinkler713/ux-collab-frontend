import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import SignUp1 from '../components/SignUp1';
import SignUp2 from '../components/SignUp2';
import SignUp3 from '../components/SignUp3';

export default (
  <Switch>
    <Route exact path='/' component={ Home }/>
    <Route path='/SignUp1' component={ SignUp1 }/>
    <Route path='/SignUp2' component={ SignUp2 }/>
    <Route path='/SignUp3' component={ SignUp3 }/>
  </Switch>
);


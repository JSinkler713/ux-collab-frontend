import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import SignUp1 from '../components/SignUp1';
import SignUp2 from '../components/SignUp2';
import SignUp3 from '../components/SignUp3';
import SignUp4 from '../components/SignUp4';

export default (
  <Switch>
    <Route exact path='/' component={ Home }/>
    <Route path='/SignUp1' component={ SignUp1 }/>
    <Route path='/SignUp2' render={ routerProps=> {
      return <SignUp2  frequencyChoose={ this.topicChoose } />
    }}/>
    <Route path='/SignUp3' component={ SignUp3 }/>
    <Route path='/SignUp4' render={ routerProps=> {
      return <SignUp4  frequency={ this.state.frequency } />
    }}/>
  </Switch>
);


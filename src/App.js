import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {  Link } from 'react-router-dom'
import routes from './config/routes'
import Home from './components/Home'
import { Switch, Route } from 'react-router-dom';
import SignUp1 from './components/SignUp1';
import SignUp2 from './components/SignUp2';
import SignUp3 from './components/SignUp3';
import SignUp4 from './components/SignUp4';

class App extends Component {
  state = {
    topics: [],
    frequency:'',
    email:'',
    firstName:'',
    lastName:''
  }
  handleEmail = (e) => {
    this.setState({email: (e.target.value)})
  }
  handleFirstName = (e) => {
    this.setState({firstName: (e.target.value)})
  }
  handleLastName = (e) => {
    this.setState({lastName: (e.target.value)})
  }
  frequencyChoose = (e)=> {
    e.preventDefault();
    this.setState({frequency: e.target.value}) 
    console.log(e.target.value)
  }
  //gatherInfo = (e)=> {
   // console.log(e);
 // }


  topicChoose = (e)=> {
    e.preventDefault();
    this.setState({topics: [...this.state.topics, e.target.value]}) 
    console.log(e.target.value)
  }
  render() {
    return (
        <div className="App">
          <Switch>
            <Route exact path='/' component={ Home }/>
            <Route path='/SignUp1' render={ routerProps=> {
              return <SignUp1 handleFirstName={this.handleFirstName} handleLastName={this.handleLastName} handleEmail={ this.handleEmail } />
              }} />
            <Route path='/SignUp2' render={ routerProps=> {
              return <SignUp2  topics={this.state.topics} topicChoose={ this.topicChoose } />
              }} />
          
          <Route path='/SignUp3' render={routerProps=> {
              return <SignUp3 frequencyChoose={ this.frequencyChoose } />
            }} />
   
          <Route path='/SignUp4' render={ routerProps=> {
              return <SignUp4 frequency={ this.state.frequency } />
            }} />

          </Switch>
        </div>
    );
  }
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom'
import routes from './config/routes'

function App() {
  return (
    <div className="App">
      <Link to={'/SignUp1'}>Sign-up</Link>
      <Link to={'/'}> Home </Link>
      {routes}
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom'
import routes from './config/routes'
import Home from './components/Home'
function App() {
  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;

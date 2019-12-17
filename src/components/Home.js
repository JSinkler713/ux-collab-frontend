import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <header className="home">
      VR GAME
      </header>
      <div className="nav">
        <div>Ipsum</div><div>Lorem</div><div><Link to={'/SignUp1'}>Subscription</Link></div>
      </div>
    </div>
  );
};

export default Home;

import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <header className="home">
      Panda VR
      </header>
      <div className="nav">
        <div>Ipsum</div><div>Lorem</div><div><Link className='homelinks' to={'/SignUp1'}>Subscription</Link></div>
      </div>
      <img src='https://images.unsplash.com/photo-1513719172228-06ca20578d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80' alt='tronimage' />
    </div>
  );
};

export default Home;

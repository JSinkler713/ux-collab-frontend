import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <h2>
      I am the Home page

      <Link to={'/SignUp1'}> Next</Link>
    </h2>
  );
};

export default Home;

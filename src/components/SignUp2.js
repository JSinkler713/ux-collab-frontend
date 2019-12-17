import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import routes from '../config/routes'

class SignUp2 extends Component {

  render(){

    return(
      <div>
        <p>Choose your favorite topic</p>
        <Link to={'/SignUp3'}> Go to signup 3</Link>
      </div>
    )
  }
}
export default SignUp2

import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import routes from '../config/routes'

class SignUp2 extends Component {

  render(){

    return(
      <div>
        <div className="progressBar">
          <div>&#60;</div><div>2 of 3</div><div><Link to={'/'}>&#935;</Link></div>
        </div>
        <p>How often do you want to hear from us?</p>
      </div>
    )
  }
}
export default SignUp2

import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import routes from '../config/routes'   
class SignUp1 extends Component {

  render(){

    return(
      <div>
      <div>
        <p>Stay up-to-date with the latest VR news!</p>
      </div>
      <div>
      <form>
    <div className="emailInput">E-mail Address*<span className="info">&#8505;</span></div>
        <input>
        </input>
      </form>
      </div>
        <div>
      <Link to={'/SignUp2'}> Next</Link>
        </div>
        </div>
    )
  }
}
export default SignUp1

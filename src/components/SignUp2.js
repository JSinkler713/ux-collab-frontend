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
        <p>Choose which topics you want to follow!</p>
        <div className="topicsContainer">
          <button className="topic">Topic</button>
          <button className="topic">Topic</button>
          <button className="topic">Topic</button>
          <button className="topic">Topic</button>
          <button className="topic">Topic</button>
          <button className="topic">Topic</button>
          <button className="topic">Topic</button>
          <button className="topic">Topic</button>
        </div>
        <Link to={'/SignUp3'}> Go to signup 3</Link>
      </div>
    )
  }
}
export default SignUp2

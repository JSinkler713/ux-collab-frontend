import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import routes from '../config/routes'

class SignUp4 extends Component {

  render(){
    return(
      <div>
        <div className="progressBar">
          <div></div>
          <div>3 of 3</div>
          <div><Link to={'/'}>&#935;</Link></div>
        </div>
        <div>  
          <p>Thank you for signing up!</p>
        </div>
        <div className='terms'>
          <p>You will receive our newsletter {this.props.frequency}</p>
          <p>We'll send you a confirmation to the email you provided</p>
        </div>    
      </div>
    )
  }
}
export default SignUp4

import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import routes from '../config/routes'

class SignUp3 extends Component {


  render(){
    return(
      <div>
        <div className="progressBar">
          <div>&#60;</div>
          <div>3 of 3</div>
          <div><Link to={'/'}>&#935;</Link></div>
        </div>
        <div>
          <p>How often do you want to hear from us?</p>
        </div>
        <form> 
          <button value='Daily' onClick={this.props.frequencyChoose} className="frequency">Daily</button>
          <button value='Weekly' onClick={this.props.frequencyChoose} className="frequency">Weekly</button>
          <button value='Monthly' onClick={this.props.frequencyChoose} className="frequency">Monthly</button>
          <button value='Annually' onClick={this.props.frequencyChoose} className="frequency">Annually</button>
        </form>
      <Link className='bottomLink' to={'/SignUp4'}> Next</Link>
      </div>
    )
  }
}
export default SignUp3

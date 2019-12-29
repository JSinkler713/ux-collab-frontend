import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import routes from '../config/routes'  

class SignUp1 extends Component {

  render(){

    return(
      <div>
        <div className="progressBar">
          <div>&#60;</div><div>1 of 3</div><div><Link to={'/'}>&#935;</Link></div>
        </div>
      <div>
        <p>Stay up to date with your favorite Panda VR news!</p>
      </div>
      <div>
      <form>
    <div>E-mail Address*<span className="info">&#8505;</span></div>
        <input onChange={this.props.handleEmail} className='email' placeholder='sophia.my.song@gmail.com'>
        </input>
    <div>Name*<span className="info">&#8505;</span></div>
        <input className='first' placeholder='sophia'></input>
        <input className='last' placeholder='song'></input>
      </form>
      </div>
        <div className='terms'>
          <p>By signing up, you are agreeing to out Terms of Services and Privacy Policy. You can unsubscribe at any time.</p>
        </div>    
        <div>
      <Link className='bottomLink' to={'/SignUp2'}> Next</Link>
        </div>
        </div>
    )
  }
}
export default SignUp1

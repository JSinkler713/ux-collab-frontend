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
          <button onClick={this.props.topicChoose} value='games' className={ this.props.topics.includes("games") ? 'topic active' : 'topic' }>Games</button>
          <button onClick={this.props.topicChoose} value='tech' className={ this.props.topics.includes("tech") ? 'topic active' : 'topic' }>Tech</button>
          <button onClick={this.props.topicChoose} value='sales' className={ this.props.topics.includes("sales") ? 'topic active' : 'topic' }>Sales</button>
          <button onClick={this.props.topicChoose} value='promos' className={ this.props.topics.includes("promos") ? 'topic active' : 'topic' }>Promos</button>
          <button onClick={this.props.topicChoose} value='code' className={ this.props.topics.includes("code") ? 'topic active' : 'topic' }>Code</button>
          <button onClick={this.props.topicChoose} value='products' className={ this.props.topics.includes("products") ? 'topic active' : 'topic' }>Products</button>
          <button onClick={this.props.topicChoose} value='updates' className={ this.props.topics.includes("updates") ? 'topic active' : 'topic' }>Updates</button>
        </div>

        <Link className='bottomLink' to={'/SignUp3'}> Go to signup 3</Link>
      </div>
    )
  }
}
export default SignUp2

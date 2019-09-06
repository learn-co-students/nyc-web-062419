import React from 'react';
import Signup from './Signup';
import Login from './Login';

class Home extends React.Component {
  state = {
    showLogin: false
  }
  
  handleClick = () => this.setState({showLogin: !this.state.showLogin})
  
  render() {
    return (
      <div>
        <h1 className={'center'}>Welcome {this.props.user ? this.props.user.username : null}</h1>
        <div className={'center'} style={{fontSize: '24px', marginTop: '20px'}}>
          Please login or signup
          {
            this.state.showLogin 
              ? <Login setUser={this.props.setUser} />
              : <Signup setUser={this.props.setUser} />
          }
          <div onClick={this.handleClick}>
            <input type="checkbox" name="showLogin" checked={this.state.showLogin} readOnly/>
            <label>Already a member?</label>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;

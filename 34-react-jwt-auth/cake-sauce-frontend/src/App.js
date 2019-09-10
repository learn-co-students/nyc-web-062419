import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import './App.css';

import Home from './Components/Home';
import Navbar from './Components/Navbar';
import FoOhFo from './Components/FoOhFo';
import IndexContainer from './Containers/IndexContainer';
import RolesContainer from './Containers/RolesContainer';

class App extends Component {
  state = {
    mvpArray: [],
    user: null
  };

  // CDM
  componentDidMount() {
    // check if state.user is null
    // check if localstorage has a userid
    // then fetch 
    const token = localStorage.getItem('token')
    if (token) {
      fetch(`http://localhost:4000/api/v1/autologin`, {
        headers: {
          'accept': 'application/json', 
          Authorization: token
        }
      })
        .then(response => response.json())
        .then(data => {
          this.setState({user: data})
          console.log(data)
          this.props.history.push('/members')
        })        
    }
  }

  clickHandler = memberObj => {

    fetch('http://localhost:4000/api/v1/favorite', {
      method: 'POST',
      body: JSON.stringify({
        user_id: this.state.user.id,
        member_id: memberObj.id
      }),
      headers: {
        'content-type': 'application/json',
        accept: 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
    let newArray = [memberObj, ...this.state.mvpArray];
    this.setState({ mvpArray: newArray });
  };

  removeClickHandler = memberObj => {
    let newArray = this.state.mvpArray.filter(member => member.id !== memberObj.id);
    this.setState({ mvpArray: newArray });
  };

  setUser = user => {
    this.setState({user: user})
  }

  render() {
    console.log('APP STATE USER', this.state.user)
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/members" render={() => {
            return (
              <div>
                <IndexContainer
                  members={this.state.membersArray}
                  clickHandler={this.clickHandler}
                />
              </div>
            )
          }} />
          <Route 
            path="/favorites" 
            render={() => {
              return <RolesContainer members={this.state.mvpArray} clickHandler={this.removeClickHandler} />} 
            }
          />
          <Route exact path="/" render={() => <Home user={this.state.user} setUser={this.setUser} />}
          />
          <Route component={FoOhFo} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);


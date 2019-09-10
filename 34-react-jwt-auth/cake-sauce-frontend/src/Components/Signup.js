import React, { Component } from 'react'
import { withRouter } from 'react-router'

class Signup extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = e => this.setState({[e.target.name]: e.target.value})

  handleSubmit = e => {
    e.preventDefault()
    fetch('http://localhost:4000/api/v1/signup', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('userId', data.id)
        console.log(data)
        this.props.setUser(data)
        this.props.history.push('/members')
      })

    this.setState({
      username: '',
      password: ''
    })
  }

  render() {
    console.log('SIGN UP PROPS: ', this.props)
    return (
      <div>
        <h1>Signup</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Username: </label>
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
          <label>Password: </label>
          <input type="text" name="password" value={this.state.password} onChange={this.handleChange}/>
          <button>signup</button>
        </form>
      </div>
    )
  }
}

export default withRouter(Signup)
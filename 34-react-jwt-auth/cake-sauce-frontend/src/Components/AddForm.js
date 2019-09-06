import React from 'react'

class AddForm extends React.Component {
  state = { 
    name: "", 
    nickname: "", 
    image: "" 
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.submitHandler(this.state)
    this.setState({ name: "", nickname: "", image: "" })
  }

  render() {
    console.log("Form Props", this.props)
    return (
      <div>
        <h3 className={'center'}>Add Member: </h3>
        <form className={'center'} onSubmit={this.submitHandler}>
          <input type="text" placeholder="name" value={this.state.name} name="name" onChange={this.changeHandler} />
          <input type="text" placeholder="nickname" value={this.state.nickname} name="nickname" onChange={(e) => this.changeHandler(e)} />
          <input type="text" placeholder="image" value={this.state.image} name="image" onChange={(e) => this.changeHandler(e)} />
          <input type="submit" value="Add Member" />
        </form>
      </div>
    )
  }
}


export default AddForm
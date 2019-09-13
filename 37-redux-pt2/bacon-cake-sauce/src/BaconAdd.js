import React from 'react'
import { addBacon } from './actions'
import { connect } from 'react-redux'

class BaconAdd extends React.Component {
    state = {
        image: "",
    }

    changeHandler = (e) => {

        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        // send post request with new image string 
        this.props.addBacon(this.state.image)
        // create action creator
        // create reducer to handle dispatch
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input type="text" value={this.state.image} name="image" placeholder="enter bacon image" onChange={this.changeHandler} />
                <input type="submit" value="submit" />
            </form>
        )
    }
}
function mdp(dispatch) {
    return { addBacon: dispatch(addBacon) }
}


export default connect(null, mdp)(BaconAdd)
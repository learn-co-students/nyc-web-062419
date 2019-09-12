import React from 'react'
import { connect } from 'react-redux'
import NotAuthorized from './NotAuthorized'

const Welcome = (props) => {
    console.log("Welcome Props", props)
    return (
        <>
            {props.loggedIn ? (<div>
                <h1>Welcome to Bacon Vs Cake Sauce</h1>
                <button onClick={props.logOutUser}>Log Out</button>
            </div>) : (<div>
                <NotAuthorized />
                <button onClick={props.logInUser}>Log In</button>
            </div>)}

        </>
    )
}

function msp(state) {
    console.log("map state to props", state)
    return { loggedIn: state.loggedIn }
}
function mdp(dispatch) {
    console.log("map dispatch to props")
    return { logOutUser: () => dispatch({ type: "LOG OUT" }), logInUser: () => dispatch({ type: "LOG IN" }) }
}


export default connect(msp, mdp)(Welcome)
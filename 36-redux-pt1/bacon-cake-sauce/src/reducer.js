import { combineReducers } from 'redux'

let defaultState = {
    loggedIn: true,
    bacon: 0,
    cakeSauce: 0,
}


function handleLogOut(state = defaultState.loggedIn, action) {
    console.log("Everyday we reduxin'", action);
    switch (action.type) {
        case "LOG OUT":
            return state ? false : state
        case "LOG IN":
            return state ? state : true
        default:
            return state
    }
}

function handleBacon(state = defaultState.bacon, action) {
    switch (action.type) {
        case "BACON":
            return state + 1

        default:
            state
    }
}
function handleCakeSauce(state = defaultState.cakeSauce, action) {
    switch (action.type) {
        case "CAKE SAUCE":
            return cakeSauce + 1
    }
}

const rootReducer = combineReducers({
    loggedIn: handleLogOut(),
    bacon: handleBacon(),
    cakeSauce: handleCakeSauce()
})

export default rootReducer
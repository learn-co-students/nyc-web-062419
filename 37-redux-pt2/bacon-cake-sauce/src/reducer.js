import { combineReducers } from 'redux'

let defaultState = {
    loggedIn: true,
    bacon: 0,
    cakeSauce: 0,
    baconImages: [],
    cakeSauceImages: []
}


function handleLogOut(state = defaultState.loggedIn, action) {
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
            return state
    }
}
function handleCakeSauce(state = defaultState.cakeSauce, action) {
    switch (action.type) {
        case "CAKE SAUCE":
            return state + 1
        default:
            return state
    }
}


function handleBaconFetch(state = defaultState.baconImages, action) {

    switch (action.type) {
        case "FETCH BACON":
            return action.payload
        default:
            return state
    }
}
function handleCakeSauceFetch(state = defaultState.cakeSauceImages, action) {
    switch (action.type) {
        case "FETCH CAKE SAUCE":
            return action.payload
        default:
            return state
    }
}

const rootReducer = combineReducers({
    loggedIn: handleLogOut,
    bacon: handleBacon,
    cakeSauce: handleCakeSauce,
    baconImages: handleBaconFetch,
    cakeSauceImages: handleCakeSauceFetch

})

export default rootReducer
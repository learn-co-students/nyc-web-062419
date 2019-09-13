function LogOutUser() {
    return { type: "LOG OUT" }
}
function LogInUser() {
    return { type: "LOG IN" }
}

function fetchBaconImages(dispatch) {
    return function () {
        fetch("http://localhost:4000/baconImages")
            .then(resp => resp.json())
            .then(data => {
                dispatch({ type: "FETCH BACON", payload: data })
            })
    }
}
function fetchCakeSauceImages(dispatch) {
    return function () {
        fetch("http://localhost:4000/cakeSauceImages")
            .then(resp => resp.json())
            .then(data => {
                dispatch({ type: "FETCH BACON", payload: data.baconImages })
                dispatch({ type: "FETCH CAKE SAUCE", payload: data.cakeSauceImages })
            })
    }
}

function addBacon(dispatch, arg) {
    console.log("dispatch args", arg)
    return function () {
        fetch("http://localhost:4000/baconImages", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                accepts: "application/json"
            },
            body: JSON.stringify(
                { string: "" }
            )

        })
            .then(resp => resp.json())
            .then(data => dispatch({ type: "UPDATE BACON", payload: data }))

    }
}


export { LogInUser, LogOutUser, fetchBaconImages, fetchCakeSauceImages, addBacon }
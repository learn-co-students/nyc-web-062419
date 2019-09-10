import React, { useState, useEffect } from 'react'

const Counter = () => {
    // state = {
    //     counter: 0
    // }

    // clickHandler = ()=>{
    //     this.setState({counter: this.state.counter+1})
    // }
    const [counter, changeCounter] = useState(0)
    const [name, changeName] = useState("Anthony")


    useEffect(() => {
        console.log("Things A Changin'")

        let interval = setInterval(() => console.log("interval"), 1000)
        return function () { clearInterval(interval) }
    }, [])


    return (
        <>
            <h2 >Welcome {name}</h2>
            <button onClick={() => name === "Anthony" ? changeName("Ben") : changeName("Anthony")}>Change Name</button>
            <h3>Counter: {counter}</h3>
            <button onClick={() => changeCounter(counter + 1)} >increase</button>
            <button onClick={() => counter === 0 ? null : changeCounter(counter - 1)} > decrease</button>
        </>
    )
}

export default Counter
## React Hooks

# What Are Hooks?
In general, hooks are a new implementation in React that allow functional components to do a lot of the same things that class components can. Using hooks, a functional component now has access to things like state and lifecycle methods.

Hooks can only be used in functional components which means a purely hook based application won't have any need for class components. They allow a functional component to use many of their class based siblings' functionality like holding state or calling functions when the component mounts.

Hooks are new and exciting but they weren't built to immediately replace class implementations. If you feel more comfortable with class components then keep using them because they aren't going away!

You can find a lot more info about why hooks were implemented at the React website: https://reactjs.org/docs/hooks-intro.html

# useState

- Gives a functional component access to "state"

- Import it into our functional component's file like so:
    `import React, {useState} from 'react'`

- Once useState has been added, it's time to implement it. The implementation looks something like this:
    `const [stateVariable, functionToChangeStateVariable] = useState(defaultValueForStateVariable)`

Example: `const [fancyNewState, setFancyNewState] = useState('New York')`

Although this might look like a pretty intimidating statement at first, it's actually just some fancy deconstruction. What useState('New York') does is take in an argument for the initial state. It's a little similar to writing state = {fancyNewState: 'New York'} except that we haven't given our state a name yet.

- useState returns is an array with two elements. The first is a reference to the state variable, the second is a function that allows us to change the value of that state variable. When we set the array [fancyNewState, setFancyNewState] equal to the result of our useState function, we're actually using array destructuring to do something like this:

`const createdState = useState('New York') // <-- Array of what we want`
`const fancyNewState = createdState[0] // <-- The getter`
`const setFancyNewState = createdState[1] // <-- The setter`

Which ultimately equals:
`const [fancyNewState, setFancyNewState] = useState('New York')`

Now that our state is saved in two constants, we can access and use it easily:
`console.log(fancyNewState) // => 'New York'`
`setFancyNewState('Chicago') // => sets our state to 'Chicago'`

# useEffect

In a class component, there are several lifecycle methods that fire at different points in a component's life. Functional components don't have access to these without hooks, and the implementation is pretty different.

Whereas a class component has access to `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`, and a few others, a functional component only has access to the useEffect hook.

Before we can utilize our new hook, we first need to import it:
`import React, {useState, useEffect} from 'react'`

_Naturally if we don't need useState we can just skip importing it. Now that we have the hook, let's use it._

Our useEffect takes in a callback function which fires when the component mounts and every single update after. Think of it as a combination of `componentDidMount` and `componentDidUpdate`.

The component has a handy way of controlling how often its effect fires as well. If we pass in a dependency array of variables as the second argument, our useEffect hook will only fire when those variables change:

`useEffect( () => console.log(fancyNewState), [fancyNewState] )`

Now our hook will only fire when the component wants to update and notices that our fancyNewState is different. If it updates for any other reason it'll skip this hook.

And what if we want our hook to only fire on the initial render, similar to componentDidMount? In that case, pass in an empty array:

`useEffect( () => console.log('Your component has mounted'), [] )`

A note on the array: if you use anything declared outside of the useEffect hook it generally has to be added to the dependency array. Read more about it at the bottom of this page: https://reactjs.org/docs/hooks-effect.html

One final bit of functionality for the useEffect hook is that we occasionally want to clean up the side effects we create with it. Imagine we created something like setInterval and needed to remove it when the component unmounts. The way we clean it up is by returning a function in our callback function that clears the timeout:

`useEffect(() => {`
`  const myInterval = setInterval(() => console.log('Hey!'), 1000 )`
  `return function cleanup() {`
    `clearInterval(myInterval)`
  `}`
  `// The function can be anonymous, it's named here for clarity`
`})`

Technically, the cleanup happens every time before our useEffect runs again, which means it will reset the interval on every update. If we wanted to make it only fire on specific instances, we could pass in an array as a second argument to make the effect only happen (and therefore cleanup) in specific instances:

`useEffect(() => {`
  `const myInterval = setInterval(() => console.log('Hey!'), 1000 )`
  `return function cleanup() {`
    `clearInterval(myInterval)`
  `}`
`}, [])`

The empty array we passed the component ensures it will only fire when the component mounts and only cleanup when the component unmounts.

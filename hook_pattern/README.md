# Hook Patterns

## Cheat sheet

### Hook Version of Component Did Mount
```js
componentDidMount(){
    //...
}

//Equivalent to:
useEffect(() => {
    //...
},[])
```

### Hook Version of Component Will Unmount
```js
componentWillUnmount(){
    //...
}

//Equivalent to:

useEffect(() => {

    //Mounting the component

    return () => {
        //UnMount the component
    }
},[])
```

### Hook Version of Component Did Update
```js
componentDidUpdate(){
    //...
}

// Equivalent To:

useEffect(() => {
    //...
}) //no dependency Array
```

## Main Hooks
- **useState**
    * Update and manipulate the state within a functional component
- **useEffect**
    * Runs a piece a code during lifecycles events
    * The main body of a component doesn't allow:
        - mutations
        - subscriptions
        - timers
        - among other side effects
    * tldr; allows to perform side effects and it is a combination of the classic **componentDidMount**, **componentDidUpdate** and **componentWillUnmount**

- **useContext**
    * Accepts a context object (returned by React.createContext)
    * Allows to pass down data accross components, instead of prop drilling
    * Receives as an argument the context object
    * Causes a rerender everytime the context value changes

- **useReducer**
    * Alternative to useState
    * Receives a function with an initial state
    * Returns the current state and a dispatch function
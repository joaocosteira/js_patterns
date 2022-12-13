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
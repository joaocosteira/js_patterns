

//HOC Style Component:

function withStyles(Component){
  
  return props => {
    const style = {
      padding: '0.2rem',
      margin: '1rem',
      color: 'white',
      ...props.style //here we're mergin this custom style with the components inline style!!! 

    }

    return <Component style={style} {...props} />
  }
}

const RedButton = () => <button style={{ color: 'red'}}>Click Me</button>
const BlueButton = () => <button style={{ color: 'blue'}}>Click Me</button>

const StyledRedButton = withStyles(RedButton)
const StyledBlueButton = withStyles(BlueButton)

function App() {
  return (
    <div className="App">
      <StyledRedButton/>
      <StyledBlueButton/>
    </div>
  );
}

export default App;

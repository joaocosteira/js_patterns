

const Title = (props) => props.render()
const TitleMultiplePros = (props) => (
  <>
    {props.renderOne()}
    {props.renderTwo()}
    {props.renderThree()}
  </>
)

function App() {
  return (
    <div className="App">
      <Title render={ ()  => <h1>Hello World</h1> } />
      <Title render={ ()  => <h2>Another One</h2> } />
      <Title render={ ()  => <h3>Another One</h3> } />
      <Title render={ ()  => <h4>Another One</h4> } />
      <Title render={ ()  => <h5>Another One</h5> } />
      <Title render={ ()  => <h6>Another One</h6> } />
      <TitleMultiplePros
        renderOne={ ()  => <h1>Hello One</h1> }
        renderTwo={ ()  => <h1>Hello Two</h1> }
        renderThree={ ()  => <h1>Hello Three</h1> }
      />
    </div>
  );
}

export default App;

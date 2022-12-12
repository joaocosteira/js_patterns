import { useState } from "react";


/**
 * These Components are the ones who are going to be 
 * passed down and rendered as props.
 */
function Kelvin({ value = 0 }) {
  return <div className="temp">{value + 273.15}K</div>;
}

function Fahrenheit({ value = 0 }) {
  return <div className="temp">{(value * 9) / 5 + 32}°F</div>;
}


/**  
 * The component has two main parts:
 * - A state controlled input
 * - Render the props, which we pass down the current state value
 *    - And the components rendered can consume the state value,
 *      without needing to lift up the state.
 */
const Input  = (props) => {

  const [value,setValue] = useState("");

  return(
    <>
      <input
        type="text"
        value={value}
        onChange={({target}) => setValue(target.value)}
        placeholder="Temp in ºC"
      />
      {props.render(value)}
    </>
  )
}
function App() {

  return (
    <div className="App">
      <h1>☃️ Temperature Converter 🌞</h1>
      <Input render={
        (value) => (
          <>
            <Kelvin value={value}/>
            <Fahrenheit value={value}/>
          </>
        )
      } />
    </div>
  );
}

export default App;

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
 * - Render the props via children (the 100% props render version is on the App_prop_render.js file)
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
      {props.children(value)}
    </>
  )
}
function App() {

  return (
    <div className="App">
      <h1>☃️ Temperature Converter 🌞</h1>
      <Input>
        {
          (value) => (
            <>
              <Kelvin value={value}/>
              <Fahrenheit value={value}/>
            </>
          )
        }
      </Input>
    </div>
  );
}

export default App;

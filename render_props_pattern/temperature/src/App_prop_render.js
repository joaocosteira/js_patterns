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
    Similarly to prop rendering, we can do render components as children,
    while passing down arguments:
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

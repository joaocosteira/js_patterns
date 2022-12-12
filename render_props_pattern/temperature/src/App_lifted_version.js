import { useState } from "react";


function Kelvin({ value = 0 }) {
  return <div className="temp">{value + 273.15}K</div>;
}

function Fahrenheit({ value = 0 }) {
  return <div className="temp">{(value * 9) / 5 + 32}°F</div>;
}


const Input  = ({ value, onChange }) => {

  return(
    <input
      type="text"
      value={value}
      onChange={({target}) => onChange(target.value)}
      placeholder="Temp in ºC"
    />
  )
}

/**  
 * In this version, the state was lifted.
 * At least currently the application works,
 * but in more complex apps, lifting the state
 * maybe harder and may cause additional rerenders
 * at the top level/performance issues.
 * 
 * A possible solution is using prop render to pass down
 * the kelvin/fahrenheit render via the props render trick
 */
function App() {

  const [value,setValue] = useState("");

  return (
    <div className="App">
      <h1>☃️ Temperature Converter 🌞</h1>
      <Input value={value} onChange={setValue} />
      <Kelvin value={value}/>
      <Fahrenheit value={value}/>
    </div>
  );
}

export default App;

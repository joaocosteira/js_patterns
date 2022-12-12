import { useState } from "react";


function Kelvin({ value = 0 }) {
  return <div className="temp">{value + 273.15}K</div>;
}

function Fahrenheit({ value = 0 }) {
  return <div className="temp">{(value * 9) / 5 + 32}°F</div>;
}


const Input  = () => {

    const [value,setValue] = useState("");

    return(
        <input
        type="text"
        value={value}
        onChange={({target}) => setValue(target.value)}
        placeholder="Temp in ºC"
        />
    )
}

/**
 * Problem: we can't access the input State at the App level
 * So a first possible solution is lifting the state to the App level
 */
function App() {

  return (
    <div className="App">
      <h1>☃️ Temperature Converter 🌞</h1>
      <Input/>
      <Kelvin/>
      <Fahrenheit/>
    </div>
  );
}

export default App;

import { useState } from "react";
import BlueButton from "./BlueButton";
import Display from "./Display";
import RedButton from "./RedButton";

function App() {

  const [count,setCount] = useState(0);

  return (
    <div className="page">
      <div className="container">
        <div className="display">
          <h1>Counter App</h1>
          <Display count={count}/>
        </div>
        <div className="buttons">
          <RedButton setCount={setCount}/>
          <BlueButton setCount={setCount}/>
        </div>
      </div>
    </div>
  );
}

export default App;

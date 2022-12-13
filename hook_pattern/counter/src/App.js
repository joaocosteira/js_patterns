import Count from "./components/Count";
//import Counter from "./components/Counter";
import Width from "./components/Width";
import { useCounter, useWidth } from "./hooks";

function App() {

  //custom hook version, where all the logic is emcapsulated
  const counter = useCounter();
  const width = useWidth();


  return (
    <div className="App">
      {/*
        //Original version => with a class based version 
        <Counter/> 
      */}
      <Count
        count={counter.counter}
        increment={counter.increment}
        decrement={counter.decrement}
      />
      <div id="divider"/>
      <Width width={width} />
    </div>
  );
}

export default App;

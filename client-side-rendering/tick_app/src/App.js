import { useEffect, useState } from "react";

function App() {

  const [date, setDate] = useState(new Date())

  useEffect(() => {

    setInterval(() => {
      setDate(new Date())
    },1000);
  })
  return (
    <div className="App">
      <h1>{date.toLocaleTimeString()}</h1>
    </div>
  );
}

export default App;

import InputHOC from "./InputHOC";
import InputHooks from "./InputHooks";

function App() {
  return (
    <div className="App">
      <div className="col">
        <h3>HOC</h3>
        <InputHOC/>
      </div>
      <div className="col">
        <h3>Hooks</h3>
        <InputHooks/>
      </div>
    </div>
  );
}

export default App;

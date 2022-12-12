import InputHook from "./InputHook";
import InputRenderProp from "./InputRenderProp";

function App() {
  return (
    <div className="App">
      <div className="col">
        <h3>Render Prop</h3>
        <InputRenderProp/>
      </div>
      <div className="col">
        <h3>Hooks</h3>
        <InputHook/>
      </div>
    </div>
  );
}

export default App;

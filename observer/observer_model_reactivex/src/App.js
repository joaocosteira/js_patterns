import { fromEvent, map, merge, sample } from "rxjs";

function App() {

  merge(
    fromEvent(document,"mousedown").pipe(map(() => false)),
    fromEvent(document,"mousemove").pipe(map(() => true))
  )
  .pipe(sample(fromEvent(document, "mouseup")))
  .subscribe(isDragging => console.log("Where you dragging?", isDragging))
  
  return (
    <div className="App">
      Click or drag anywhere and check the console
    </div>
  );
}

export default App;

import { Button, FormControlLabel, Switch } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import observable from "./observable";


const handleClick = () => { observable.notify("User clicked the Button") }
const handleToggle = () => { observable.notify("User toggled the switch") }

const logger = (data) => { console.log(`${Date.now()} ${data}`) }
function toastify(data) {
  toast(data, {
    position: toast.POSITION.BOTTOM_RIGHT,
    closeButton: false,
    autoClose: 2000
  });
}


observable.subscribe(logger)
observable.subscribe(toastify)


function App() {
  return (
    <div className="App">
      <Button
        onClick={handleClick}
        variant="contained"
      >
        Click Me
      </Button>
      <FormControlLabel
        label="Toggle Me"
        control={<Switch onChange={handleToggle} />}
      />
      <ToastContainer />
    </div>
  );
}

export default App;

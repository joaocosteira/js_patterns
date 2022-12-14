import { createContext, useContext, useState } from "react";

const FlyOutContext = createContext();

function FlyOut(props){

  const [open,toggle] = useState(false);

  const providerValue = { open, toggle };

  return(
    <FlyOutContext.Provider value={providerValue}>
      {props.children}
    </FlyOutContext.Provider>
  )

}

// function FlyOut(props){

//   const [open,toggle] = useState(false);

//   const providerValue = { open, toggle };

//   return(
//     <div>
//       {
//         Children.map(props.children, child => cloneElement(child,providerValue))
//       }
//     </div>
//   )

// }





const Icon = () => (<div className="icon">🚴‍♂️</div>)

function Toggle(){

  const { open, toggle } = useContext(FlyOutContext)

  return(
    <div onClick={() => toggle(!open) }>
      <Icon/>
    </div>
  )
}



function List({ children }){
  const { open } = useContext(FlyOutContext)
  return open && <ul className="menuList">{children}</ul>
}

const Item = ({ children }) => (<li>{children}</li>)


//making the Toggle Component a property of FlyOut component
FlyOut.Toggle = Toggle;
FlyOut.List = List;
FlyOut.Item = Item;


function FlyOutMenu(){
  return(
    <FlyOut>
      <FlyOut.Toggle />
      <FlyOut.List>
        <FlyOut.Item>Edit</FlyOut.Item>
        <FlyOut.Item>Delete</FlyOut.Item>
      </FlyOut.List>
    </FlyOut>
  )
}


function App() {
  return (
    <div className="App">
      <FlyOutMenu/>
    </div>
  );
}

export default App;

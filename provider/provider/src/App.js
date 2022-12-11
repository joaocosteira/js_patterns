import React from "react";

//Components

const SideBar = () => <List/>
const Content = () => (
  <>
    <Header/>
    <Text/>
  </>
)

//Consumer Components (the ones that actually use the data)
const List = () => {
  const { listItem } = React.useContext(DataContent)
  return (
    <ul>
      <li>{listItem}</li>
    </ul>
  )
}

const Header = () => {
  const { title } = React.useContext(DataContent)
  return(
    <h1>{title}</h1>
  )
}

const Text = () => {
  const { text } = React.useContext(DataContent)
  return(
    <p>{text}</p>
  )
}

//



const DataContent = React.createContext()

function App() {

  const data = {
    title: 'Hello Title',
    listItem: 'Really cool item',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
  }


  return (
    <div>
      <DataContent.Provider value={data}>
        <SideBar/>
        <Content/>
      </DataContent.Provider>
    </div>
  );
}

export default App;

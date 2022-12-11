import Toggle from './components/Toggle'
import List from './components/List'
import React from 'react';
import { useThemeContext } from './hooks';


function App() {

  const theme = useThemeContext();

  return (
      <div className={`App theme-${theme.name}`}>
        <Toggle/>
        <List/>
      </div>
  );
}

export default App;

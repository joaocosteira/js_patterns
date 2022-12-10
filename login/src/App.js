import axios from "axios";
import { useState } from "react";


const LoginContainer = () => {

  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [user, setUser] = useState(null);

  const login = async e => {
    e.preventDefault();
    const response = await axios.post(process.env.REACT_APP_BE_URL,{ username, password })
    setUser(response.data)
  }

  return(
    <>
      <form onSubmit={login}>
        <input 
          type="text" 
          value={username}
          onChange={({target}) => setUsername(target.value)}
        />
        <input 
          type="password" 
          value={password}
          onChange={({target}) => setPassword(target.value)}
        />
        <button type="submit">Log In</button>
      </form>
      {
        user && (
          <div>
            <p>You're logged in as {user.username}</p>
          </div>
        )
      }
    </>
  )

}


function App() {

  console.log()
  return (
    <div className="App">
      <LoginContainer/>
    </div>
  );
}

export default App;

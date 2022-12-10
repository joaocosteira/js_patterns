import TweetSearchResults from "./components/TweetSearchResults";
import {useEffect, useState} from 'react'
import axios from "axios";

function App() {

  const [tweets,setTweets] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API)
      .then(r => setTweets(r.data))
  },[])

  return (
    <>
      <TweetSearchResults tweets={tweets}/>
    </>
  );
}

export default App;

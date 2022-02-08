import './App.css';
import {useState, useEffect} from 'react';
import key from "./api"

function App() {
  const [data, setData] = useState({
    fact: "loading...",
    source: "loading..."  
  })

  const url = "https://rest.blackhistoryapi.io/fact/random"

  useEffect(() => {
    fetch(url, {
      headers: {
        "accept": "application/json",
        'x-api-key': key
      }
    }).then(response => response.json())
      .then(randomFact => setData(prev => ({
        fact: randomFact.Results[0].text,
        source: randomFact.Results[0].source
      })))
      .catch(Error => console.log(Error))
  }, [])
    


  return (
    <div className="App">
      <header className='header'>
        <h1 className='header--title'>it.matters</h1>  
      </header>
      <h2>informations</h2>
      <div className='main--wrapper'>
        <h3>Get some facts</h3>
        <p>{data.fact}</p>
        <a href={data.source}>source</a>
      </div>
      <button className='getData-btn'>GET.fact</button>
    </div>
  );
}

export default App;

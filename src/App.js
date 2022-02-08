import './App.css'
import {useState} from 'react'
import key from "./api"
import img from "./blackpower.png"


function App() {
  const [data, setData] = useState({
    fact: "Rudy Ray Moore financed the hit 1975 blaxploitation film Dolemite with $140,000 of his own money. The film grossed $12 million and was one of the most successful movies that year.",
    source: null  
  })

  const url = "https://rest.blackhistoryapi.io/fact/random"

    
  function fetchData() {
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
  }

  return (
    <div className="App">
      <header className='header'>
        <img className="logo" src={img} alt="black power"/>
        <h1 className='header--title'>it.matters</h1>  
      </header>
      <h2>Facts From The Black History API</h2>
      <div className='main--wrapper'>
        <p>{data.fact}</p>
        {data.source && <a href={data.source}>source</a>}
      </div>
      <button className='getData-btn' onClick={fetchData}>GET.fact</button>
      <footer>
        <aside>By Lars Gessner</aside>
        <aside>Thanks to blackhistoryapi.io</aside>
      </footer>
    </div>
  );
}

export default App;

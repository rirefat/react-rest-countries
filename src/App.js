import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {  
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

function Countries(){
  const [country, setCountry]=useState([]);
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
      .then(res=>res.json())
      .then(data=>setCountry(data))
  },[])
  return(
    <div>
      <h1>Visiting All the Countries</h1>
    <p>Available Countries: {country.length}</p> 
    </div>
  )
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Country from './components/Countries/Countries';

function App() {  
  return (
    <div className="App">
      <Header totalCountry={'country.length'}></Header>
      <Country></Country>
    </div>
  );
}

const LoadCountries= ()=>{
  const [country, SetCountry]=useState([]);
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => SetCountry(data))
  },[])
  return(
    <div>
      <h3>Available Country: {country.length}</h3>
    </div>
  )
}

// function LoadCountries(){
//   const [countries, setCountry]=useState([]);
//   useEffect(()=>{
//     fetch('https://restcountries.com/v3.1/all')
//       .then(res=>res.json())
//       .then(data=>setCountry(data))
//   },[])
//   return(
//     <div>
//       <h1>Visiting All the Countries</h1>
//       <p><strong>Available Countries: </strong>{countries.length}</p> 
//       {
//         countries.map(country => <Country name={country.name.common}></Country>)
//       }
//     </div>
//   )
// }

// function Country(props){
//   return(
//     <div>
//       <p><strong>Name of Country: </strong>{props.name}</p>
//     </div>
//   )
// }

export default App;

import './Charts.css';
import {useEffect, useState} from "react";
import axios from "axios";
import Chart from "./Chart";

const Charts = () => {
  const url = 'https://charts.mongodb.com/charts-project-0-hdnsu';
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [filterCountry, setFilterCountry] = useState({});

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  useEffect(() => {
    axios.get(url).then(res => {
      setCountries(res.data.countries);
      const randomCountryNumber = getRandomInt(res.data.countries.length);
      let randomCountry = res.data.countries[randomCountryNumber];
      setSelectedCountry(randomCountry);
      setFilterCountry({"country": randomCountry});
    })
  }, [])

  useEffect(() => {
    if (selectedCountry !== "") {
      setFilterCountry({"country": selectedCountry});
    }
  }, [selectedCountry])

  return <div className="App">
    <h1 className="title">Project Details</h1>
    
    <div className="form">
      {countries.map(c => <div className="elem" key={c}>
        <input type="radio" name="projects" value={c} onChange={() => setSelectedCountry(c)} checked={c === selectedCountry}/>
        <label htmlFor={c} title={c}>{c}</label>
      </div>)}
    </div>
    <div className="charts">
      <Chart height={'300px'} width={'700px'} filter={filterCountry} chartId={'6371d844-e272-4c0c-8561-520fb9890c53'}/>
    </div>
  </div>
};

export default Charts;
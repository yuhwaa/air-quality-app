import React, { useState } from 'react';
import CitySearch from './CitySearch';
import 'bootstrap/dist/css/bootstrap.min.css'
import AirQualityCard from './AirQualityCard'
import PollutantInfo from './PollutantInfo'
import AirQualityLevelsTable from './AirQualityLevelsTable'
import './App.css';

//add Card component
//add forcast
//add city pic
//use map
//map tiles
//use widgets

function App() {
  const[airQualityData, setAirQualityData] = useState(null)
  const [error, setError] = useState(null)

  const getAirQuality = async (city) => {
    try {
      //get json from API and store it in "data"
      const response = await fetch(`https://api.waqi.info/feed/${city}/?token=${process.env.REACT_APP_AQI_API_TOKEN}`)
      const data = await response.json()
      //and console log it
      console.log(data)
      if(response.ok && data.status === 'ok') {
        setAirQualityData(data.data)
        setError(null)
      } else {
        setError("Sorry, we couldn't find the city you were looking for. Try another location nearby or ensure your spelling is correct.")
        setAirQualityData(null)
      }
    } catch (error) {
      console.error("network error:", error)
      //set error state
      setError("Sorry, something went wrong.")
      //set air quality data to null
      setAirQualityData(null)
    }
  }
  return (
    <div className='container'>
      <h1 className='mt-5 mb-3'>Air Quality Index Search</h1>
      <CitySearch getAirQuality={getAirQuality}/>
      {error && (
        <div className='alert alert-danger' role='alert'>
          {error}
        </div>
      )}
      {airQualityData && (
        //Air Quality Card Component
        //Pollutant  Info
        <>
        <AirQualityCard data={airQualityData}/>
        <PollutantInfo pollutant={airQualityData.dominentpol}/>
        </>
      )}
      <AirQualityLevelsTable/>
    </div>
  );
}

export default App;

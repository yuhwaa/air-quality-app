import React from  'react'

const AirQualityCard = ({data}) => {
  const { aqi, city, dominentpol, time } = data
  return (
    <div className={`card mb-4`}>
        <div className='card-body'>
        <h5 className='card-title'>{city.name}</h5>
        <h6 className='card-subtitle mb-2'>Air Quality Index: {aqi}</h6>
        <p className='card-text'>Doninant Pollutant: {dominentpol}</p>
        <p className='card-text'>Last Updated: {time.s}</p>
        </div>
    </div>
  )
}

export default AirQualityCard
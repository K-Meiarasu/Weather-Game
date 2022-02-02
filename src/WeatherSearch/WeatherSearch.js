import React, { useState } from 'react'
import { Link } from "react-router-dom"

const WeatherSearch = () => {

    const api='cb3c707648b4e7d715eec1b473c76bad'
    const [weather, setWeather] = useState([{}])
    const [city, setCity] = useState('')

    const getweather = (e) => {
        if(e.key === 'Enter'){
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${api}`).then(response => response.json()).then(
                data => {
                    setWeather(data)
                    setCity('')
                })
        }
    }

    return(
        <div>
            <div className='top'>
                <input type='search' placeholder='Search City Name' onChange={e => setCity(e.target.value)} value={city} onKeyPress={getweather} required/>
                {typeof weather.main === 'undefined' ? (
                    <div id='info'>
                        <br/><br/>
                        <h1>Enter a City name to check with it's weather data.</h1>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    </div>
                ) : (
                    <div className='card'>
                        <p id='city'>{weather.name}</p>
                        <p id='deg'>{((Math.round(weather.main.temp)-32)*5/9).toFixed(2)} &deg;C</p>
                        <p id='sym'>{weather.weather[0].main} &#127781;</p>
                    </div>
                )}
                <h2 id='info'>You can also refresh yourself my playing our Game &#128071;</h2>
                <button id='home'><Link to="/game">Let's play a game ?</Link></button>
            </div>
        </div>
    )
}
export default WeatherSearch;
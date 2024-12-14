import { use } from "react";
import Search from "../search";
import { useState, useEffect } from "react";
import "./style.css";


export default function Weather() {
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);  
    const [WeatherDate, setWeatherDate] = useState(null);

    async function fetchWeather(param) {
        setLoading(true);
        try {
            console.log(param);
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=9e31ac2dfe830cc8298223e77a9e572f`
            );
            const data = await response.json();
            if (data){
                setWeatherDate(data);
                setLoading(false);
            }
        } catch (error) {
            console.error("Error:", error);
            setLoading(false);
        }
    }
    async function handleSearch() {
        fetchWeather(search);


    }
    useEffect(() => {
        fetchWeather("London");
    }, [])

    function getCurrentDate() {
    
        return new Date().toLocaleDateString("en-us", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
        })
    }
    return <div className="weather-app">
        
        <Search search={search} 
        setSearch={setSearch} handleSearch={handleSearch}/>
        {
            loading ?
            <div className="loading">Loading...</div>:
            <div>
                <div className="city-name">
                    <h2>{WeatherDate?.name}, <span>{WeatherDate?.sys.country}</span></h2>
                </div>
                <div className="date">
                    <span>{getCurrentDate()}</span>
                </div>
                <div className="temperature">
                    {WeatherDate?.main?.temp}
                </div>
                <p className="description">
                {WeatherDate && WeatherDate.weather && WeatherDate.weather[0] ? WeatherDate.weather[0].description : ""}   
                </p>
                <div children="weather-info">
                    <div className="column">
                        <p>wind speed</p>
                        <p className="wind">
                            {WeatherDate?.wind?.speed} m/s
                        </p>
                        
                    </div>
                    <div className="column">
                        <p>humidity</p>
                        <p className="humidity">
                            {WeatherDate?.main?.humidity} %
                        </p>
                        
                    </div>

                    </div>            
            </div>
        }
    </div>;
}
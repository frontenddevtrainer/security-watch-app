// 
'use client'
import { useEffect, useState } from "react"

export default function Weather() {

    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        async function getData() {
            // Geolocation HTML 5 > Lat Long
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=28.7041&lon=77.1025&appid=ffcc0c01dbce6d24d20e74777b186300`);
            const data = await response.json();
            setWeatherData(data);
        }
        getData();
    }, [])

    return <div className="text-white">34</div>

}
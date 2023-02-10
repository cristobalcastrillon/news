import React from "react";
import { useAxiosGet } from "../hooks/HttpRequest";
import Loader from "../components/Loader";
import NewsCard from "../components/NewsCard";
import WeatherCard from "../components/WeatherCard";

function Homepage(props) {
    let country = 'co'
    const newsApiKey = props.newsApiKey
    const newsGetURL = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${newsApiKey}`
    
    // Iglesia La Ermita - Cali, Colombia
    // 3.4540491564690865, -76.53202689965575
    let lat = '3.45'
    let lon = '-76.53'
    const weatherApiKey = props.weatherApiKey
    const weatherGetURL = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${weatherApiKey}`

    let newsList = useAxiosGet(newsGetURL)
    let weatherInfo = useAxiosGet(weatherGetURL)
    
    let newsListContent = null
    let weatherInfoContent = null

    if(newsList.loading){
        newsListContent = <Loader/>
    }

    if(weatherInfo.loading){
        weatherInfoContent = <Loader/>
    }

    if(newsList.error){
        newsListContent = <p className='p-3'>
            There was an error. Please try again later.
        </p>
    }

    if(weatherInfo.error){
        weatherInfoContent = <p className='p-3'>
            There was an error. Please try again later.
        </p>
    }
    
    if(newsList.data){
        let articleCounter = 0
        newsListContent = 
        newsList.data.articles.map((article) => 
            <div key={articleCounter}>
                <NewsCard article = {article} id = {++articleCounter}/>
            </div>
        )
        console.log(weatherInfo)
    }

    if(weatherInfo.data){
        weatherInfoContent = <WeatherCard data = {weatherInfo.data}/>
    }
    
    return(
        <div className="flex flex-row items-center justify-center">
            <div>
                {newsListContent}
            </div>
            <div className="right-0 p-3">
                {weatherInfoContent}
            </div>
        </div>
    )
}

export default Homepage;
import React from "react";
import { useAxiosGet } from "../hooks/HttpRequest";
import Loader from "../components/Loader";
import NewsCard from "../components/NewsCard";
import uuid from 'react-native-uuid';

function Homepage(props) {
    
    let country = props.country
    const apiKey = props.apiKey
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`

    let newsList = useAxiosGet(url)
    let content = null

    if(newsList.loading){
        content = <Loader/>
    }

    if(newsList.error){
        content = <p className='p-3'>
            There was an error. Please try again later.
        </p>
    }
    
    if(newsList.data){
        let articleCounter = 0
        content = 
        newsList.data.articles.map((article) => 
            <div key={articleCounter}>
                <NewsCard article = {article} id = {++articleCounter}/>
            </div>
        )
        console.log(content)
    }
    
    return(
        <div>
            {content}
        </div>
    )
}

export default Homepage;
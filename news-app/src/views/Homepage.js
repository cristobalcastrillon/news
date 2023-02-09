import React from "react";
import { useAxiosGet } from "../hooks/HttpRequest";
import Loader from "../components/Loader";
import NewsCard from "../components/NewsCard";

function Homepage() {
    
    let country = 'co'
    const apiKey = '5a24644ba4464f08afa45ba41dabf7a4'
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
        content = 
        newsList.data.articles.map((article) => 
        // TODO: Generate an id for each article.
            <div className='p-3' key={article.id}>
                <NewsCard article = {article}/>
            </div>
        )
    }
    
    return(
        <div>
            {content}
        </div>
    )
}

export default Homepage;
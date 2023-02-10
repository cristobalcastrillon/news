import React from "react";
import { useLocation, Link } from "react-router-dom";

function NewsDetail() {
    // Este componente presenta una noticia completa al usuario. La fuente contiene un vínculo a la... fuente.

    const location = useLocation()
    const { article, id } = location.state

    return(
        <div className="p-3">
            
            <div
                style = {{
                    'backgroundImage': `url('${article.urlToImage}')`
                }}
                className = 'h-64 bg-blue bg-cover'>
            </div>

            <h1 className='font-bold text-xl mb-3 pt-3'>
                <Link to={`${article.url}`}>
                    { article.title }
                </Link>
            </h1>

            <div className='font-bold mb-3'>
                {article.author}
            </div>

            <div className='mb-3'>
                {article.content}
            </div>

            <Link to={`${article.url}`}>
                <div className='mb-3'>
                    {article.url}
                </div>
            </Link>
            
        </div>
    )
}

export default NewsDetail;
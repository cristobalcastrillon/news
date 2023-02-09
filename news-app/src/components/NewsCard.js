import React from 'react';
import { Link } from "react-router-dom";

function NewsCard(props) {
    // Este componente sirve para visualizar la información general que puede captar la atención del usuario. Comprende un enlace al componente de NewsDetail.
    return(
        <div className='max-w-2xl border mb-4 rounded overflow-hidden shadow-lg'>
            <Link to={`news/${props.article.id}`}>
                <div
                    style = {{
                        'backgroundImage': `url('${props.article.urlToImage}')`
                    }}
                    className = 'h-64 bg-blue bg-cover'>
                </div>
            </Link>
            <div className='p-3'>
                <h3 className='font-bold text-xl mb-3'>
                    <Link to={`news/${props.article.id}`}>
                        { props.article.title }
                    </Link>
                </h3>
                <div className='font-bold mb-3'>
                    {props.article.author}
                </div>
                <div className='mb-3'>
                    {props.article.content}
                </div>
                <Link 
                    to={`news/${props.article.id}`}
                    className='bg-blue-500 text-white p-2 flex justify-center w-full'
                >
                    Leer
                </Link>
            </div>
        </div>
    )
}

export default NewsCard;
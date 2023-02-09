import React from 'react';


function NewsCard(props) {
    // Este componente sirve para visualizar la información general que puede captar la atención del usuario. Comprende un enlace al componente de NewsDetail.
    return(
        <div>
            {props.article.title}
            {/* Imagen */}
            {/* Titular */}
            {/* Fuente */}
            {/* Texto truncado */}
            <hr></hr>
        </div>
    )
}

export default NewsCard;
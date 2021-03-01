import React from 'react'

function News({data}) {
    return (
        <div>            
            <a href={data.source.name}><img src={data.urlToImage} alt=""/>
            <h2 className="title">{data.title}</h2></a>
            <p>{data.description}</p>
        </div>
    )
}

export default News;

import React, { useState } from 'react'
import New from '../components/New'

const News = (defaultNews = []) => {

    defaultNews = [{
        title: 'Titulo 1',
        description: 'Descripción de la noticia un poco larga',
        date: 2,//new Date(new Date() - 2222222 ).toString(),
        content: 'Contenido de la noticia esta si será mas larga hay que tener pensado que puede llegar a ocupar varias líneas',
        author: 'Pablo Becho Sipape',
        archiveDate: null
    },
    {
        title: 'Titulo 2',
        description: 'Descripción de la noticia un poco larga',
        date: 1,//new Date().toString(),
        content: 'Contenido de la noticia esta si será mas larga hay que tener pensado que puede llegar a ocupar varias líneas',
        author: 'Jose María Cantos Sipape',
        archiveDate: null
    }]

    const [news, setNews] = useState(defaultNews)

    console.log(news)


    return (
        <>
            <p className="display-1 m-auto">Noticias</p>
            <div align="center">
                <ol>
                    {
                        news.map( item => (
                            <New key={item.date} {...item} />
                        ))
                    }
                </ol>
            </div>
            
        </>
    )
}



export default News

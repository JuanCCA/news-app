import React, {useState} from 'react'
import ArchivedNew from '../components/ArchivedNew'

const Archived = () => {

    const defaultNews = [{
        title: 'Titulo 3',
        description: 'Descripción de la noticia un poco larga',
        date: 2,//new Date(new Date() - 2222222 ).toString(),
        content: 'Contenido de la noticia esta si será mas larga hay que tener pensado que puede llegar a ocupar varias líneas',
        author: 'Pablo Becho Sipape',
        archiveDate: null
    },
    {
        title: 'Titulo 4',
        description: 'Descripción de la noticia un poco larga',
        date: 1,//new Date().toString(),
        content: 'Contenido de la noticia esta si será mas larga hay que tener pensado que puede llegar a ocupar varias líneas',
        author: 'Jose María Cantos Sipape',
        archiveDate: null
    }]

    const [news, setNews] = useState(defaultNews)

    return (
        <>
            <p className="display-1 m-auto">Archived</p>
            <div align="center">
                <ol>
                    {
                        news.map( item => (
                            <ArchivedNew key={item.date} {...item} />
                        ))
                    }
                </ol>
            </div>
            
        </>
    )
}



export default Archived

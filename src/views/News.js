import React, { useState } from 'react'
import New from '../components/New'
import { useFetchNews } from '../hooks/useFetchNews'
import CreateNew from '../components/CreateNew'

const News = () => {
 
    const [news,setNews] = useState([]) // funcion

    const { data:newsList, loading } = useFetchNews( news );

    return (
        <>
        <div className ="d-flex d-flex justify-content-center">
            <p className="display-1 m-auto">Noticias</p>
            <p className="m-auto"><CreateNew /></p>
        </div>
            <div align="center">
            { loading && <p className="animate__animated animate__flash">Loading</p> }
                <ol>
                    {
                        newsList.map( item => (
                            <New key={item._id} {...item} setNews={setNews} />
                        ))  
                    }
                </ol>
            </div>
            
        </>
    )
}



export default News

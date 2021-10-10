import React, {useState} from 'react'
import ArchivedNew from '../components/Archived/ArchivedNew'
import {useFetchArchived} from '../hooks/useFetchArchived'

const Archived = () => {
    
    const [archived,setArchived] = useState([])
    

    const { data:archivedList, loading } = useFetchArchived( archived );



    return (
        <>
            <div className="d-flex justify-content-center">
                <p className="display-1 m-auto">Archived</p>
            </div>
            <div align="center">
                <ol>
                { loading && <p className="animate__animated animate__flash">Loading</p> }
                    {
                        archivedList.map( item => (
                            <ArchivedNew key={item._id} {...item} setArchived={setArchived} />
                        ))
                    }
                </ol>
            </div>
            
        </>
    )
}



export default Archived

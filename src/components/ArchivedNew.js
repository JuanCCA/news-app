import React from 'react'
import Card from 'react-bootstrap/Card'
import {deleteArchived} from '../helpers/Archived/deleteArchived'


const ArchivedNew = ({_id,title,description,date,content,author,archiveDate,setArchived}) => {
    
    
    const stringToDate = new Date(archiveDate)
    const dateString = `${stringToDate.getFullYear()}/${stringToDate.getMonth() + 1}/${stringToDate.getDate()}  ${stringToDate.getHours()}:${stringToDate.getMinutes()}`
    
    const handlerDeleteArchived = async() => {
        const resp = await deleteArchived(_id)
        if(resp === 200){
            handlerDeleteFromList()
        }
    }
    const handlerDeleteFromList = () => {
        setArchived( (news) => {
            console.log(news)
            return news.filter( doc => doc._id !== _id)
        })
    }




    return (
        <Card style={{ width: '90%' }} className="my-3">
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{description}</Card.Subtitle>
            <Card.Text>{content}</Card.Text>
            <Card.Footer >

            <div className="row">
                <div className="col">
                    Archived date: {dateString} 
                </div>
                <div className="col">
                    Author: {author}
                </div>
                <div className="col">
                    <img 
                        role='button'
                        src="./delete.png"
                        width="30"
                        height="30"   
                        alt=""                 
                        onClick={handlerDeleteArchived}
                        >
                    </img>
                </div>
            </div>
                
            </Card.Footer>
        </Card.Body>
        </Card>
    )
}

export default ArchivedNew

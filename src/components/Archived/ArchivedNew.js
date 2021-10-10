import React from 'react'
import Card from 'react-bootstrap/Card'
import {deleteArchived} from '../../helpers/Archived/deleteArchived'
import { formatDate } from '../../helpers/Utils/dateFormater'
import Button from 'react-bootstrap/Button'


const ArchivedNew = ({_id,title,description,date,content,author,archiveDate,setArchived}) => {
    
    
    const formatedDate = formatDate(date)
    // Delete an archived new from DB
    const handlerDeleteArchived = async() => {
        const resp = await deleteArchived(_id)
        if(resp === 200){
            handlerDeleteFromList()
        }
    }

    // Delete this item from the list 
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
                    Archived date: {formatedDate} 
                </div>
                <div className="col">
                    Author: {author}
                </div>
                <div className="col">
                    <Button onClick={handlerDeleteArchived}
                            variant="dark">
                        <img 
                            src="./delete.png"
                            width="25"
                            height="25"
                            className="d-inline-block align-top"   
                            alt=""                 
                            >
                        </img>
                        Delete
                    </Button>
                </div>
            </div>
                
            </Card.Footer>
        </Card.Body>
        </Card>
    )
}

export default ArchivedNew

import React from 'react'
import Card from 'react-bootstrap/Card'
import {archiveNew} from '../../helpers/News/archiveNew'
import {formatDate} from '../../helpers/Utils/dateFormater'
import Button from 'react-bootstrap/Button'


const New = ({title,description,date,content,author,archiveDate,_id, setNews}) => {


    const formatedDate = formatDate(date)

    // Archive a New, adding an archiveDate to this object in DB
    const handlerArchive = async() => {
        const resp = await archiveNew(_id)
        if(resp === 200){
            handlerDeleteFromList()
        }
    }

    // Delete this item from the list 
    const handlerDeleteFromList = () => {
        setNews( (news) => {
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
                    Date: {formatedDate} 
                </div>
                <div className="col">
                    Author: {author}
                </div>
                <div className="col" >
                    <Button onClick={handlerArchive}
                            variant="dark">
                        <img 
                        src="./eye-off.png"
                        width="25"
                        height="25"
                        className="d-inline-block align-top"   
                        alt=""                 
                        >
                    </img> Archive
                    </Button>
                </div>
            </div>
                
            </Card.Footer>
        </Card.Body>
        </Card>
    )
}


export default New

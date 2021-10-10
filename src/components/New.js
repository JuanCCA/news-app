import React from 'react'
import Card from 'react-bootstrap/Card'
import {archiveNew} from '../helpers/News/archiveNew'


const New = ({title,description,date,content,author,archiveDate,_id, setNews}) => {

    const stringToDate = new Date(date)

    const dateString = `${stringToDate.getFullYear()}/${stringToDate.getMonth() + 1}/${stringToDate.getDate()}  ${stringToDate.getHours()}:${stringToDate.getMinutes()}`
    
    const handlerArchive = async() => {
        const resp = await archiveNew(_id)
        if(resp === 200){
            handlerDeleteFromList()
        }
    }

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
                    Date: {dateString} 
                </div>
                <div className="col">
                    Author: {author}
                </div>
                <div className="col">
                    <img 
                        role='button'
                        src="./eye-off.png"
                        width="30"
                        height="30"   
                        alt=""                 
                        onClick={handlerArchive}
                        >
                    </img>
                </div>
            </div>
                
            </Card.Footer>
        </Card.Body>
        </Card>
    )
}


export default New

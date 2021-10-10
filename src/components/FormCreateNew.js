import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { createNew } from '../helpers/News/createNew';



const FormCreateNew = () => {


    // Validator
    const [, setValidated] = useState(false);


    // Title
    const [title, setTitle] = useState('')
    const handleInputTitle = ( e ) => {
        setTitle( e.target.value );
    }

    // Description
    const [description, setDescription] = useState('')
    const handleInputDescription = ( e ) => {
        setDescription( e.target.value );
    }

    // Content
    const [content, setContent] = useState('')
    const handleInputContent = ( e ) => {
        setContent( e.target.value );
    }

    // Author
    const [author, setAuthor] = useState('')
    const handleInputAuthor = ( e ) => {
        setAuthor( e.target.value );
    }

    // Submit
    const handleSubmit = async (event) => {
        
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        // Create New
        await createNew(title,description,content,author);
        setValidated(true);

      };



    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control required type="text" placeholder="Title"  value={title} onChange={handleInputTitle}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control required type="text" placeholder="Description" value={description} onChange={handleInputDescription}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="content">
                <Form.Label>Content</Form.Label>
                <Form.Control required as="textarea" placeholder="Content" value={content} onChange={handleInputContent}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="author">
                <Form.Label>Author</Form.Label>
                <Form.Control required type="text" placeholder="Author" value={author} onChange={handleInputAuthor}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Save
            </Button>
        </Form>
    )
}

export default FormCreateNew

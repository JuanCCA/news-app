import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import {Link} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'


const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="/" >
                    <img 
                        src="./icon.png"
                        width="35"
                        height="35"
                        className="d-inline-block align-top"
                        alt=""
                    />
                    {' '}
                    <span className="h3">NewsApp</span></Navbar.Brand>
                    <Nav className="m-auto">
                    <Nav.Link as={Link} to="/" className="h3 mx-2" >News</Nav.Link>
                    <Nav.Link as={Link} to="archived" className="h3 mx-2" >Archived</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            
            
        </>
    )
}


export default NavBar
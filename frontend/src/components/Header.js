import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {
    return (
        <header >
            <Navbar  expand="lg" collapseOnSelect>
                <Container>
                
                <div className="logo"><i className='fas fa-graduation-cap'></i>Aspire Academy</div>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
 
                 <Navbar.Collapse id="basic-navbar-nav">
                 <Nav className="ml-auto">
                 
                        <Nav.Link className="navlinks">Programs</Nav.Link>
                    
                 
                        <Nav.Link className="navlinks">Apply</Nav.Link>
                 
                  
                        <Nav.Link className="navlinks">Blog</Nav.Link>
                
                
                        <Nav.Link className="navlinks">Login</Nav.Link>
                  
               
                </Nav>
                </Navbar.Collapse>

                </Container>
 
            </Navbar>
        </header>
    )
}

export default Header
import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, Image } from 'react-bootstrap'

const Header = () => {
    return (
        <header >
            <Navbar  expand="lg" collapseOnSelect>
                <Container>
                
                <div className="logo">Van Fleet Services LLC</div>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
 
                 <Navbar.Collapse id="basic-navbar-nav">
                 <Nav className="ml-auto">
                    <LinkContainer to='/'>
                        <Nav.Link className="navlinks">Home</Nav.Link>
                    </LinkContainer>
                        
                                   
                     <LinkContainer to='/contact'>
                        <Nav.Link  className="navlinks">Contact</Nav.Link>
                     </LinkContainer>   
                        
                  
               
                </Nav>
                </Navbar.Collapse>

                </Container>
 
            </Navbar>
        </header>
    )
}

export default Header
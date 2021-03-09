import React from 'react'
import { Jumbotron, Button, Card, Container, Col, Row, Image, Table} from 'react-bootstrap'
const HomeScreen = () => {
    return (
        <div>
            
            <Jumbotron fluid="true" className="bgBlue" >
              
            <Container className="reset" fluid>
                <Row >
                  <Col sm={8}>
                    <p className="med-yellow-text highlight mx-5">
                      Pennslyvania's Plumbing and Electrical Services
                    </p>
                    <div className="large-white-text mx-5">
                      HIRE THE BEST
                    </div>
                    <div className="white-text mx-5">Van Fleet Services LLC is a one-stop shop for all your plubming and electrical needs. We pride ourselves with quality work. Whatever your needs, we get it right the first time</div>
                    <div><Button className="m-5" variant="light">Contact Us</Button></div>
                  </Col>
                  <Col sm={4}>
                        <Card
                bg="light"
                text="dark"
                style={{ width: '30rem'}}
                className="m-3"
                >
                   
                    <Card.Body>
                    <Card.Text className="med-green-text"><center>100% Satisfaction Guaranteed</center></Card.Text>
                    <Card.Text className="med-black-text">
                        <i className='fas fa-check check'></i> 24/7 Emergency Services<br />
                        <i className='fas fa-check check'></i> PA Licensed and Insured<br />
                        <i className='fas fa-check check'></i> No Emergency or Overtime Charges!<br />
                        <i className='fas fa-check check'></i> All your plumbing & electrical needs<br />
                        <i className='fas fa-check check'></i> Same Day Service<br />
                      

                    </Card.Text>
                    <center>
                    <Button className="btn-lg" variant="primary">Contact</Button>
                    </center>
                    </Card.Body>
                </Card>
                         </Col>
                        
                        
           
                
                </Row>
                <Row className="highlight text-center">
                  <Col>
                  <span>
                        <i className='fas fa-star rating'></i>
                        <i className='fas fa-star rating'></i>
                        <i  className='fas fa-star rating'></i>
                        <i className='fas fa-star rating'></i>
                        <i className='fas fa-star rating'></i> 
                           </span>
                           <h2>Google 5-Star Rating</h2>
                  </Col>
                </Row>
             
                </Container>
            </Jumbotron>
            <Container fluid="true">
                <Row>
                  <Col>
                  FORM GOES HERE
                    
                  </Col>
                  <Col >
                    <Image className="right-image" src="./images/vanfleet-van.png"/>
                  
                    
                  </Col>
                </Row>
                </Container>
            <Container>
              <Row className="text-center mt-5"><Col>
                        <Image src="./images/vanfleet-icon-van.png" /></Col>
                      
                        
                       <Col>
                        <Image src="./images/vanfleet-icon-waterheater.png" /></Col>
                       
                            
                       <Col>
                        <Image src="./images/vanfleet-icon-clogged-pipe.png" /></Col>
                         
                      
                       <Col> <Image src="./images/vanfleet-icon-pipe.png" /></Col>
                </Row>
                <Row className="text-center mb-5">
                <Col><span className="med-black-text highlight">Fast, Same Day Service</span></Col>
                <Col>    <span className="med-black-text highlight">Water Heaters, Sump Pumps</span></Col>
                <Col>    <span className="med-black-text highlight">Clogged Drain? We fix anything!</span></Col>
                <Col>   <span className="med-black-text highlight">Leaks? Call us!</span></Col>
                        
               </Row>        
                    </Container>
                
                <Jumbotron className="midsection">
                <Container >
                <Row>
                    <Col>
                    <Card
                bg="dark"
                text="light"
                style={{ width: '35rem' }}
                className="mb-2"
                >
                   
                    <Card.Body>
                    <Card.Text className="med-yellow-text">Key Technologies </Card.Text>
                    <Card.Text className="med-black-text">
                        <li>MongoDB, Express, React, Node (MERN)</li>
                        <li> Experts with all databases</li>
                        <li>Swift, Java, Kotlin</li>
                        
                        
                    </Card.Text>
                    
                    </Card.Body>
                </Card>
                    </Col>
                    <Col>
                    <Card
                bg="dark"
                text="white"
                style={{ width: '30rem' }}
                className="mb-2"
                >
                   
                    <Card.Body>
                    <Card.Text className="med-yellow-text">What We Do</Card.Text>
                    <Card.Text className="med-black-text">
                    
                        We do it all! Let us handle everything from hosting to design and development. 
                  
                    </Card.Text>
                     </Card.Body>
                </Card>
                    </Col>
                </Row>
                </Container>
                </Jumbotron>
              
              <Jumbotron>
                  <Container>
                      <Row>
                          <Col>
                          <Table className="med-black-text" variant="light" responsive striped bordered hover>
  <thead className="tablehead">
    <tr>
      <th>Technologies and Competencies</th>
      <th>Service</th>
     
      
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td>Cost</td>
      <td>Hourly or Contract</td>
      
    </tr>
  
    
    <tr>
      <td>Product Management</td>
      <td><i className='fas fa-check check'></i></td>
      
      
    </tr>
    <tr>
      <td>Latest Technologies (Node, React)</td>
      <td><i className='fas fa-check check'></i> </td>
    </tr>

    <tr>
      <td>Outsourcing - Save 70%</td>
      <td><i className='fas fa-check check'></i> </td>
    </tr>
    <tr>
      <td>Responsive Web Design & Development</td>
      <td><i className='fas fa-check check'></i> </td>
    </tr>
    <tr>
      <td>Mobile App Development (iOS and Android)</td>
      <td><i className='fas fa-check check'></i> </td>
    </tr>
    <tr>
      <td>Satisfaction Guaranteed</td>
      <td><i className='fas fa-check check'></i> </td>
    </tr>

    
  </tbody>
</Table>
                          </Col>
                      </Row>
                  </Container>
              </Jumbotron>
        </div>
    )
}

export default HomeScreen


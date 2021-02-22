import React from 'react'
import { Jumbotron, Button, Card, Container, Col, Row, Image, Table} from 'react-bootstrap'
const HomeScreen = () => {
    return (
        <div>
            
            <Jumbotron className="bgBlue">
            <Container>
                <Row>
                    <Col >
                    <span className="headerText">Online Coding School</span><br />
                        
                        <span className="large-white-text">JUMPSTART YOUR NEW CAREER</span><br />
                        <p className="white-text">The most affordable, comprehensive coding school</p>
                        
                        <p>
            
                    <Button variant="primary">Learn more</Button>
                        </p>
                        </Col>
                        <Col>
             <Card
                bg="light"
                text="dark"
                style={{ width: '30rem' }}
                className="mb-2"
                >
                   
                    <Card.Body>
                    <Card.Text className="med-green-text"><center>Software Engineering Immersive</center></Card.Text>
                    <Card.Text className="med-black-text">
                        <i className='fas fa-check check'></i> Pay now or after you get hired<br />
                        <i className='fas fa-check check'></i> Get hired or pay nothing<br />
                        <i className='fas fa-check check'></i> 1-on-1 Mentorship<br />
                        <i className='fas fa-check check'></i> 100% online<br />
                        <i className='fas fa-check check'></i> Project-based learning<br />
                        <i className='fas fa-check check'></i> Earn $100k+ as a software engineer<br />
                    </Card.Text>
                    <center>
                    <Button className="btn-lg" variant="primary">Apply Now</Button>
                    </center>
                    </Card.Body>
                </Card>
                </Col>
                </Row>
             
                </Container>
            </Jumbotron>
            <Container className='py-5'>
                    <Row>
                        <Col>
                        <Image src="./images/laptop_girl.jpg" rounded/>
                        </Col>
                        <Col className="large-black-text">
                            Work with a team of students to build portfolio-ready projects <p className="py-3 med-green-text">Learn with hands-on instruction with instructors who are ready to assist you.</p>
                        </Col>
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
                    <Card.Text className="med-yellow-text">Self-Paced Program </Card.Text>
                    <Card.Text className="med-black-text">
                        <li> Study anytime, anywhere</li>
                        <li> Pay monthly or annually<span class="badge bg-warning">Save</span></li>
                        <li><strike>$199</strike> $99 a month <span class="badge bg-warning">Limted Time Offer</span></li>
                        <li> Awesome Instructors</li>
                        
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
                    <Card.Text className="med-yellow-text">Software Engineering Immersive</Card.Text>
                    <Card.Text className="med-black-text">
                    <ul>
                        <li>Full time (8am -4pm M-F)</li>
                        <li>Duration: 6 to 9 months</li>
                        <li>Pay upfront, monthly, or defer until hired</li>
                    </ul>
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
      <th>Fulltime vs. Self-Paced</th>
      <th>Self-Paced</th>
      <th>Fulltime Software Engineering Immersive</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Cost</td>
      <td>$1999 annually or <strike>$199</strike> $99/month</td>
      <td>$9975 upfront or defer payment until hired</td>
      
    </tr>
    <tr>
      <td>Program Duration</td>
      <td>Unlimited time</td>
      <td>6 to 9 months</td>
    </tr>
    
    <tr>
      <td>Real-World Projects</td>
      <td><i className='fas fa-check check'></i></td>
      
      <td><i className='fas fa-check check'></i> </td>
    </tr>
    <tr>
      <td>Job Search Training</td>
      <td></td>
      
      <td><i className='fas fa-check check'></i> </td>
    </tr>

    <tr>
      <td>Up-to-date Curriculum</td>
      <td><i className='fas fa-check check'></i></td>
      
      <td><i className='fas fa-check check'></i> </td>
    </tr>

    <tr>
      <td>1-on-1 Mentorship</td>
      <td></td>
      
      <td><i className='fas fa-check check'></i> </td>
    </tr>

    <tr>
      <td>Team Work</td>
      <td></td>
      
      <td><i className='fas fa-check check'></i> </td>
    </tr>

    <tr>
      <td>Support From Instructors</td>
      <td></td>
      
      <td><i className='fas fa-check check'></i> </td>
    </tr>

    <tr>
      <td>Aspire Labs (Project-building Program)</td>
      <td></td>
      
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


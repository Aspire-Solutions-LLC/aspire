import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'


import Header from './components/Header.js'
import HomeScreen from './screens/HomeScreen.js'
import ContactScreen from './screens/ContactScreen'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Container className="reset" fluid>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/contact' component={ContactScreen} />
      </Container>
      <Footer /> 
      </Router>
     
      
    </div>
  );
}

export default App;

import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'


import Header from './components/Header.js'
import HomeScreen from './screens/HomeScreen.js'


function App() {
  return (
    <div className="App">
      <Header />
      <HomeScreen />
       
      
    </div>
  );
}

export default App;

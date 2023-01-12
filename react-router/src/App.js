// npm install react-router-dom (npm library)
// Utilizing React Router DOM Components
// This Upgrade 1
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import './App.css';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

import Home from './components/Home'
import About from './components/About'
import Packages from './components/Packages'

function App() {
  <Container>
    <Nav defaultActiveKey="/" variant="tabs" fill>
        <Nav.Item>
            <Nav.Link href="/"> 
                <Link to="/">Home</Link>
            </Nav.Link>
        </Nav.Item>
        <Nav.Item >
            <Nav.Link eventKey={"aboutPage"}> 
                <Link to="/about">About Us</Link>z
            </Nav.Link>
        </Nav.Item>
        <Nav.Item >
            <Nav.Link eventKey={"packagesPage"}> 
                <Link to="/packages">Our Packages</Link> 
            </Nav.Link>
         </Nav.Item>
    </Nav>
</Container>

}

export default App;

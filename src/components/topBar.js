import React from "react";
import { Container, Navbar, Nav} from "react-bootstrap";
import "./style.css";
import { Link } from "react-router-dom";

const brandName = "Quoto";

function topBar() {
    <Navbar className="nav" style={{background: 'black'}}>
            
    <Container>
    
            <p className="logo">{brandName}</p>
            <Nav className="mr-auto ">
            <Link to="/" exact className="alink">Home</Link>
            <Link to="/features" className="link">Features</Link>
            <Link to="/contact" className="link">Contact</Link>
            

        </Nav>
        
    </Container>
</Navbar>
};

export default topBar;
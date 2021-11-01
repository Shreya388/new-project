import React from "react";
import "./pages.css";
import { Container } from "react-bootstrap";

const About = () => {
    return ( 
        <div className="cover">
                <div className="cover_overlay">
                    <Container>
                    
                        <div style={{marginTop:'200pt', textAlign: 'center'}}>
                        
                        <h1 className="display-3 Heading">You are on the about page</h1>
                        
                        
                        </div>
                        
                    </Container>
                </div>
            </div>
     );
}
 
export default About;
import { Container, Card, Row, Col } from "react-bootstrap";
import a from "./images/what_we_make/a.jpg";
import b from "./images/what_we_make/b.jpg";
import c from "./images/what_we_make/c.jpg";
import "./style.css"

const AboutUs = () => {
    return (
        <div style={{marginTop: '800px', textAlign:'center', paddingBottom: '100pt'}}>
            <Container>
                <h1 style={{}}>What We Make</h1><br /><br />

                <Row>
                <Col xs lg="4">
                <Card>
                 <Card.Img className="cards" variant="top" src={a} />
                
                </Card>
                </Col>

                <Col xs lg="4">
                <Card>
                 <Card.Img className="cards" variant="top" src={b} />
                
                </Card>
                </Col>

                <Col xs lg="4">
                <Card >
                 <Card.Img className="cards" variant="top" src={c} />
                
                </Card>
                </Col>
                </Row>
  
    
  

            </Container>
        </div>
    )
}

export default AboutUs;
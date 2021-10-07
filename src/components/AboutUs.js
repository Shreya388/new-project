import { Container, Card, Row, Col } from "react-bootstrap";
import a from "./images/what_we_make/a.jpg";
import b from "./images/what_we_make/b.jpg";
import c from "./images/what_we_make/c.jpg";
import "./style.css"

const AboutUs = () => {
    return (
        <div>
        <div style={{marginTop: '1000px', textAlign:'center', height: "400px", }}>
            <Container>
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
        </div>
    )
}

export default AboutUs;
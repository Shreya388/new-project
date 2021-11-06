import {Col, Row, Container, Navbar, Nav} from "react-bootstrap"
import "./style.css"


const Footer = () => {
    return (
        <div>
            <br />
           <Col xs lg="12" className="" style={{background:'#1f1f1f'}}>
                <Container style={{padding:'90pt'}}>
                    <Row>
                        <Col xs lg="3"><h1 className="text-white">Quoto</h1></Col>
                        <Col xs lg="3">
                            <a className="link" href="#features">Features</a><br />
                            <a className="link" href="#pricing">Pricing</a><br />
                            <a className="link" href="#contact">Contact</a>
                        </Col>
                        <Col xs lg="3">
                            <a className="link" href="#features">Features</a><br />
                            <a className="link" href="#pricing">Pricing</a><br />
                            <a className="link" href="#contact">Contact</a>
                        </Col>
                        <Col xs lg="3">
                            <a className="link" href="#features">Features</a><br />
                            <a className="link" href="#pricing">Pricing</a><br />
                            <a className="link" href="#contact">Contact</a>
                        </Col>
                    </Row>
                </Container>
            </Col>

            <Navbar className="" style={{background: 'rgb(206 61 3 / 92%)'}}>
                <Container>
                    
                    <a className="link" href="#home">Copyright .etc</a>
                    
                    <Nav className="mr-auto ">
                        <a className="link ml-4" href="#home">meenaxjha@gmail.com</a>

                    </Nav>
                    
                </Container>
            </Navbar>
        </div>
    )

}

export default Footer;
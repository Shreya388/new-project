import { Form, Row, Container, Col, Button} from "react-bootstrap"
import "./style.css"

const ContactUs = () => {
    return (
       <div>
           <Container>
                <div className="col-md-12" style={{padding:"100px"}}>
                    <h1 className="text-center">Contact Us</h1><br />

                    <Row>
                        <Col md lg="6">
                            <Form.Control type="name" placeholder="Name" /><br />
                            <Form.Control type="name" placeholder="Company Name" />
                        </Col>

                        <Col md lg="6">
                            <Form.Control type="email" placeholder="Enter email" /><br />
                            <Form.Control type="email" placeholder="Phone." />
                            
                        </Col>
                    </Row><br />

                    <Form.Control as="textarea" rows={3} placeholder="Write your message" /><br />

                    <Button>Send</Button>
                </div>


           </Container>
        </div>
    )
}

export default ContactUs;
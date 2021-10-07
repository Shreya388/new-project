import { Form, Row, Col, Button} from "react-bootstrap"
import "./style.css"

const ContactUs = () => {
    return (
       <div class="contactUs_div">
           
                <div className="container_fluid">
                    <h1 className="text-center">Contact Us</h1><br />

                    <Row>
                        <Col md lg="6">
                            <Form.Control type="name" id="name" placeholder="Name" /><br />
                            <Form.Control type="name" id="comp_name" placeholder="Company Name" />
                        </Col>

                        <Col md lg="6">
                            <Form.Control type="email" id="email" placeholder="Enter email" /><br />
                            <Form.Control type="email" id="phone" placeholder="Phone." />
                            
                        </Col>
                    </Row><br />

                    <Form.Control as="textarea" rows={3} placeholder="Write your message" /><br />

                    <Button>Send</Button>
                </div>
        </div>
    )
}

export default ContactUs;
import { Container, Card, Row, Col } from "react-bootstrap";
import a from "./images/what_we_make/a.jpg";
import b from "./images/what_we_make/b.jpg";
import c from "./images/what_we_make/c.jpg";
import "./style.css"

let cards = [
    { title: "First", body: "First Desc", imageSrc: a },
    { title: "Second", body: "Second Desc", imageSrc: b },
    { title: "Third", body: "Third Desc", imageSrc: c }
]

const BlogCard = (props) => {
    return (
    <Col xs lg="4">
    <Card>
    <Card.Img className="cards" variant="top" src={props.imageSrc} />
    <Card.Title>{props.title}</Card.Title>
    <p>{props.body}</p>
    </Card>
    </Col>);
}

const AboutUs = (props) => {
    return (
        <div>
        <div style={{marginTop: '1000px', textAlign:'center', height: "400px", }}>
            <Container>
                <Row>
                    {
                        cards.map(card => <BlogCard title={card.title} body={card.body} imageSrc={card.imageSrc} />)
                    }
                  
                </Row>
  
            </Container>
        </div>
        </div>
    )
}

export default AboutUs;
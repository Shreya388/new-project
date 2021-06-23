import { Navbar, Nav, Container, Col} from "react-bootstrap"
import "./style.css"


var headPara = "Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin at nisl sagittis, ornare ipsum non,"
var headText = "Yo, What up :)";
const brandName = "Quoto";


const Header = () => {
    return (
        
        <div>
            <div className="cover">
                <div className="cover_overlay">
                    <Container style={{margin: '150pt'}}>
                        <Col xs={5}>
                        <h1 className="display-3 Heading" style={{ color: 'yellow' }}>{headText}</h1>
                        <p style={{color:'#c7c7c7'}}>{headPara}</p>
                        </Col>
                    </Container>
                </div>
            </div>

            {/*Navbar section*/}
            <Navbar className="nav">
                <Container>
                <Navbar.Brand style={{fontSize: '23px', color: '#84801A', padding: '15pt', fontWeight: 'bold', fontFamily: 'Source Sans Pro'}}>{brandName}</Navbar.Brand>
                
                <Container>
                    <Nav className="mr-auto ">
                        <a className="alink" href="#home">Home</a>
                        <a className="link" href="#features">Features</a>
                        <a className="link" href="#pricing">Pricing</a>
                        <a className="link" href="#contact">Contact</a>
            
                    </Nav>
                    </Container>
                </Container>
            </Navbar>
            {/*Navbar section End*/}
          </div>  


           
            
       
    )
}



export default Header;
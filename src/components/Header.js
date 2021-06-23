import { Navbar, Nav, Container} from "react-bootstrap"
import "./style.css"

var headText = "Yo, What up";
const brandName = "QUOTO";

const Header = () => {
    return (
        
        <div>
            <div className="cover">
                <div className="cover_overlay">
                    <Container>
                        <h1 className="display-3 text-white Heading">{headText}</h1>
                    </Container>
                </div>
            </div>

            {/*Navbar section*/}
            <Navbar className="nav">
                <Container>
                <Navbar.Brand style={{fontSize: '23px', color: '#84801A', fontWeight: 'bold', fontFamily: 'Source Sans Pro'}}>{brandName}</Navbar.Brand>
                
                <Container>
                    <Nav className="mr-auto ">
                        <a className="link" href="#home">Home</a>
                        <a className="link" href="#features">Features</a>
                        <a className="link" href="#pricing">Pricing</a>
            
                    </Nav>
                    </Container>
                </Container>
            </Navbar>
            {/*Navbar section End*/}
          </div>  


           
            
       
    )
}



export default Header;
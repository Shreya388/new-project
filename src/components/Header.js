import { Navbar, Nav, Container} from "react-bootstrap"
import "./style.css";
import { Link } from "react-router-dom";


var headText = "Yo, What up ";
const brandName = "Quoto";

const Header = () => {
    return (
        <div>
            
            <div className="cover">
                <div className="cover_overlay">
                    <Container>
                    
                        <div style={{marginTop:'200pt', textAlign: 'center'}}>
                        
                        <h1 className="display-3 Heading">{headText}</h1>
                        <p style={{color:'#c7c7c7'}}>Interdum et malesuada fames ac ante ipsum primis in faucibus.<br /> Proin at nisl sagittis, ornare ipsum non,</p>
                        
                        </div>
                        
                    </Container>
                </div>
            </div>

            {/*Navbar section*/}
            <Navbar className="nav" style={{}}>
            
            <Container>
    
            <p className="logo">{brandName}</p>
            <Nav className="mr-auto ">
            <Link to="/" className="alink">Home</Link>
            <Link to="/about" className="link">About</Link>
            <Link to="/features" className="link">Features</Link>
            <Link to="/contact" className="link">Contact</Link>
            

        </Nav>
        
    </Container>
</Navbar>
            {/*Navbar section End*/}
          </div>    
       
    )
}



export default Header;
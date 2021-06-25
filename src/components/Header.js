import { Navbar, Nav, Container} from "react-bootstrap"
import "./style.css"



var headText = "Yo, What up :)";
const brandName = "Quoto";


const Header = () => {
    return (
        
        <div>
            <div className="cover">
                <div className="cover_overlay">
                    <Container>
                    
                        <div style={{marginTop:'200pt'}}>
                        
                        <h1 className="display-3 Heading" style={{ color: 'rgb(221 255 140)', fontFamily: 'sans-serif'}}>{headText}</h1>
                        <p style={{color:'#c7c7c7'}}>Interdum et malesuada fames ac ante ipsum primis in faucibus.<br /> Proin at nisl sagittis, ornare ipsum non,</p>
                        
                        </div>
                        
                    </Container>
                </div>
            </div>

            {/*Navbar section*/}
            <Navbar className="nav">
                <Container>
                <Navbar.Brand style={{fontSize: '26px', color: '#a3d9ff', padding: '10pt', fontWeight: 'bold', fontFamily: 'Source Sans Pro'}}>{brandName}</Navbar.Brand>
                
                
                    <Nav className="mr-auto ">
                        <a className="alink" href="#home">Home</a>
                        <a className="link" href="#features">Features</a>
                        <a className="link" href="#pricing">Pricing</a>
                        <a className="link" href="#contact">Contact</a>
            
                    </Nav>
                    
                </Container>
            </Navbar>
            {/*Navbar section End*/}
          </div>  


           
            
       
    )
}



export default Header;
import { Navbar, Nav} from "react-bootstrap"
import "./style.css"

const Header = () => {
    return (
        
        <div>

            <div className="cover">
                <div className="cover_overlay">
                    <div class="container">
                        <h1 className="display-3 text-white Heading">Yo! What up</h1>
                    </div>
                </div>
            </div>

            {/*Navbar section*/}
            <Navbar className="nav">
                <div className="container">
                <Navbar.Brand href="#home">QUOTO</Navbar.Brand>
                
                    <Nav className=" mr-auto ml-auto">
                        <a className="link" href="#home">Home</a>
                        <a className="link" href="#features">Features</a>
                        <a className="link" href="#pricing">Pricing</a>
            
                    </Nav>
                </div>
            </Navbar>
            {/*Navbar section End*/}
          </div>  


           
            
       
    )
}



export default Header;
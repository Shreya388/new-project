import { Container } from "react-bootstrap";
import "./style.css"

const dummyTxt = "'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit'";

const AboutMe = () => {
    return (
        <div style={{  background: 'rgb(14 14 14 / 93%)', boxShadow: '1pt 1pt 1pt 0pt rgb(33 33 33 / 96%)'}}>
            <Container className="text-white" style={{padding: '100pt', fontFamily: 'revert'}}>
                
                    <h1>ABOUT ME</h1><br />
                    <p style={{color:'silver'}}>{dummyTxt}</p>
            
            </Container>
        </div>
    )
}

export default AboutMe;
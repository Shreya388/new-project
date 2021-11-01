import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AboutUs from "./components/AboutUs";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";

//importing pages for links of the navbar:
import About from './Pages/About';
import Features from './Pages/Features';
import Contact from './Pages/Contact';
import Header from './components/Header';

const Home = () =>{
  return (
    <div>
      <Header />
      <AboutUs />
      <AboutMe />
      <ContactUs />
      <Footer />
    </div>
  )
}


function App() {
  return (
    <Router>
      
    <div className="App">
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/features" component={Features} />
      <Route path="/contact" component={Contact} />
      </Switch>
      {/*page components*/}
      
    </div>
    </Router>
    
  );
}



export default App;

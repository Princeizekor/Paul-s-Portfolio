import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import './components/Home.css'
import './components/Navbar.css'
import './components/About.css'
import './components/Portfolio.css'
import './components/Resume.css'
import './components/Service.css'
import './components/Contact.css'
import Navbar from './Navbar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Service from './components/Service';
import Contact from './components/Contact';
function App() {
  return (
    <Router>
     <div className="App">
        <Navbar />
        <div className="component">
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/resume">
            <Resume />
          </Route>
          <Route exact path="/service">
            <Service />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route> */}
        </div>
      </div>
    </Router>
  );
}

export default App;

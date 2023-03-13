import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Service from './pages/Service';
import Contact from './pages/Contact';
import BrowserCursor from './components/BrowserCursor';
function App() {
  return (
    <Router>
     <div className="App">
        <Navbar />
        <BrowserCursor />
        <div className="component">
          <Route exact path="/">
            <Home />
          </Route>
            <About />
            <Resume />
          {/*<Route exact path="/portfolio">
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

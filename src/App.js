import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/HomePage";
import PartnersPage from './pages/partners'
import GetQuote from "./pages/getQuote";
// import { Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import CompareResult from './pages/compareResult';
import Contact from './pages/Contact';


function App() {
  return (

    

    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/promotion">
            <CompareResult />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/quote">
            <GetQuote />
          </Route>
          <Route path="/partners">
            <PartnersPage />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div> 
  );
}

export default App;

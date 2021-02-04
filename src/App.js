import Header from "./components/Header";
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Footer from "./components/Footer";
import Home from "./pages/HomePage";
import PartnersPage from './pages/partners'
import Help from "./pages/HomePage/components/Help";
import GetQuote from "./pages/getQuote";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
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
        <Help/>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

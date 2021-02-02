import Header from "./components/Header";
import './App.css'
import Hero from './components/HeroSession'
import Hero2 from './components/Hero'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HeroBottom from "./components/HeroBottom";
import Prices from "./components/Prices";
import Work from "./components/Work";
import Help from "./components/Help";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/'>
            <Header />
            <Hero />
            <HeroBottom />
            <Hero2/>
            <Prices/>
            <Work/>
            <Help/>

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

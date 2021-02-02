import Header from "./components/Header";
import './App.css'
import Hero from './components/HeroSession'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path='/'>
      <Header />
      <Hero/>

        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;

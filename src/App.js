import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MyContext from "./contextManager";
import { useState } from 'react';
import Breadcrumb from './Breadcrumb';
import Navigation from './Navigation';
import Home from './Home';
import Products from './Products';
import Settings from './Settings';

function App() {
  const [userDetails, setUserDetails] = useState({
    firstName: "Alvin",
    lastName: "Xu"
  });
  return (
    <div className="App">
      <Router>
        <Breadcrumb />
        <div className='bot'>
          <Navigation />
          <MyContext.Provider value={{userDetails, setUserDetails}}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Products">
              <Products />
            </Route>
            <Route exact path="/Settings">
              <Settings />
            </Route>
          </Switch>
          </MyContext.Provider>
        </div>
      </Router>
    </div>
  );
}

export default App;

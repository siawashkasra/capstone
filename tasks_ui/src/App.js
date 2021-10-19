import logo from './logo.svg';
import './App.css';
import Team from './Team';
import { Switch, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Switch>
          <Route exact path="/">
          </Route>
          <Route exact path="/dashboard">
          </Route>
          <Route exact path="/team" render={()=> <Team />} />
      </Switch>
    </>
  );
}

export default App;

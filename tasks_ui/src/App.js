import logo from './logo.svg';
import './App.css';
import Team from './Team';
import { Switch, Route } from "react-router-dom";
import Dashboard from './Dashboard';
import Tasks from './Tasks';
import Calendar from './Calendar';
import Reports from './Reports';


function App() {
  return (
    <>
      <Switch>
          <Route exact path="/dashboard" render={()=> <Dashboard />} />
          <Route exact path="/team" render={()=> <Team />} />
          <Route exact path="/tasks" render={()=> <Tasks />} />
          <Route exact path="/calendar" render={()=> <Calendar />} />
          <Route exact path="/reports" render={()=> <Reports />} />
      </Switch>
    </>
  );
}

export default App;

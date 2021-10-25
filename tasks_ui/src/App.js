import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Dashboard from './Dashboard';
import Tasks from './Tasks';
import Calendar from './Calendar';
import Reports from './Reports';
import TeamList from './TeamList';
import Landing from './Landing';


function App() {
  return (
    <>
      <Switch>
          <Route exact path="/dashboard" render={()=> <Dashboard />} />
          <Route exact path="/teams" render={()=> <TeamList />} />
          <Route exact path="/tasks" render={()=> <Tasks />} />
          <Route exact path="/calendar" render={()=> <Calendar />} />
          <Route exact path="/reports" render={()=> <Reports />} />
          <Route exact path="" render={()=> <Landing />} />
      </Switch>
    </>
  );
}

export default App;

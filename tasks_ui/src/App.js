import "./App.css";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Tasks from "./Task/Tasks";
import TeamList from "./Team/TeamList";
import Landing from "./Landing";
import TeamDetails from "./TeamDetails";
import Calendar from "./Calendar";
import MemberDetails from "./MemberDetails";


function App() {
  return (
    <>
      <Switch>
        <Route exact path="/dashboard" render={() => <Dashboard />} />
        <Route exact path="/teams" render={() => <TeamList />} />
        <Route exact path="/teams/:id" render={(routeProps) => <TeamDetails {...routeProps} />} />
        <Route exact path="/tasks" render={() => <Tasks />} />
        <Route exact path="/calendar" render={() => <Calendar />} />
        <Route exact path="/members/:id" render={(routeProps) => <MemberDetails {...routeProps} />} />
        <Route exact path="" render={() => <Landing />} />
      </Switch>
    </>
  );
}

export default App;

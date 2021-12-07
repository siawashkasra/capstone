import "./App.css";
import { Switch, Route } from "react-router-dom";
import Tasks from "./Task/Tasks";
import TeamList from "./Team/TeamList";
import Landing from "./Landing";
import TeamDetails from "./TeamDetails";
import Calendar from "./Calendar";
import MemberDetails from "./MemberDetails";
import Login from "./Login";
import Signup from "./Signup";
import { ProvideAuth } from "./API/use-auth";

function App() {
  return (
    <>
      <ProvideAuth>
        <Switch>
          <Route
            exact
            path="/login"
            render={(routeProps) => <Login {...routeProps} />}
          />
          <Route
            exact
            path="/signup"
            render={(routeProps) => <Signup {...routeProps} />}
          />
          <Route
            exact
            path="/teams"
            render={(routeProps) => <TeamList {...routeProps} />}
          />
          <Route
            exact
            path="/teams/:id"
            render={(routeProps) => <TeamDetails {...routeProps} />}
          />
          <Route
            exact
            path="/tasks"
            render={(routeProps) => <Tasks {...routeProps} />}
          />
          <Route
            exact
            path="/calendar"
            render={(routeProps) => <Calendar {...routeProps} />}
          />
          <Route
            exact
            path="/members/:id"
            render={(routeProps) => <MemberDetails {...routeProps} />}
          />
          <Route
            exact
            path=""
            render={(routeProps) => <Landing {...routeProps} />}
          />
        </Switch>
      </ProvideAuth>
    </>
  );
}

export default App;

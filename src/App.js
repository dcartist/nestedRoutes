import "./styles.css";
import { Switch, Route, Link } from "react-router-dom";
import Topics from "./Topics";
// import Topic from "./Topic";

export default function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/">
          <p>Home</p>
        </Route>
        <Route path="/topics">
          <Topics />
        </Route>
      </Switch>
    </div>
  );
}

import "./App.css";
import About from "./about";
import Login from "./login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";

function App() {
  return (
    <>
      {/* <button onClick={() => {}}></button> */}
      <Router>
        <Route path="/" component={Home} />
        <div>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    </>
  );
}
function Home() {
  const history = useHistory();
  const handleClick = () => history.push("/about");
  return (
    <>
      <h1>Home</h1>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        click
      </button>
    </>
  );
}
export default App;

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "../context/Authcontext";
import Layout from "./layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Signup" component={Signup} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Quiz" component={Quiz} />
            <Route exact path="/Result" component={Result} />
          </Switch>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;

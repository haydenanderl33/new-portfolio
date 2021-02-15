import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/pages-index";
import Contact from "./components/ContactPage/contact-index"
import {mainInfo} from "./components/Data"
const App = () => {

  

  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/contact" component={Contact} exact />
      </Switch>
    </Router>
  );
}

export default App;

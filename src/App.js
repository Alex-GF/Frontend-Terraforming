import "./static/css/bootstrap.min.css";
import Index from "./pages/index";
import Board from "./pages/board";
import Header from "./sections/header";

import {

  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {

  return (
    <Router>
      <Switch>
        <Route path="/board">
          <Header/>
          <Board/>
        </Route>
        <Route path="/"><Index/></Route>
      </Switch>
    </Router>
  );
}

export default App;

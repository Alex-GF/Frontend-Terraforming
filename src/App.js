import "./static/css/bootstrap.min.css";
import Index from "./pages/index";
import Board from "./pages/board";
import Header from "./sections/header";
import Profile from "./pages/profile";
//import Welcome from "./pages/welcome";
//import Ranking from "./pages/ranking";

import {

  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {

  return (
    <Router>
      <Switch>

        <Route path="/welcome">
          <Header/>
          {/*<Welcome/>*/}
        </Route>
        
        <Route path="/ranking">
          <Header/>
          {/*<Ranking/>*/}
        </Route>

        <Route path="/board">
          <Header/>
          <Board/>
        </Route>

        <Route path="/profile">
          <Header/>
          <Profile/>
        </Route>

        <Route path="/"><Index/></Route>
        
      </Switch>
    </Router>
  );
}

export default App;

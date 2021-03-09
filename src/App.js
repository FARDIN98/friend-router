

import './App.css';
import Friend from './Component/Friend/Friend';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import NoMatch from './Component/NoMatch/NoMatch';
import FriendDetail from './Component/FriendDetail/FriendDetail';

function App() {
  
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        {/* By default */}
        <Route path="/friend/:id">
          <FriendDetail/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        {/* If didnt match any route */}
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

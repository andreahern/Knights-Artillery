import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Join from './Join';
import Host from './Host';
import './App.css';

const Home = () => {
  return (
  <div className="container mx-auto px-4 h-64 bg-gray-300 rounded-md shadow-md space-x-8 flex items-center justify-center">
  <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-md" to="/join">Join Game</Link>
  <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-md" to="/host">Host Game</Link>
</div>);
}

const App = () => {
  return (
    <Router>
    <div className="App">
        <h1 className="text-6xl font-bold">
          Knight's Artillery
        </h1>

        <Switch>
          <Route path="/host" component={Host}></Route>
          <Route path="/join" component={Join}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
    </div>
    </Router>

  );
}

export default App;

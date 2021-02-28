import React from 'react';
import { Creation } from './pages/Creation';
import { Detail } from './pages/Detail';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

export const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <p>
            <code>Handcuffs Scaffolding</code>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <ul>
            <li>
              <Link to="/">Creation</Link>
            </li>
            <li>
              <Link to="/lock/5">Sample Detail Page</Link>
            </li>
          </ul>
        </header>

        <Switch>
          <Route exact path="/">
            <Creation />
          </Route>
          <Route exact path="/lock/:handcuffId">
            <Detail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

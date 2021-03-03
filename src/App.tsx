import React from 'react';
import styled from 'styled-components';
import { Creation } from './pages/Creation';
import { Detail } from './pages/Detail';
import { Landing } from './pages/Landing';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar } from './components/Navbar';

const Container = styled.div`
  background-color: white;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
`;

export const App = () => {
  return (
    <Router>
      <Container>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/create">
            <Creation />
          </Route>
          <Route exact path="/lock/:handcuffId">
            <Detail />
          </Route>
        </Switch>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create">Creation</Link>
          </li>
          <li>
            <Link to="/lock/5">Sample Detail Page</Link>
          </li>
        </ul>
      </Container>
    </Router>
  );
};

export default App;

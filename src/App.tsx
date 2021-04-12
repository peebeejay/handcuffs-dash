import styled from 'styled-components';
import { Creation } from './pages/Creation';
import { Detail } from './pages/Detail';
import { Landing } from './pages/Landing';
import { Vaults } from './pages/Vaults';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { DevTools } from './components/DevTools';

const Container = styled.div`
  position: relative;
  background-color: white;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  min-height: 100vh;
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
          <Route exact path="/vaults">
            <Vaults />
          </Route>
        </Switch>
        <DevTools />
      </Container>
    </Router>
  );
};

export default App;

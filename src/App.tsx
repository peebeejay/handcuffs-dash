import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { StylesProvider } from '@material-ui/core/styles';
import styled from 'styled-components';
import { Creation } from './pages/Creation';
import { Detail } from './pages/Detail';
import { Landing } from './pages/Landing';
import { Vaults } from './pages/Vaults';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { DevTools } from './components/DevTools';
import { Web3ConnectionManager } from './components/Web3ConnectionManager';

const Container = styled.div`
  position: relative;
  background-color: white;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  min-height: 100vh;
`;

const getLibrary = (provider: any): Web3Provider => {
  const library = new Web3Provider(provider);

  return library;
};

export const App = () => {
  return (
    <StylesProvider injectFirst>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Router>
          <Web3ConnectionManager>
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
          </Web3ConnectionManager>
        </Router>
      </Web3ReactProvider>
    </StylesProvider>
  );
};

export default App;

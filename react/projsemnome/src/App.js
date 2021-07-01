import React from 'react';
import { Router } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import history from './services/history';

import Header from './components/Header';
import Routes from './routes';

function App() {
  return (
    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyles />
    </Router>
  );
}

export default App;

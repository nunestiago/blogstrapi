import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Login from './pages/Login';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <GlobalStyles />
    </div>
  );
}

export default App;

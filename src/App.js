import React from 'react';
import './App.scss';
import Header from './Header/Header';
import AppBody from './AppBody/AppBody';
import { BrowserRouter as Router, Switch} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header />
      <Router >
       <Switch>
          <AppBody />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

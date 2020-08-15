import React from 'react';
import './App.scss';
import Header from './Header/Header';
import AppBody from './AppBody/AppBody';
import { BrowserRouter as Router, Switch} from 'react-router-dom';
import Login from './Login/Login';
import { useStateValue } from './Provider';
function App() {
  const [{ user }] = useStateValue();
  return (
    <div className="App">
      {
        !user ?
        <Login />
        :
        <>
        <Header />
        <Router basename={process.env.PUBLIC_URL}>
        <Switch>
            <AppBody />
          </Switch>
        </Router>
        </>
      }
      
    </div>
  );
}

export default App;

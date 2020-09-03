import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import SignUp from './components/pages/SignUp/SignUp';
import About from './components/pages/About/About';
import InitialPage from './components/LaunchView/InitialPage';
import CssBaseline from '@material-ui/core/CssBaseline'

function App() {
  return (
    <Router>
      <Navbar />
      <CssBaseline />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/sign-up' component={SignUp} />
        <Route path='/sobre' component={About} />
        <Route path='/pagina-inicial' component={InitialPage} />
      </Switch>
    </Router>
  );
}

export default App;

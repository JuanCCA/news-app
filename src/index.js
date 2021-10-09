import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import News from './views/News'
import Archived from './views/Archived'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavBar />

      <Switch>
        <Route exact path="/" component={News} />
        <Route path="/archived" component={Archived} />
      </Switch>
      
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


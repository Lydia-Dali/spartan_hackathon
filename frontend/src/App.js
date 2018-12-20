import React, { Component } from 'react';

import {NavLink} from 'react-router-dom';
import Router from './routes'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <div>       
            
          <ul className="nav-temporaire">
            <NavLink exact to="/" onClick="refreshPage()" activeClassName="selected">
              <li className="active">Accueil</li>
            </NavLink>
            <NavLink exact to="/Page1" activeClassName="selected">
              <li>Page1</li>
            </NavLink>
            <NavLink exact to="/Page2" activeClassName="selected">
              <li>Page2</li>
            </NavLink>
            <NavLink exact to="/Page3" activeClassName="selected">
              <li>Page3</li>
            </NavLink>
            <NavLink exact to="/Page4" activeClassName="selected">
              <li>Page4</li>
            </NavLink>
            <NavLink exact to="/Page5" activeClassName="selected">
              <li>Page5</li>
            </NavLink>
            <NavLink exact to="/Page6" activeClassName="selected">
              <li>Page6</li>
            </NavLink>
            <NavLink exact to="/Page7" activeClassName="selected">
              <li>Page7</li>
            </NavLink>
            <NavLink exact to="/Page8" activeClassName="selected">
              <li>Page8</li>
            </NavLink>
          </ul>

            <Router />

          </div>
      </div>
    );
  }
}

export default App;


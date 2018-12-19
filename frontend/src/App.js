import React, { Component } from 'react';
import { Provider } from "react-redux";

import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Accueil from "./components/PageAccueil/Accueil";
import Page1 from "./components/Page1/page1";
import Page2 from "./components/Page2/page2";
import Page3 from "./components/Page3/page3";
import Page4 from "./components/Page4/page4";
import Page5 from "./components/Page5/page5";
import Page6 from "./components/Page6/page6";
import Page7 from "./components/Page7/page7";
import Page8 from "./components/Page8/page8";


// import Router from './routes'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <Provider>
        <BrowserRouter>
          <div>            

            <Switch>
              <Route exact path="/" component={Accueil} />
              <Route path="/Page1" component={Page1} />
              <Route path="/Page2" component={Page2} />
              <Route path="/Page3" component={Page3} />
              <Route path="/Page4" component={Page4} />
              <Route path="/Page5" component={Page5} />
              <Route path="/Page6" component={Page6} />
              <Route path="/Page7" component={Page7} />
              <Route path="/Page8" component={Page8} />
            </Switch>

            {/* <Router/> */}

          </div>
        </BrowserRouter>
      </Provider>
      </div>
    );
  }
}

export default App;


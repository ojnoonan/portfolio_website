import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './index.css';

import HomePage from './HomePage/home';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
  {/* <NavBar/> */}
      <Switch>
          <Route exact path="/" component={HomePage} />
      </Switch>
  {/* <Footer/> */}
  </BrowserRouter>,
  rootElement
);

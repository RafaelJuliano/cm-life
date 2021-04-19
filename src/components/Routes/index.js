import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Especialidades from "../../paginas/Especialidades";
import HomePage from '../../paginas/HomePage'
import ScrollToTop from "../ScrollToTop";

const Routes = () => (
  <BrowserRouter>
    <ScrollToTop/>
    <Switch>
      <Route  exact path='/cm-life/' component = { HomePage } />
      <Route path='/cm-life/especialidades' component = { Especialidades } />
    </Switch>
  </BrowserRouter>
);

export default Routes;
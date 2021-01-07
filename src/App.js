import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApplicationView } from './views'; /* 
import SecureRoute from './SecureRoute'; */
import { Interceptors } from './interceptors';

export default function App() {
  return (
    <Router>
      <Interceptors />
      <Switch>
        <Route exact path="/" component={ApplicationView} />
        <Route path="/apply" component={ApplicationView} />
        {/* 
        <SecureRoute path="/apply" component={ApplicationView} /> */}
      </Switch>
    </Router>
  );
}

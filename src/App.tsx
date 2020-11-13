import { LoginContainer } from 'containers/auth/Login.container';
import { HomeContainer } from 'containers/home/Home.container';
import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/login" component={LoginContainer} />
        <Route path="*">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

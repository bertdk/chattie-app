import { HomeComponent } from 'components/home.component';
import { LoginComponent } from 'components/login.component';
import { PrivateRoute } from 'containers/auth/PrivateRoute.container';
import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/" component={HomeComponent} />
        <Route exact path="/login" component={LoginComponent} />
        <Route path="*">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

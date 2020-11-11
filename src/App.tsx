import { HomeComponent } from 'components/Home/Home.component';
import { LoginContainer } from 'containers/auth/Login.container';
import { PrivateRoute } from 'containers/auth/PrivateRoute.container';
import React, { useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { initSocket } from 'utils/socket';

function App() {
  useEffect(() => {
    initSocket();
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/" component={HomeComponent} />
        <Route exact path="/login" component={LoginContainer} />
        <Route path="*">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

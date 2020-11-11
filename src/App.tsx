import { LoginContainer } from 'containers/auth/Login.container';
import { PrivateRoute } from 'containers/auth/PrivateRoute.container';
import { HomeContainer } from 'containers/home/Home.container';
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

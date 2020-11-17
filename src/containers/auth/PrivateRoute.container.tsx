import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { selectUserName } from 'selectors/user.selector';

export const PrivateRoute = ({ children, ...rest }: any) => {
  const user = useSelector(selectUserName);
  return <Route {...rest} render={() => (user ? children : <Redirect to="/login" />)} />;
};

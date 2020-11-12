import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { selectUserName, selectUserRoom } from 'selectors/user.selector';

export const PrivateRoute = ({ component, ...rest }: any) => {
  const username = useSelector(selectUserName);
  const room = useSelector(selectUserRoom);
  if (username && room) {
    return <Route {...rest} render={component} />;
  }
  return <Redirect to="/login" />;
};

import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { selectUserName, selectUserRoom } from 'selectors/user.selector';

export function PrivateRoute({ ...rest }) {
  const username = useSelector(selectUserName);
  const room = useSelector(selectUserRoom);
  if (username && room) {
    return rest.component;
  }
  return <Redirect to="/login" />;
}

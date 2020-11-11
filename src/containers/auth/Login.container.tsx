import { loadUserAsync } from 'actions/user.action';
import { LoginComponent } from 'components/Login/Login.component';
import { Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { selectUserLoaded } from 'selectors/user.selector';
import { loginValidationSchema } from 'validation/login.validation';

interface Values {
  name: string;
  room: string;
}

export function LoginContainer() {
  const loaded = useSelector(selectUserLoaded);
  const dispatch = useDispatch();
  if (loaded) {
    return <Redirect to="/" />;
  }
  return (
    <Formik
      initialValues={{
        name: '',
        room: '',
      }}
      validationSchema={loginValidationSchema}
      onSubmit={(values: Values) => {
        dispatch(loadUserAsync(values.name, values.room));
      }}
    >
      <LoginComponent />
    </Formik>
  );
}

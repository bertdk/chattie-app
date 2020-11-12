import { loadUserAsync } from 'actions/user.action';
import { LoginComponent } from 'components/Login/Login.component';
import { Formik } from 'formik';
import { BrowserHistory } from 'history';
import React from 'react';
import { useDispatch } from 'react-redux';
import { loginValidationSchema } from 'validation/login.validation';

interface Values {
  name: string;
  room: string;
}

export const LoginContainer = ({ history }: { history: BrowserHistory }) => {
  const dispatch = useDispatch();
  const onSubmit = (values: Values) => {
    dispatch(loadUserAsync(values.name, values.room));
    history.push('/');
  };

  return (
    <Formik
      initialValues={{
        name: 'Bert',
        room: 'Test',
      }}
      validationSchema={loginValidationSchema}
      onSubmit={onSubmit}
    >
      <LoginComponent />
    </Formik>
  );
};

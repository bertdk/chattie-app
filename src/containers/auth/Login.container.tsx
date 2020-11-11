import { loadUserAsync } from 'actions/user.action';
import { LoginComponent } from 'components/Login/Login.component';
import { Formik, FormikHelpers } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { selectUserName, selectUserRoom } from 'selectors/user.selector';

interface Values {
  name: string;
  room: string;
}

export function LoginContainer() {
  const name = useSelector(selectUserName);
  const room = useSelector(selectUserRoom);
  const dispatch = useDispatch();
  if (name && room) {
    return <Redirect to="/" />;
  }
  return (
    <Formik
      initialValues={{
        name: 'Tess',
        room: 'Test',
      }}
      onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        dispatch(loadUserAsync(values.name, values.room));
        setSubmitting(false);
      }}
    >
      <LoginComponent />
    </Formik>
  );
}

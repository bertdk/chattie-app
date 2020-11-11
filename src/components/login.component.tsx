import React from 'react';
import { Field, Form } from 'formik';

export function LoginComponent() {
  return (
    <Form>
      <label htmlFor="name">Name</label>
      <Field id="name" name="name" />
      <label htmlFor="room">Room</label>
      <Field id="room" name="room" />
      <button type="submit">Login</button>
    </Form>
  );
}

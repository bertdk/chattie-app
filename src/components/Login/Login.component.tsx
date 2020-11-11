import React from 'react';
import { Field, Form } from 'formik';
import { Button, Grid } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import s from './login.module.scss';

export function LoginComponent() {
  return (
    <div className={s.container}>
      <Form className={s.box}>
        <h1>Login</h1>
        <Grid container direction="column" justify="flex-start" alignItems="center" spacing={3}>
          <Grid item>
            <Field component={TextField} label="Name" id="name" name="name" />
          </Grid>
          <Grid item>
            <Field component={TextField} label="Room" id="room" name="room" />
          </Grid>
          <Grid item className={s.fullWidth}>
            <Button variant="contained" color="primary" type="submit" fullWidth size="large">
              Login
            </Button>
          </Grid>
        </Grid>
      </Form>
    </div>
  );
}
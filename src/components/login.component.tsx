import React from 'react';
import { Field, Form } from 'formik';
import { Button, Grid } from '@material-ui/core';
import { TextField } from 'formik-material-ui';

export function LoginComponent() {
  return (
    <Form>
      <Grid container direction="column" justify="flex-start" alignItems="flex-start" spacing={1}>
        <Grid item>
          <Field component={TextField} label="Name" id="name" name="name" />
        </Grid>
        <Grid item>
          <Field component={TextField} label="Room" id="room" name="room" />
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" type="submit">
            Login
          </Button>
        </Grid>
      </Grid>
    </Form>
  );
}

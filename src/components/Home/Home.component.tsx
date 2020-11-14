import { Grid, Button } from '@material-ui/core';
import { Field, Form } from 'formik';
import React from 'react';
import cx from 'classnames';
import s from './home.module.scss';
import { TextField } from 'formik-material-ui';
import { MessageComponent } from './Message.component';
import { IMessage } from 'utils/interfaces/message.interface';

export const HomeComponent = ({ messages }: { messages: IMessage[] }) => {
  return (
    <div className={cx(s.messages)}>
      <div className={cx(s.messagesDisplay)}>
        {messages?.map((message, i) => (
          <MessageComponent key={i} message={message} />
        ))}
      </div>
      <Form className={cx(s.messagesForm)}>
        <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
          <Grid item xs={10}>
            <Field component={TextField} label="Message" id="message" name="message" fullWidth autoFocus variant="outlined" />
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" color="primary" type="submit" fullWidth size="large">
              Send
            </Button>
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

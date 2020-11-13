import { HomeComponent } from 'components/Home/Home.component';
import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { IMessage } from 'utils/interfaces/message.interface';
import { sendMessage, socket } from 'utils/socket';
import { messageValidationSchema } from 'validation/message.validation';

interface Values {
  message: string;
}

export const HomeContainer = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  useEffect(() => {
    socket.on('message', ({ text, username, createdAt }: { text: string; username: string; createdAt: string }) => {
      console.log('message from server:', username, 'says', text);
      setMessages((old) => {
        return [...old, { message: text, name: username, createdAt }];
      });
    });
  }, []);

  const initialValues = () => {
    return process.env.REACT_APP_NODE_ENV === 'development'
      ? {
          message: 'Hey',
        }
      : {
          message: '',
        };
  };

  return (
    <Formik
      initialValues={initialValues()}
      validationSchema={messageValidationSchema}
      onSubmit={(values: Values, { setSubmitting }) => {
        sendMessage(values.message);
        setSubmitting(false);
      }}
    >
      <HomeComponent messages={messages} />
    </Formik>
  );
};

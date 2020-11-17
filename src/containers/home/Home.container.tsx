import { HomeComponent } from 'components/Home/Home.component';
import { Formik, FormikHelpers } from 'formik';
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
      setMessages((old) => {
        return [...old, { message: text, name: username, createdAt }];
      });
    });
  }, []);

  const [inputRef, setInputRef]: any = useState(null);

  useEffect(() => {
    if (inputRef) {
      inputRef.focus();
    }
  }, [inputRef, messages]);
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
      onSubmit={(values: Values, { setSubmitting, resetForm }: FormikHelpers<Values>) => {
        sendMessage(values.message);
        setSubmitting(false);
        resetForm();
        inputRef.focus();
      }}
    >
      <HomeComponent messages={messages} setInputRef={setInputRef} />
    </Formik>
  );
};

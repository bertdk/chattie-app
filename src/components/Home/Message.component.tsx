import React from 'react';
import { IMessage } from 'utils/interfaces/message.interface';
import s from './home.module.scss';

export const MessageComponent = ({ message }: { message: IMessage }) => (
  <div className={s.messagesMessage}>
    <p className={s.messagesMessageHead}>
      {message.createdAt} - {message.name}
    </p>
    <p className={s.messagesMessageText}>{message.message}</p>
  </div>
);

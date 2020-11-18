import React from 'react';
import { IMessage } from 'utils/interfaces/message.interface';

import cx from 'classnames';
import s from './home.module.scss';
import { admin } from 'constants/people';
import { useSelector } from 'react-redux';
import { selectUserName } from 'selectors/user.selector';
import { americanTo24 } from 'utils/helpers/time';

export const MessageComponent = ({ message: { name, createdAt, message } }: { message: IMessage }) => {
  const username = useSelector(selectUserName);
  return (
    <div
      className={cx(
        s.messagesMessage,
        name === admin && s.messagesMessageAdmin,
        name.toLowerCase() === username.toLowerCase() && s.messagesMessageMine
      )}
      ref={(el) => {
        el?.scrollIntoView();
      }}
    >
      <p className={s.messagesMessageHead}>
        {americanTo24(createdAt)} —— <span className={s.messagesMessageHeadName}>{name}</span>
      </p>
      <p className={s.messagesMessageText}>{message}</p>
    </div>
  );
};

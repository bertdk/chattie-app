import React from 'react';
import { loadUserAsync } from 'actions/user.action';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserLoaded, selectUserName } from 'selectors/user.selector';
import s from './app.module.scss';

export function HomeComponent() {
  const name = useSelector(selectUserName);
  const loaded = useSelector(selectUserLoaded);
  const dispatch = useDispatch();
  return (
    <div className={s.app}>
      {loaded ? <p>{name}</p> : <p>Loading</p>}
      <button aria-label="Set name" onClick={() => dispatch(loadUserAsync('Bert'))}>
        Name it
      </button>
    </div>
  );
}
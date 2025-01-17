import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { userReducer } from 'reducers/user.reducer';
import { roomReducer } from './room.reducer';

export const store = configureStore({
  reducer: {
    user: userReducer,
    room: roomReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

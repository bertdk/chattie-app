import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  name: string;
  room: string;
  load: boolean;
  loaded: boolean;
  failed: boolean;
}

interface UserPayload {
  name: string;
  room: string;
}

const initialState: UserState = {
  name: '',
  room: '',
  load: false,
  loaded: false,
  failed: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    load: (state) => {
      state.load = true;
    },
    loaded: (state, action: PayloadAction<UserPayload>) => {
      state.loaded = true;
      state.name = action.payload.name;
      state.room = action.payload.room;
    },
    failed: (state) => {
      state.failed = true;
    },
  },
});

export const { load, loaded, failed } = userSlice.actions;

export const userReducer = userSlice.reducer;

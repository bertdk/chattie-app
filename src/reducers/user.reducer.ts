import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  name: string;
  load: boolean;
  loaded: boolean;
  failed: boolean;
}

const initialState: UserState = {
  name: '',
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
    loaded: (state, action: PayloadAction<string>) => {
      state.loaded = true;
      state.name = action.payload;
    },
    failed: (state) => {
      state.failed = true;
    },
  },
});

export const { load, loaded, failed } = userSlice.actions;

export const userReducer = userSlice.reducer;

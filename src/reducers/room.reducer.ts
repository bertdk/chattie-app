import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RoomState {
  room: string;
  names: string[];
  load: boolean;
  loaded: boolean;
  failed: boolean;
}

interface RoomPayload {
  room: string;
  names: string[];
}

const initialState: RoomState = {
  room: '',
  names: [],
  load: false,
  loaded: false,
  failed: false,
};

export const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    load: (state) => {
      state.load = true;
    },
    loaded: (state, action: PayloadAction<RoomPayload>) => {
      console.log('state', state);
      state.loaded = true;
      state.room = action.payload.room;
      state.names = action.payload.names;
    },
    failed: (state) => {
      state.failed = true;
    },
  },
});

export const { load, loaded, failed } = roomSlice.actions;

export const roomReducer = roomSlice.reducer;

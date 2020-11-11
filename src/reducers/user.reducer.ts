import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from 'store';

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

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const loadUserAsync = (name: string): AppThunk => (dispatch) => {
  setTimeout(() => {
    dispatch(loaded(name));
  }, 1000);
};

export const selectUserName = (state: RootState) => state.user.name;
export const selectUserLoad = (state: RootState) => state.user.load;
export const selectUserLoaded = (state: RootState) => state.user.loaded;
export const selectorUserFailed = (state: RootState) => state.user.failed;

export const userReducer = userSlice.reducer;

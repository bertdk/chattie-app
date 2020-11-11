import { load, loaded } from 'reducers/user.reducer';
import { AppThunk } from 'store';

export const loadUserAsync = (name: string, room: string): AppThunk => (dispatch) => {
  dispatch(load());
  setTimeout(() => {
    dispatch(loaded({ name, room }));
  }, 3000);
};

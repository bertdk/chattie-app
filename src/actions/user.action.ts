import { load, loaded } from 'reducers/user.reducer';
import { AppThunk } from 'reducers/store';
import { joinRoom } from 'utils/socket';

export const loadUserAsync = (name: string, room: string): AppThunk => async (dispatch) => {
  dispatch(load());

  await dispatch(loaded({ name, room }));

  joinRoom(name, room);
};

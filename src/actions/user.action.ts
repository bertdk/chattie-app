import { load, loaded } from 'reducers/user.reducer';
import { AppThunk } from 'reducers/store';
import Axios from 'axios';
import { joinRoom } from 'utils/socket';

export const loadUserAsync = (name: string, room: string): AppThunk => async (dispatch) => {
  dispatch(load());

  dispatch(loaded({ name, room }));

  await Axios.get('http://localhost:8000/api/users');

  joinRoom(name, room);
};

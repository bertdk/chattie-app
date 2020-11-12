import { loaded } from 'reducers/room.reducer';
import { AppThunk } from 'reducers/store';

export const loadRoom = (names: string[], room: string): AppThunk => (dispatch) => {
  dispatch(loaded({ names, room }));
};

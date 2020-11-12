import { RootState } from 'reducers/store';

export const selectUserName = (state: RootState) => state.user.name;
export const selectUserRoom = (state: RootState) => state.user.room;
export const selectUserLoad = (state: RootState) => state.user.load;
export const selectUserLoaded = (state: RootState) => state.user.loaded;
export const selectorUserFailed = (state: RootState) => state.user.failed;

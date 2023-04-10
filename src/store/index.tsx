import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import openPlayerReducer  from '@/store/playerSlice';
import currentMusicReducer from '@/store/playerSlice';
import playingMusicReducer from '@/store/playerSlice';
import playedMusicReducer from '@/store/playerSlice';
import playlistDataReducer from '@/store/playerSlice';
import { playlistApi } from '@/store/playerSlice';

const store = configureStore({
  reducer: {
    setIsOpenPlayer: openPlayerReducer,
    setCurrentMusic: currentMusicReducer,
    setPlayingMusic: playingMusicReducer,
    setPlayedMusic: playedMusicReducer,
    setPlaylistData: playlistDataReducer,
    [playlistApi.reducerPath]: playlistApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(playlistApi.middleware),
});
setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

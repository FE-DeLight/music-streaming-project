import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import openPlayerReducer from '@/store/oepnPlayerSlice';
import currentMusicReducer from '@/store/currentMusicSlice';
import playingMusicReducer from '@/store/playingMusicSlice';
import { playlistApi } from '@/store/playlistDataSlice';

const store = configureStore({
  reducer: {
    setIsOpenPlayer: openPlayerReducer,
    setCurrentMusic: currentMusicReducer,
    setPlayingMusic: playingMusicReducer,
    [playlistApi.reducerPath]: playlistApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(playlistApi.middleware),
});
setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

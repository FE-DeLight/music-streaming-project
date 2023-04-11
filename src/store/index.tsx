import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import playerReducer from '@/store/playerSlice';
import { playlistApi } from '@/store/playerSlice';

const store = configureStore({
  reducer: {
    setPlayer: playerReducer,
    [playlistApi.reducerPath]: playlistApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(playlistApi.middleware),
});
setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

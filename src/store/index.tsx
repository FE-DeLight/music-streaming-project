import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import playerReducer from '@/store/playerSlice';

const store = configureStore({
  reducer: {
    setPlayer: playerReducer,
  },
});
setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

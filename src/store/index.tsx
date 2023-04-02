import { configureStore } from '@reduxjs/toolkit';
import openPlayerReducer from '@/store/oepnPlayerSlice';

const store = configureStore({
  reducer: {
    setIsOpenPlayer: openPlayerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;

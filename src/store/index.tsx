import { configureStore } from '@reduxjs/toolkit';
import openPlayerReducer from '@/store/oepnPlayerSlice';
import currentMusicReducer from '@/store/currentMusicSlice';

const store = configureStore({
  reducer: {
    setIsOpenPlayer: openPlayerReducer,
    setCurrentMusic: currentMusicReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

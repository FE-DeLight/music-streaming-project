import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

export interface playedMusicState {
  value: number;
}

const initialState: playedMusicState = { value: 0 };

export const playedMusicSlice = createSlice({
  name: 'playedMusic',
  initialState,
  reducers: {
    setPlayedMusic: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { setPlayedMusic } = playedMusicSlice.actions;

export default playedMusicSlice.reducer;

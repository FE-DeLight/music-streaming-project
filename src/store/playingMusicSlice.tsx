import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

export interface isPlayingMusicState {
  value: boolean;
}

const initialState: isPlayingMusicState = { value: false };

export const isPlayingMusicSlice = createSlice({
  name: 'playingMusic',
  initialState,
  reducers: {
    setPlayingMusic: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { setPlayingMusic } = isPlayingMusicSlice.actions;

export default isPlayingMusicSlice.reducer;

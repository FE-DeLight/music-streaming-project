import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

export interface isPlayMusicState {
  value: boolean;
}

const initialState: isPlayMusicState = { value: false };

export const isPlayMusicSlice = createSlice({
  name: 'playMusic',
  initialState,
  reducers: {
    setPlayMusic: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { setPlayMusic } = isPlayMusicSlice.actions;

export default isPlayMusicSlice.reducer;

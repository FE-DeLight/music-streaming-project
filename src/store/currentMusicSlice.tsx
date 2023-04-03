import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

export interface currentMusicState {
  value: {};
}

const initialState: currentMusicState = { value: {} };

export const currentMusicSlice = createSlice({
  name: 'selectMusic',
  initialState,
  reducers: {
    setCurrentPlayMusic: (state, action: PayloadAction<{}>) => {
      state.value = action.payload;
    },
  },
});

export const { setCurrentPlayMusic } = currentMusicSlice.actions;

export default currentMusicSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

export interface isOpenPlayerState {
  value: boolean;
}

const initialState: isOpenPlayerState = { value: false };

export const openPlayerSlice = createSlice({
  name: 'openPlayer',
  initialState,
  reducers: {
    setOpenPlayer: (state) => {
      state.value = !state.value;
    },
  },
});

export const { setOpenPlayer } = openPlayerSlice.actions;

export default openPlayerSlice.reducer;

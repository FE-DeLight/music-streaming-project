import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { combineReducers } from '@reduxjs/toolkit';

export interface state {
  isOpenPlayerValue: { value: boolean };
  playlistDataValue: { value: [] };
  currentMusicValue: { value: {} };
  isPlayingMusicValue: { value: boolean };
  playedMusicValue: { value: number };
}

const initialState: state = {
  isOpenPlayerValue: { value: false },
  playlistDataValue: { value: [] },
  currentMusicValue: { value: {} },
  isPlayingMusicValue: { value: false },
  playedMusicValue: { value: 0 },
};

// 플레이리스트 데이터 받아오기
export const playlistApi = createApi({
  reducerPath: 'playlistApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/categoryList' }),
  endpoints: (builder) => ({
    getPlaylistData: builder.query({
      query: () => ``,
    }),
  }),
});

// 플레이어 리스트 open 상태 여부
export const openPlayerSlice = createSlice({
  name: 'openPlayer',
  initialState: initialState.isOpenPlayerValue,
  reducers: {
    setOpenPlayer: (state): any => {
      state.value = !state.value;
    },
  },
});

// 플레이리스트 세팅
export const playlistDataSlice = createSlice({
  name: 'playlist',
  initialState: initialState.playlistDataValue,
  reducers: {
    setPlaylistData: (state, action: PayloadAction<[]>) => {
      state.value = action.payload;
    },
  },
});

// 재생중 음악 세팅
export const currentMusicSlice = createSlice({
  name: 'selectMusic',
  initialState: initialState.currentMusicValue,
  reducers: {
    setCurrentPlayMusic: (state, action: PayloadAction<{}>) => {
      state.value = action.payload;
    },
  },
});

// 음악 재생중 여부
export const isPlayingMusicSlice = createSlice({
  name: 'playingMusic',
  initialState: initialState.isPlayingMusicValue,
  reducers: {
    setPlayingMusic: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

// 음악 진행률
export const playedMusicSlice = createSlice({
  name: 'playedMusic',
  initialState: initialState.playedMusicValue,
  reducers: {
    setPlayedMusic: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { setOpenPlayer } = openPlayerSlice.actions;
export const { setPlaylistData } = playlistDataSlice.actions;
export const { setCurrentPlayMusic } = currentMusicSlice.actions;
export const { setPlayingMusic } = isPlayingMusicSlice.actions;
export const { setPlayedMusic } = playedMusicSlice.actions;
export const { useGetPlaylistDataQuery } = playlistApi;

export default combineReducers({
  openPlayerSlice: openPlayerSlice.reducer,
  playlistDataSlice: playlistDataSlice.reducer,
  currentMusicSlice: currentMusicSlice.reducer,
  isPlayingMusicSlice: isPlayingMusicSlice.reducer,
  playedMusicSlice: playedMusicSlice.reducer,
});

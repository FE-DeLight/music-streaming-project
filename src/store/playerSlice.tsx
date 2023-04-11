import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface state {
  isOpenPlayerValue: boolean;
  playlistDataValue: [];
  currentMusicValue: {};
  isPlayingValue: boolean;
  playedMusicValue: number;
}

const initialState: state = {
  isOpenPlayerValue: false,
  playlistDataValue: [],
  currentMusicValue: {},
  isPlayingValue: false,
  playedMusicValue: 0,
};

// 플레이리스트 데이터 받아오기
export const fetchPlaylist: any = createAsyncThunk('playerSlice/fetchPlaylist', async () => {
  const response = await fetch('http://localhost:3000/api/categoryList');
  const data = await response.json();
  return data.data.playList.trackList;
});

const playerSlice = createSlice({
  name: 'playerSlice',
  initialState,
  reducers: {
    // 플레이어 리스트 open 상태 여부
    setOpenPlayer: (state): any => {
      state.isOpenPlayerValue = !state.isOpenPlayerValue;
    },
    // 플레이리스트 세팅
    setPlaylistData: (state, action: PayloadAction<[]>) => {
      state.playlistDataValue = action.payload;
    },
    // 재생중 음악 세팅
    setCurrentPlayMusic: (state, action: PayloadAction<{}>) => {
      state.currentMusicValue = action.payload;
    },
    // 음악 재생중 여부
    setPlayingMusic: (state, action: PayloadAction<boolean>) => {
      state.isPlayingValue = action.payload;
    },
    // 음악 진행률
    setPlayedMusic: (state, action: PayloadAction<number>) => {
      state.playedMusicValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    // pending(진행중), fulfilled(완료), rejected(실패)
    builder.addCase(fetchPlaylist.fulfilled, (state, action: PayloadAction<[]>) => {
      state.playlistDataValue = action.payload;
      console.log('state',state.playlistDataValue);
      
    })
  }
});

export const { setOpenPlayer, setPlaylistData, setCurrentPlayMusic, setPlayingMusic, setPlayedMusic } =
  playerSlice.actions;

export default playerSlice.reducer;

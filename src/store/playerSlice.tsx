import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface state {
  isOpenPlayerValue: boolean;
  playlistDataValue: [];
  currentMusicValue: {};
  isPlayingValue: boolean;
  playedProgressValue: number;
  readyPlayerValue: boolean;
}

const initialState: state = {
  isOpenPlayerValue: false,
  playlistDataValue: [],
  currentMusicValue: {},
  isPlayingValue: false,
  playedProgressValue: 0,
  readyPlayerValue: false,
};

// 플레이리스트 데이터 받아오기
export const fetchPlaylist: any = createAsyncThunk('playerSlice/fetchPlaylist', async () => {
  const response = await fetch('http://localhost:3000/api/categoryList');
  const data = await response.json();
  let playlist = data.data.playList.trackList;
  playlist = playlist.map((item: {}, index: number) => {
    return {
      ...item,
      index: index,
    };
  });
  return playlist;
});

const playerSlice = createSlice({
  name: 'playerSlice',
  initialState,
  reducers: {
    // 플레이어 리스트 open 상태 여부
    setOpenPlayer: (state): any => {
      state.isOpenPlayerValue = !state.isOpenPlayerValue;
    },
    // 플레이어 로드 여부
    setReadyPlayer: (state, action: PayloadAction<boolean>) => {
      state.readyPlayerValue = action.payload;
    },
    // 플레이리스트 세팅
    setPlaylistData: (state, action: PayloadAction<[]>) => {
      state.playlistDataValue = action.payload;
    },
    // 재생중 음악 세팅
    setCurrentPlayMusic: (state, action: PayloadAction<{}>) => {
      state.currentMusicValue = action.payload;
    },
    // 재생중 음악 초기화
    resetCurrentPlayMusic: (state) => {
      state.currentMusicValue = {
        adultAuthYn: null,
        agencyId: null,
        album: null,
        artistList: null,
        displayYn: null,
        fileUpdateDateTime: null,
        freeYn: null,
        id: null,
        index: null,
        name: null,
        rank: null,
        representationArtist: null,
        svcDrmYn: null,
        svcStreamingYn: null,
        unReleasedYn: null,
        updateDateTime: null,
        url: null,
      };
    },
    // 음악 재생중 여부
    setPlayingMusic: (state, action: PayloadAction<boolean>) => {
      state.isPlayingValue = action.payload;
    },
    // 음악 진행률
    setPlayedProgress: (state, action: PayloadAction<number>) => {
      state.playedProgressValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    // pending(진행중), fulfilled(완료), rejected(실패)
    builder.addCase(fetchPlaylist.fulfilled, (state, action: PayloadAction<[]>) => {
      state.playlistDataValue = action.payload;
    });
  },
});

export const {
  setOpenPlayer,
  setReadyPlayer,
  setPlaylistData,
  setCurrentPlayMusic,
  resetCurrentPlayMusic,
  setPlayingMusic,
  setPlayedProgress,
} = playerSlice.actions;

export default playerSlice.reducer;

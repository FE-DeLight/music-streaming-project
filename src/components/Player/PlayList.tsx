import { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPlayMusic, setPlayingMusic, setPlayedProgress, resetCurrentPlayMusic } from '@/store/playerSlice';
import PlayerButton from '@/components/Player/PlayerButton';
import BlindText from '@/components/Player/BlindText';
import MusicListItem from '@/components/Player/MusicListItem';

const PlayList = styled.div<{}>`
  .play-list {
    margin-bottom: 20px;
    border-radius: 5px;
    background: hsla(0, 0%, 100%, 0.1);
  }

  .play-list--fold .list-fold-btn {
    transform: rotate(0);
  }

  .play-list--fold .content {
    display: none;
  }

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px 10px 15px;
  }

  .list-title {
    font-size: 14px;
    font-weight: bold;
    color: #fff;
  }

  .top-right {
    display: flex;
    gap: 15px;
  }

  .play-btn,
  .list-fold-btn,
  .show-more-btn {
    width: 30px;
    height: 30px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }

  .content {
    padding: 10px 20px 20px 15px;
  }

  .content--fold {
    display: none;
  }

  .music {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .music + .music {
    margin-top: 20px;
  }

  .play-btn {
    display: flex;
    align-items: center;
  }

  .thumb {
    width: 45px;
    height: 45px;
    margin-right: 16px;
    border-radius: 4px;
    background: #ddd;
  }

  .thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .info {
    width: 340px;
    text-align: left;
  }

  .title {
    margin-bottom: 3px;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
  }

  .singer {
    font-size: 11px;
  }

  .none-search-data {
    padding: 100px 0;
    text-align: center;
    font-size: 15px;
  }
`;
export default function List(props: any): JSX.Element {
  const dispatch = useDispatch();
  const playing = useSelector((state: any) => state.playerStore.isPlayingValue);
  const currentPlayMusic = useSelector((state: any) => state.playerStore.currentMusicValue);
  const originalPlayerListData = useSelector((state: any) => state.playerStore.originalplaylistDataValue);
  const copyPlayerListData = useSelector((state: any) => state.playerStore.copyplaylistDataValue);
 
  useEffect(() => {
    dispatch(setPlayedProgress(0));
  },[currentPlayMusic])

  const handleCurrentMusic = (index:number) => {
    const currentMusicIndex = originalPlayerListData.findIndex((item:any) => item.index === currentPlayMusic.index);
    if (index === currentMusicIndex && playing === true) {
      dispatch(setPlayingMusic(false));
    } else if (index === currentMusicIndex && playing === false) {
      dispatch(setPlayingMusic(true));
    } else {
      dispatch(setPlayingMusic(false));
      dispatch(resetCurrentPlayMusic());
      dispatch(setPlayedProgress(0));
      dispatch(setCurrentPlayMusic(originalPlayerListData[index]));
      dispatch(setPlayingMusic(true));
    }
  }

  const handleListPlay = () => {
    // 플레이리스트 변경하는 로직
    handleCurrentMusic(0);
    dispatch(setCurrentPlayMusic(originalPlayerListData[0]));
    dispatch(setPlayingMusic(true));
  }
  
  return (
    <PlayList {...props}>
      <div className={`play-list ${!props.isOpenPlayList && 'play-list--fold'}`}>
        <div className="top">
          <div className="top-left">
            <div className="list-title">플레이리스트 이름</div>
          </div>
          <div className="top-right">
            <PlayerButton size={30} image={'/icon_play_list.svg'} onClick={handleListPlay}>
              <BlindText text={'재생'} />
            </PlayerButton>
            <PlayerButton
              size={30}
              image={'/icon_fold.svg'}
              onClick={props.clickPlayList}
              style={{ transform: props.isOpenPlayList && 'rotate(180deg)' }}
            >
              <BlindText text={'접기'} />
            </PlayerButton>
          </div>
        </div>
        <ul className="content">
          {copyPlayerListData.length > 0 ? (
            copyPlayerListData.map((music: any, index: number) => {
              return (
                <MusicListItem
                  key={index}
                  id={music.id}
                  thumb={music.album?.imgList[0].url}
                  title={music.name}
                  singer={music.representationArtist?.name}
                  thumbSize={45}
                  thumbRadius={4}
                  onClick={() => {handleCurrentMusic(index)}}
                />
              );
            })
          ) : (
            <div className='none-search-data'>
              {originalPlayerListData.length > 0 ? '재생목록의 검색결과가 없습니다' : '재생목록이 없습니다' }
            </div>
          )}
        </ul>
      </div>
    </PlayList>
  );
}

import React, { useState } from 'react';
import Link from 'next/link';
import PlayerButton from '@/components/Player/PlayerButton';
import BlindText from '@/components/Player/BlindText';
import PlayerThumb from '@/components/Player/PlayerThumb';
import PlayList from '@/components/Player/PlayList';

interface PlayerListProps {
  player: boolean;
  openPlaylist: (e: any) => void;
  currentPlayMusic: {
    album: { imgList: any },
    name: string,
    representationArtist: { name: any},
  };
  playListData: {}[]
}


export default function Player({
  player,
  openPlaylist,
  currentPlayMusic,
  playListData
}: PlayerListProps): JSX.Element {
  const [tabIndex, setTabIndex] = useState(0);
  const [isOpenPlayList, setIsOpenPlayList] = useState(true);
  const OriginalPlayerList = [...playListData];
  const [copyPlayerList, setCopyPlayerList] = useState([...playListData]);
  console.log('aaa', playListData, OriginalPlayerList, copyPlayerList);
  

  const tabMenu = [{ name: '음악' }, { name: '가사' }];

  const clickTab = (index: number) => {
    setTabIndex(index);
  };
  const clickPlayerList = () => {
    setIsOpenPlayList(!isOpenPlayList);
  };
  const handleSearchMusic = (event: any) => {
    const searchValue = event.target.value;
    setCopyPlayerList(
      OriginalPlayerList.filter((music:any) => {
        const isMatchTitle = music.name.toLowerCase().includes(searchValue.toLowerCase());
        const isMatchSinger = music.representationArtist.name.toLowerCase().includes(searchValue.toLowerCase());
        console.log(isMatchTitle, isMatchSinger);

        return isMatchTitle || isMatchSinger;
      }),
    );
  };

  return (
    <div className={`list ${player && 'list--active'}`}>
      <div className="list__background" style={{ backgroundImage: `url(${currentPlayMusic.album.imgList[0].url})` }} />
      <div className="list__left-area">
        <div className="list__left-area-inner">
          <Link href="/" style={{ textDecoration: 'none', display: 'block' }}>
            <span className="list__left-title">{currentPlayMusic.name}</span>
          </Link>
          <Link href="/" style={{ textDecoration: 'none', display: 'block' }}>
            <span className="list__left-singer">{currentPlayMusic.representationArtist.name}</span>
          </Link>
          <PlayerThumb size={360} image={currentPlayMusic.album.imgList[4].url} radius={10} />
          <div className="list__left-btn-area">
            <PlayerButton size={40} image={'/icon_store.svg'}>
              <BlindText text={'담기'} />
            </PlayerButton>
            <PlayerButton size={40} image={'/icon_show_more.svg'}>
              <BlindText text={'더보기'} />
            </PlayerButton>
          </div>
        </div>
      </div>

      <div className="list__right-area">
        <div className="list__right-btn-area">
          <PlayerButton size={40} image="/icon_setting.svg">
            <BlindText text="설정" />
          </PlayerButton>
          <PlayerButton size={40} image="/icon_close.svg" onClick={openPlaylist}>
            <BlindText text="닫기" />
          </PlayerButton>
        </div>
        <div className="tab">
          <div className="tab-head">
            <div className="tab-head__title-area">
              {tabMenu.map((tab, index) => (
                <button
                  className={`${index === tabIndex ? 'tab-head__title tab-head__title--active' : 'tab-head__title'}`}
                  key={`tabMenu-${index}`}
                  onClick={() => {
                    clickTab(index);
                  }}
                >
                  {tab.name}
                </button>
              ))}
            </div>
            <button type="button" className="edit-btn">
              편집
            </button>
          </div>

          {tabIndex === 0 && (
            <div className="tab-body tab-body--list">
              <div className="tab-body__top">
                <div className="tab-body__top-left">
                  <div className="tab__search">
                    <input
                      type="text"
                      placeholder="재생목록에서 검색해주세요"
                      onChange={(e) => {
                        handleSearchMusic(e);
                      }}
                    />
                  </div>
                </div>
                <div className="tab-body__top-right">
                  <button className="list-btn">내 리스트 가져오기</button>
                  <button className="spread-btn">그룹 접기</button>
                </div>
              </div>
              <div className="tab-body__list-area">
                <PlayList isOpenPlayList={isOpenPlayList} clickPlayerList={clickPlayerList} copyPlayerList={copyPlayerList} />         
              </div>
            </div>
          )}
          {tabIndex === 1 && (
            <div className="tab-body tab-body__lyrics">
              <div className="tab-body__lyrics-text">{currentPlayMusic.name}</div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .list {
          position: fixed;
          bottom: 0;
          left: 0;
          z-index: 999;
          width: 100%;
          height: 100%;
          display: flex;
          color: #989898;
          background: #0f0e0e;
          transform: translateY(100%);
          transition: all 0.5s;
        }

        .list--active {
          transform: translateY(0);
          transition: transform 0.5s;
        }

        .list__background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.9);
          background-repeat: no-repeat;
          background-size: cover;
          background-positon: 50%;
          opacity: 0.2;
          filter: blur(100px);
          z-index: -1;
        }

        .list__left-area {
          display: flex;
          justify-content: center;
          align-items: center;
          flex: 1 1 0;
          padding-bottom: 100px;
        }

        .list__left-title {
          display: block;
          margin-bottom: 8px;
          text-align: center;
          font-size: 22px;
          font-weight: bold;
          color: #fff;
        }

        .list__left-singer {
          display: block;
          margin-bottom: 20px;
          text-align: center;
          font-size: 13px;
          color: #989898;
        }

        .list__left-thumb {
          width: 360px;
          height: 360px;
          border-radius: 10px;
          background: #ddd;
        }

        .list__left-btn-area {
          display: flex;
          justify-content: center;
          margin-top: 15px;
        }

        .store-btn,
        .show-more-btn,
        .setting-btn,
        .close-btn {
          width: 40px;
          height: 40px;
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
        }

        .store-btn {
          background-image: url('/icon_store.svg');
        }

        .show-more-btn {
          background-image: url('/icon_show_more.svg');
        }

        .setting-btn {
          background-image: url('/icon_setting.svg');
        }

        .close-btn {
          background-image: url('/icon_close.svg');
        }

        .list__right-area {
          width: 650px;
          padding: 30px 40px;
        }

        .list__right-btn-area {
          display: flex;
          justify-content: flex-end;
          gap: 15px;
          margin-bottom: 20px;
        }

        .tab-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #444;
        }

        .tab-head__title-area {
          display: flex;
        }

        .tab-head__title {
          margin-right: 15px;
          padding: 10px 0;
          border-bottom: 3px solid transparent;
          font-size: 16px;
          color: hsla(0, 0%, 100%, 0.3);
        }

        .tab-head__title--active {
          color: #fff;
          border-bottom: 3px solid #7286ff;
        }

        .edit-btn {
          font-size: 13px;
          color: #aaa;
        }

        .tab-body__top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 0 20px;
        }

        .tab__search {
          display: flex;
          align-items: center;
          width: 240px;
          padding: 4px 10px;
          border-radius: 30px;
          background: hsla(0, 0%, 100%, 0.05);
        }

        .tab__search input {
          width: 100%;
          border: 0;
          outline: 0;
          font-size: 12px;
          line-height: 1;
          color: #bbb;
          background: transparent;
        }

        .tab__search::before,
        .list-btn::before {
          content: '';
          display: inline-block;
          width: 24px;
          height: 24px;
        }

        .tab__search::before {
          background: url('/icon_search.svg') no-repeat center / contain;
        }

        .list-btn {
          display: flex;
          align-items: center;
        }

        .list-btn::before {
          background: url('/icon_store.svg') no-repeat center / contain;
        }

        .tab-body__top-right {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .tab-body__list-area {
          height: calc(100vh - 300px);
          overflow-y: auto;
        }

        .music-list {
          border-radius: 5px;
          background: hsla(0, 0%, 100%, 0.1);
        }

        .music-list--fold .music-list__list-fold-btn {
          transform: rotate(0);
        }

        .music-list--fold .music-list__content {
          display: none;
        }

        .music-list_top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 20px 10px 15px;
        }

        .music-list__list-title {
          font-size: 14px;
          font-weight: bold;
          color: #fff;
        }

        .music-list_top-right {
          display: flex;
          gap: 15px;
        }

        .music-list__play-btn,
        .music-list__list-fold-btn,
        .music-list__show-more-btn {
          width: 30px;
          height: 30px;
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
        }

        .music-list__content {
          padding: 10px 20px 20px 15px;
        }

        .music-list__content--fold {
          display: none;
        }

        .music-list__music {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .music-list__music + .music-list__music {
          margin-top: 20px;
        }

        .music-list__music-btn {
          display: flex;
          align-items: center;
        }

        .music-list__thumb {
          width: 45px;
          height: 45px;
          margin-right: 16px;
          border-radius: 4px;
          background: #ddd;
        }

        .music-list__thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .music-list__info {
          width: 340px;
          text-align: left;
        }

        .music-list__title {
          margin-bottom: 3px;
          font-size: 14px;
          font-weight: bold;
          color: #fff;
        }

        .music-list__singer {
          font-size: 11px;
        }

        .tab-body__lyrics {
          width: 100%;
          height: calc(100vh - 260px);
          margin-top: 10px;
          padding: 20px 5px 20px 20px;
          border-radius: 5px;
          font-size: 16px;
          line-height: 1.8;
          background: hsla(0, 0%, 100%, 0.1);
          overflow: hidden;
        }

        .tab-body__lyrics-text {
          width: 100%;
          height: 100%;
          padding-right: 30px;
          overflow-y: auto;
          white-space: pre-line;
        }

        .tab-body__lyrics-text::-webkit-scrollbar,
        .tab-body__list-area::-webkit-scrollbar {
          width: 5px;
        }

        .tab-body__lyrics-text::-webkit-scrollbar-thumb,
        .tab-body__list-area::-webkit-scrollbar-thumb {
          border-radius: 3px;
          background: #555;
        }

         {
          /* 플레이어 바 */
        }
        .bar {
          position: fixed;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 80px;
          color: #ddd;
          background: #000;
        }

        .progress {
          position: relative;
          width: 100%;
        }

        .progress-bar {
          position: absolute;
          top: 0;
          left: 0;
          appearance: none;
          width: 100%;
          height: 5px;
          padding: 0;
          margin: 0;
          border: 0;
          outline: none;
        }

        .progress-bar::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 5px;
          height: 5px;
        }

        .controller {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: 100%;
          padding: 0 20px;
        }

        .bar__left-area,
        .bar__center-area,
        .bar__right-area {
          display: flex;
          align-items: center;
          flex: 0 0 auto;
        }

        .bar__center-area {
          justify-content: center;
          padding: 0 50px 0 150px;
        }

        .bar__right-area {
          padding-left: 30px;
        }

        .thumb {
          width: 40px;
          height: 40px;
          border-radius: 5px;
          background: #ddd;
        }

        .thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .music-info {
          margin: 0 10px;
        }

        .title {
          font-size: 14px;
          font-weight: bold;
          margin-bottom: 3px;
        }

        .singer {
          font-size: 11px;
        }

        .like-btn {
          background-image: url('/icon_like_off.svg');
        }

        .like-btn--active {
          background-image: url('/icon_like_on.svg');
        }

        .like-btn img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .bar__center-area,
        .bar__right-area {
          gap: 10px;
        }

        .like-btn,
        .like-btn--active,
        .repeat-btn,
        .prev-btn,
        .play-btn,
        .next-btn,
        .next-btn,
        .random-btn,
        .mute-btn,
        .playlist-btn {
          width: 44px;
          height: 44px;
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
        }

        :is(.repeat-btn, .prev-btn, .play-btn, .next-btn, .next-btn, .random-btn):hover {
          transform: scale(1.1);
        }

        .repeat-btn {
          background-image: url('/icon_repeat_play.svg');
        }

        .repeat-btn--active {
          background-image: url('/icon_repeat_play_active.svg');
        }

        .prev-btn {
          background-image: url('/icon_prev.svg');
        }

        .play-btn {
          background-image: url('/icon_play.svg');
        }

        .play-btn--active {
          background-image: url('/icon_pause.svg');
        }

        .next-btn {
          background-image: url('/icon_next.svg');
        }

        .random-btn {
          background-image: url('/icon_random_play.svg');
        }

        .random-btn--active {
          background-image: url('/icon_random_play_active.svg');
        }

        .mute-btn {
          width: 35px;
          height: 35px;
          background-image: url('/icon_sound.svg');
        }

        .mute-btn--active {
          background-image: url('/icon_mute.svg');
        }

        .playlist-btn {
          margin-left: 10px;
          background-image: url('/icon_player.svg');
        }

        .playlist-btn--active {
          background-image: url('/icon_player_active.svg');
        }

        .time {
          display: flex;
          align-items: center;
          gap: 5px;
          margin-left: 10px;
          font-size: 13px;
        }

        .current-time {
          font-weight: bold;
        }

        .total-time {
          color: #999;
        }

        .sound-range-input {
          appearance: none;
          width: 100px;
          height: 4px;
          border: 0;
          border-radius: 10px;
          outline: none;
          transition: background 450ms ease-in;
          cursor: pointer;
          overflow: hidden;
        }

        .sound-range-input:hover {
          height: 6px;
        }

        .sound-range-input::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 1px;
          height: 4px;
          background: #aaa;
        }
      `}</style>
    </div>
  );
}

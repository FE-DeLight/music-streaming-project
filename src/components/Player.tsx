import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { routes } from "./route";

export default function Player(): JSX.Element {
  const router = useRouter();
  const [like, setLike] = useState(false);
  const [soundRange, setSoundRange] = useState(30);
  const [player, setPlayer] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);
  const [musicList, setMusicList] = useState(true);

  const tabMenu = [{ name: "음악" }, { name: "가사" }];

  const clickLike = () => {
    setLike((prev) => (prev = !prev));
  };
  const openPlaylist = () => {
    setPlayer((prev) => (prev = !prev));
  };
  const clickTab = (index:number) => {
    setTabIndex(index);
  };
  const clickMusicList = () => {
    setMusicList((prev) => (prev = !prev));
  };

  return (
    <div className="player">
      {/* 플레이어 리스트 */}
      <div className={`list ${player && "list--active"}`}>
        <div className="list__left-area">
          <div className="list__left-area-inner">
            <Link href="/" style={{ textDecoration: "none", display: "block" }}>
              <span className="list__left-title">제목</span>
            </Link>
            <Link href="/" style={{ textDecoration: "none", display: "block" }}>
              <span className="list__left-singer">가수</span>
            </Link>
            <div className="list__left-thumb">
              {/* <img src="" alt="" /> */}
            </div>
            <div className="list__left-btn-area">
              <button className="store-btn">
                <span className="blind">담기</span>
              </button>
              <button className="show-more-btn">
                <span className="blind">더보기</span>
              </button>
            </div>
          </div>
        </div>

        <div className="list__right-area">
          <div className="list__right-btn-area">
            <button className="setting-btn">
              <span className="blind">설정</span>
            </button>
            <button className="close-btn" onClick={openPlaylist}>
              <span className="blind">닫기</span>
            </button>
          </div>
          <div className="tab">
            <div className="tab-head">
              <div className="tab-head__title-area">
                {tabMenu.map((tab, index) => (
                  <button
                    className={`${
                      index === tabIndex
                        ? "tab-head__title tab-head__title--active"
                        : "tab-head__title"
                    }`}
                    key={index}
                    onClick={() => {
                      clickTab(index);
                    }}
                  >
                    {tab.name}
                  </button>
                ))}
              </div>
              <button className="edit-btn">편집</button>
            </div>

            {tabIndex === 0 && (
              <div className="tab-body tab-body--list">
                <div className="tab-body__top">
                  <div className="tab-body__top-left">
                    <div className="tab__search">
                      <input
                        type="text"
                        placeholder="재생목록에서 검색해주세요"
                      />
                    </div>
                  </div>
                  <div className="tab-body__top-right">
                    <button className="list-btn">내 리스트 가져오기</button>
                    <button className="spread-btn">그룹 접기</button>
                  </div>
                </div>
                <div className="tab-body__list-area">
                  <div
                    className={`music-list ${!musicList && "music-list--fold"}`}
                  >
                    <div className="music-list_top">
                      <div className="music-list_top-left">
                        <div className="music-list__list-title">
                          플레이리스트 이름
                        </div>
                      </div>
                      <div className="music-list_top-right">
                        <button className="music-list__play-btn">
                          <span className="blind">재생</span>
                        </button>
                        <button
                          className="music-list__list-fold-btn"
                          onClick={clickMusicList}
                        >
                          <span className="blind">접기</span>
                        </button>
                      </div>
                    </div>
                    <div className="music-list__content">
                      <div className="music-list__music">
                        <button className="music-list__music-btn">
                          <div className="music-list__thumb">
                            {/* <img src="" alt="" /> */}
                          </div>
                          <div className="music-list__info">
                            <div className="music-list__title">제목</div>
                            <div className="music-list__singer">가수</div>
                          </div>
                        </button>
                        <button className="music-list__show-more-btn">
                          <span className="blind">더보기</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {tabIndex === 1 && (
              <div className="tab-body tab-body--lyrics">
                Isn&apos;t she lovely <br />
                Isn&apos;t she wonderful <br />
                Isn&apos;t she precious <br />
                Less than one minute old <br />I never thought through love we&apos;d
                be <br />
                Making one as lovely as she <br />
                But isn&apos;t she lovely made from love <br />
                Isn&apos;t she pretty
                <br />
                Truly the angel&apos;s best <br />
                Boy, I&apos;m so happy
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 플레이어 바 */}
      <div className="bar">
        <div className="progress">
          <div className="progress-bar" />
        </div>

        <div className="controller">
          <div className="bar__left-area">
            <Link href="/">
              <div className="thumb">{/* <img src="" alt="" /> */}</div>
            </Link>
            <div className="music-info">
              <div className="title">제목</div>
              <div className="singer">가수</div>
            </div>
            <button
              className={like ? "like-btn--active" : "like-btn"}
              onClick={clickLike}
            >
              <span className="blind">좋아요</span>
            </button>
          </div>

          <div className="bar__center-area">
            <button className="repeat-btn">
              <span className="blind">반복재생</span>
            </button>
            <button className="prev-btn">
              <span className="blind">이전곡</span>
            </button>
            <button className="play-btn">
              <span className="blind">재생</span>
            </button>
            <button className="next-btn">
              <span className="blind">다음곡</span>
            </button>
            <button className="random-btn">
              <span className="blind">랜덤재생</span>
            </button>
            <div className="time">
              <span className="current-time">00:10</span>
              <span> / </span>
              <span className="total-time">03:50</span>
            </div>
          </div>

          <div className="bar__right-area">
            <button className="mute-btn">
              <span className="blind">음소거</span>
            </button>
            <input
              className="sound-range-input"
              type="range"
              value={soundRange}
            />
            <button className="playlist-btn" onClick={openPlaylist}>
              <span className="blind">재생목록</span>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
         {
          /* 공통 */
        }
        * {
          box-sizing: border-box;
        }
        button {
          padding: 0;
          border: 0;
          color: #989898;
          background: transparent;
          cursor: pointer;
        }
        a {
          text-decoration: none;
        }
        .blind {
          position: absolute;
          top: 0;
          left: 0;
          width: 1px;
          height: 1px;
          clip: rect(0 0 0 0);
          overflow: hidden;
        }

         {
          /* 플레이어 리스트 */
        }
        .list {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          color: #989898;
          background: rgba(0, 0, 0, 0.9);
          transform: translateY(100%);
          transition: all 0.5s;
        }
        .list--active {
          transform: translateY(0);
          transition: transform 0.5s;
        }
        .list__left-area {
          display: flex;
          justify-content: center;
          align-items: center;
          flex: 1 1 0;
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
          background-image: url("/icon_store.svg");
        }
        .show-more-btn {
          background-image: url("/icon_show_more.svg");
        }
        .setting-btn {
          background-image: url("/icon_setting.svg");
        }
        .close-btn {
          background-image: url("/icon_close.svg");
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
          content: "";
          display: inline-block;
          width: 24px;
          height: 24px;
        }
        .tab__search::before {
          background: url("/icon_search.svg") no-repeat center / contain;
        }
        .list-btn {
          display: flex;
          align-items: center;
        }
        .list-btn::before {
          background: url("/icon_store.svg") no-repeat center / contain;
        }
        .tab-body__top-right {
          display: flex;
          align-items: center;
          gap: 15px;
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
        .music-list__play-btn {
          background-image: url("/icon_play_list.svg");
        }
        .music-list__list-fold-btn {
          transform: rotate(180deg);
          background-image: url("/icon_fold.svg");
        }
        .music-list__show-more-btn {
          background-image: url("/icon_show_more.svg");
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

        .tab-body--lyrics {
          width: 100%;
          margin-top: 10px;
          padding: 10px 20px 20px 15px;
          border-radius: 5px;
          font-size: 16px;
          line-height: 1.8;
          background: hsla(0, 0%, 100%, 0.1);
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
          width: 100%;
          height: 2px;
          background: #333;
        }
        .progress-bar {
          width: 30%;
          height: 2px;
          border-radius: 0 2px 2px 0;
          background: #576aff;
        }
        .controller {
          display: flex;
          align-items: center;
          width: 100%;
          height: 100%;
          padding: 0 30px;
        }
        .bar__left-area,
        .bar__center-area,
        .bar__right-area {
          display: flex;
          align-items: center;
          flex: 0 0 auto;
        }
        .bar__center-area {
          flex-grow: 1;
          justify-content: center;
          padding-left: 50px;
        }
        .bar__right-area {
          margin-left: auto;
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
          background-image: url("/icon_like_off.svg");
        }
        .like-btn--active {
          background-image: url("/icon_like_on.svg");
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
        :is(
            .repeat-btn,
            .prev-btn,
            .play-btn,
            .next-btn,
            .next-btn,
            .random-btn
          ):hover {
          transform: scale(1.1);
        }
        .repeat-btn {
          background-image: url("/icon_repeat_play.svg");
        }
        .prev-btn {
          background-image: url("/icon_prev.svg");
        }
        .play-btn {
          background-image: url("/icon_play.svg");
        }
        .next-btn {
          background-image: url("/icon_next.svg");
        }
        .random-btn {
          background-image: url("/icon_random_play.svg");
        }
        .mute-btn {
          width: 35px;
          height: 35px;
          background-image: url("/icon_sound.svg");
        }
        .playlist-btn {
          background-image: url("/icon_player.svg");
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
        .sound-range-input {
          appearance: none;
          width: 100px;
          height: 4px;
          border: 0;
          border-radius: 10px;
          background: #555;
          background: linear-gradient(
            to right,
            #aaa 0%,
            #aaa 50%,
            #444 50%,
            #444 100%
          );
          outline: none;
          transition: background 450ms ease-in;
          cursor: pointer;
        }
        .sound-range-input::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 4px;
          height: 4px;
          background: red;
        }
      `}</style>
    </div>
  );
}

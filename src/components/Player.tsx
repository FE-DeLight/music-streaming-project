import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { routes } from "./route";

export default function Nav(): JSX.Element {
  const router = useRouter();
  const [soundRange, setSoundRange] = useState(30);

  return (
    <div className="player">
      <div className="list">
        <div className="list__left-area">
          <strong className="list__left-title">제목</strong>
          <div className="list__left-singer">가수</div>
          <div className="list__left-thumb">{/* <img src="" alt="" /> */}</div>
          <div className="list__left-btn-area">
            <button className="store-btn">담기</button>
            <button className="show-more-btn">더보기</button>
          </div>
        </div>

        <div className="list__right-area">
          <div className="list__right-btn-area">
            <button className="setting-btn">설정</button>
            <button className="close-btn">닫기</button>
          </div>
          <div className="tab">
            <div className="tab-head">
              <div className="tab-head__title-area">
                <div className="tab-head__title">음악</div>
                <div className="tab-head__title">가사</div>
              </div>
              <button className="edit-btn">편집</button>
            </div>
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
                <div className="music-list">
                  <div className="music-list__head">
                    <div className="music-list__head-left">
                      <div className="music-list__title">제목 or 가수</div>
                    </div>
                    <div className="music-list__head-right">
                      <button className="music-list__play-btn">재생</button>
                      <button className="music-list__list-fold-btn">
                        접기
                      </button>
                    </div>
                  </div>
                  <div className="music-list__body">
                    <div className="music-list__music">
                      <div className="music-list__thumb">
                        {/* <img src="" alt="" /> */}
                      </div>
                      <div className="music-list__info">
                        <div className="music-list__title">제목</div>
                        <div className="music-list__singer">가수</div>
                      </div>
                      <div className="music-list__show-more-btn">더보기</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
            <button className="like-btn">좋아요</button>
          </div>

          <div className="bar__center-area">
            <button className="repeat-btn">반복재생</button>
            <button className="prev-btn">이전곡</button>
            <button className="play-btn">재생</button>
            <button className="next-btn">다음곡</button>
            <button className="random-btn">랜덤재생</button>
            <div className="time">
              <span className="current-time">00:10</span>
              <span> / </span>
              <span className="total-time">03:50</span>
            </div>
          </div>

          <div className="bar__right-area">
            <button className="mute-btn">음소거</button>
            <input
              className="sound-range-input"
              type="range"
              value={soundRange}
            />
            <button className="playlist-btn">재생목록</button>
          </div>
        </div>
      </div>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }
        button {
          color: #ddd;
          background: transparent;
          cursor: pointer;
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
          height: 3px;
        }
        .progress-bar {
          width: 30%;
          height: 3px;
          border-radius: 0 2px 2px 0;
          background: #576aff;
        }
        .controller {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          height: 100%;
          padding: 0 20px;
        }
        .bar__left-area,
        .bar__center-area,
        .bar__right-area {
          display: flex;
          align-items: center;
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
        .center-area {
          gap: 5px;
        }
        .time {
          display: flex;
          align-items: center;
          gap: 5px;
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

        .list {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.9);
        }
      `}</style>
    </div>
  );
}

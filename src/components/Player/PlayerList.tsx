import {useState} from "react";
import Link from "next/link";
import PlayerButton from "./PlayerButton";
import BlindText from "./BlindText";
import PlayerThumb from "./PlayerThumb"
import MusicListItem from "./MusicListItem"

export default function Player(props: any): JSX.Element {
  const [tabIndex, setTabIndex] = useState(0);
  const [musicList, setMusicList] = useState(true);

  const tabMenu = [{name: "음악"}, {name: "가사"}];
  const musicListData = [
    {
      thumb: "/album_thumb_01.jpg",
      title: "MAGIC!",
      singer: "Zior Park",
      lyrics:
        "I was a machine\n" +
        "it was my choice\n" +
        "no love in my pockets\n" +
        "Stick to the plan for the cash\n" +
        "I used to be built this way\n" +
        "Only businessman\n" +
        "can survive in this damn system\n" +
        "What the heck\n" +
        "I didn't care before I met you\n" +
        "You make a crack in my brain\n" +
        "You make me feel the earthquake\n" +
        "You make the movie effects\n" +
        "Around you Is that a new tech\n" +
        "My heart is just pumping\n" +
        "In the mirror there's a puppy\n" +
        "Did you just cast\n" +
        "a magic spell on me\n" +
        "The Bible says\n" +
        "“the love is the greatest”\n" +
        "Finally I added the love system\n" +
        "I feel like you you feel like me\n" +
        "Maybe we're connected\n" +
        "by this system\n" +
        "All the senses that I forgot\n" +
        "I just turned on thru my whole body\n" +
        "Are you a sorceress\n" +
        "are you an angel\n" +
        "Now I'm confused\n" +
        "but don't speak out\n" +
        "Your magic makes me forget\n" +
        "what I'm going through\n" +
        "It doesn't matter\n" +
        "I'm happy though im lost\n" +
        "I'm not curious about\n" +
        "the reason of this feeling\n" +
        "I do not get it quite\n" +
        "with my knowledge\n" +
        "but don't tell me\n" +
        "How beautiful\n" +
        "all the rocks are like magic\n" +
        "How wonderful\n" +
        "all the creatures are like magic\n" +
        "I didn't realize\n" +
        "that I'm living in this blessing\n" +
        "But you opened my mind\n" +
        "I can feel your magic\n" +
        "How beautiful\n" +
        "all the rocks are like magic\n" +
        "How wonderful\n" +
        "all the creatures are like magic\n" +
        "I didn't realize\n" +
        "that I'm living in this blessing\n" +
        "But you opened my mind\n" +
        "I can feel your magic\n" +
        "I didn't see the future\n" +
        "but now I can imagine it\n" +
        "I didn't feel the love\n" +
        "but now I do it's magic!\n" +
        "Where are you going'\n" +
        "Stay here with me all night\n" +
        "You need to teach me more about\n" +
        "your magical world\n" +
        "How can I ignore it\n" +
        "I can't remove it from my head\n" +
        "since I've experienced you\n" +
        "24/7 all day\n" +
        "high enough from your atmosphere\n" +
        "It's supernatural\n" +
        "I think there's no expression to\n" +
        "explain your magic\n" +
        "I'm just enjoying your spell\n" +
        "Your magic makes me forget\n" +
        "what I'm going through\n" +
        "It doesn't matter\n" +
        "I'm happy though im lost\n" +
        "I'm not curious about\n" +
        "the reason of this feeling\n" +
        "I do not get it quite\n" +
        "with my knowledge\n" +
        "but don't tell me\n" +
        "How beautiful\n" +
        "all the rocks are like magic\n" +
        "How wonderful\n" +
        "all the creatures are like magic\n" +
        "I didn't realize\n" +
        "that I'm living in this blessing\n" +
        "But you opened my mind\n" +
        "I can feel your magic\n" +
        "How beautiful\n" +
        "all the rocks are like magic\n" +
        "How wonderful\n" +
        "all the creatures are like magic\n" +
        "I didn't realize\n" +
        "that I'm living in this blessing\n" +
        "But you opened my mind\n" +
        "I can feel your magic\n" +
        "I didn't see the future\n" +
        "but now I can imagine it\n" +
        "I didn't feel the love\n" +
        "but now I do it's magic!\n" +
        "Your love is magic!\n" +
        "Your love is amazing!\n" +
        "Your love is magic!\n" +
        "Your love is amazing!\n" +
        "Your love is magic!\n" +
        "Your love is amazing!\n" +
        "Your love is magic!\n" +
        "Your love is amazing!\n" +
        "You turned on my vision\n" +
        "Now look\n" +
        "we're under the rainbow sky\n" +
        "You just turned off my fan\n" +
        "Finally I know what is the love\n" +
        "How beautiful\n" +
        "all the rocks are like magic"
    },
    {
      thumb: "/album_thumb_02.jpg",
      title: "Freshman",
      singer: "페퍼톤스 (PEPPERTONES)",
    },
    {
      thumb: "/album_thumb_03.jpg",
      title: "Hype Boy",
      singer: "NewJeans",
    },
  ];

  console.log(typeof musicListData[0].lyrics)

  const clickTab = (index: number) => {
    setTabIndex(index);
  };
  const clickMusicList = () => {
    setMusicList(!musicList);
  };

  return (
    <div className={`list ${props.player && "list--active"}`}>
      <div className="list__left-area">
        <div className="list__left-area-inner">
          <Link href="/" style={{textDecoration: "none", display: "block"}}>
            <span className="list__left-title">제목</span>
          </Link>
          <Link href="/" style={{textDecoration: "none", display: "block"}}>
            <span className="list__left-singer">가수</span>
          </Link>
          <PlayerThumb size={360} image={"/album_thumb_01.jpg"} radius={10} />
          <div className="list__left-btn-area">
            <PlayerButton size={40} image={"/icon_store.svg"}>
              <BlindText text={"담기"} />
            </PlayerButton>
            <PlayerButton size={40} image={"/icon_show_more.svg"}>
              <BlindText text={"더보기"} />
            </PlayerButton>
          </div>
        </div>
      </div>

      <div className="list__right-area">
        <div className="list__right-btn-area">
          <PlayerButton size={40} image={"/icon_setting.svg"}>
            <BlindText text={"설정"} />
          </PlayerButton>
          <PlayerButton size={40} image={"/icon_close.svg"} onClick={props.openPlaylist}>
            <BlindText text={"닫기"} />
          </PlayerButton>
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
                      <PlayerButton size={30} image={"/icon_play_list.svg"}>
                        <BlindText text={"재생"} />
                      </PlayerButton>
                      <PlayerButton size={30} image={"/icon_fold.svg"} onClick={clickMusicList} style={{transform: musicList && "rotate(180deg)"}}>
                        <BlindText text={"접기"} />
                      </PlayerButton>
                    </div>
                  </div>
                  <ul className="music-list__content">
                    {musicListData.map((music, index) => {
                      return (
                        <MusicListItem key={index} thumb={music.thumb} title={music.title} singer={music.singer} thumbSize={45} thumbRadius={4} />
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
          )}
          {tabIndex === 1 && (
            <div className="tab-body tab-body__lyrics">
              <div className="tab-body__lyrics-text">
                {musicListData[0].lyrics}
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
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
          height: 70vh;
          margin-top: 10px;
          padding: 20px 10px 20px 20px;
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
        }

        .tab-body__lyrics-text::-webkit-scrollbar {
          width: 5px;
        }

        .tab-body__lyrics-text::-webkit-scrollbar-track {
          //background: #989898
        }

        .tab-body__lyrics-text::-webkit-scrollbar-thumb {
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

        .repeat-btn--active {
          background-image: url("/icon_repeat_play_active.svg");
        }

        .prev-btn {
          background-image: url("/icon_prev.svg");
        }

        .play-btn {
          background-image: url("/icon_play.svg");
        }

        .play-btn--active {
          background-image: url("/icon_pause.svg");
        }

        .next-btn {
          background-image: url("/icon_next.svg");
        }

        .random-btn {
          background-image: url("/icon_random_play.svg");
        }

        .random-btn--active {
          background-image: url("/icon_random_play_active.svg");
        }

        .mute-btn {
          width: 35px;
          height: 35px;
          background-image: url("/icon_sound.svg");
        }

        .mute-btn--active {
          background-image: url("/icon_mute.svg");
        }

        .playlist-btn {
          margin-left: 10px;
          background-image: url("/icon_player.svg");
        }

        .playlist-btn--active {
          background-image: url("/icon_player_active.svg");
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

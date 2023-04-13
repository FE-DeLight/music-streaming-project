import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenPlayer, setPlayingMusic, setPlayedMusic, setCurrentPlayMusic } from '@/store/playerSlice';
import ReactPlayer from 'react-player';
import PlayerButton from './PlayerButton';
import BlindText from './BlindText';
import PlayerThumb from '@/components/Player/PlayerThumb';

export default function Player(): JSX.Element {
  const dispatch = useDispatch();

  const isOpenPlayer = useSelector((state: any) => state.playerStore.isOpenPlayerValue);
  const playlistData = useSelector((state: any) => state.playerStore.playlistDataValue);
  const currentPlayMusic = useSelector((state: any) => state.playerStore.currentMusicValue);
  const playing = useSelector((state: any) => state.playerStore.isPlayingValue);
  const played = useSelector((state: any) => state.playerStore.playedMusicValue);

  const [seeking, setSeeking] = useState(false);
  const [duration, setDuration] = useState('00:00');
  const [like, setLike] = useState(false);
  const [repeatPlay, setRepeatPlay] = useState(false);
  const [randomPlay, setRandomPlay] = useState(false);
  const [playedSecond, setPlayedSecond] = useState('00:00');
  const [rawPlayedSecond, setRawPlayedSecond] = useState(0);
  const [mute, setMute] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [hasWindow, setHasWindow] = useState(false);
  const [ready, setReady] = useState(false);
  const musicRef = useRef<ReactPlayer>(null);
  const currentIndex = playlistData.indexOf(currentPlayMusic);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }
  }, []);

  const handleOpenPlayer = () => {
    dispatch(setOpenPlayer());
  };

  // 음악 변경
  const changeMusic = (type: 'next' | 'prev') => {
    if (type === 'next') {
      dispatch(setCurrentPlayMusic(playlistData[currentIndex + 1]));
    } else if (type === 'prev') {
      dispatch(setCurrentPlayMusic(playlistData[currentIndex - 1]));
    }
  };

  // **파라미터 이름으로 state 쓰는 것 지양
  const handleProgress = (progressData: any) => {
    setRawPlayedSecond(progressData.playedSeconds);
    setPlayedSecond(calcDuration(progressData.playedSeconds));
    if (!seeking) {
      dispatch(setPlayedMusic(progressData.played));
    }
  };

  const pad = (string: number) => {
    return ('0' + string).slice(-2);
  };

  const handleDuration = (duration: any) => {
    setDuration(calcDuration(duration));
    setPlayedSecond(calcDuration(duration * played));
  };

  const calcDuration = (duration: number) => {
    const date = new Date(duration * 1000);
    const hh = date.getUTCHours();
    const mm = date.getUTCMinutes();
    const ss = pad(date.getUTCSeconds());
    if (hh) {
      return `${hh}:${pad(mm)}:${ss}`;
    } else {
      return `${pad(mm)}:${ss}`;
    }
  };

  const handleSeekMouseDown = () => {
    setSeeking(true);
  };

  const handleSeekChange = (e: any) => {
    dispatch(setPlayedMusic(parseFloat(e.target.value)));
  };

  const handleSeekMouseUp = (e: any) => {
    setSeeking(false);
    musicRef?.current?.seekTo(parseFloat(e.target.value));
  };

  const clickLike = () => {
    setLike(!like);
  };

  const clickPrev = () => {
    if (rawPlayedSecond <= 10 && currentIndex !== 0) {
      changeMusic('prev');
    } else {
      dispatch(setPlayedMusic(0));
      musicRef?.current?.seekTo(0);
    }
  };
  
  const clickNext = () => {
    if (currentIndex + 1 === playlistData.length) {
      return false;
    }
    changeMusic('next');
  };

  const clickPlay = () => {
    dispatch(setPlayingMusic(!playing));
  };

  const clickRepeatPlay = () => {
    setRepeatPlay(!repeatPlay);
  };

  const clickRandomPlay = () => {
    setRandomPlay(!randomPlay);
  };

  const clickMute = () => {
    setMute(!mute);
  };

  const handleVolume = (event: any) => {
    setVolume(Number(event.target.value * 0.01));
  };

  const handleEnded = () => {
    changeMusic('next');
  };

  // store에 있던 데이터를 컴포넌트에서 재할당하지 않기
  // 무조건 dispatch를 통해서만 수정

  // 컴포넌트 안에 함수 아닌 로직이 들어가 있으면 사이드 이펙트 생길 가능성 높음
  // 함수로 감싸거나 useEffect 안에서 처리해야 함
  // 동일한 목적을 가진 hook은 커스텀 hook을 사용하기 (공통함수처럼)

  return (
    <>
      {/* 플레이어 바 */}
      {hasWindow && (
        <ReactPlayer
          url={currentPlayMusic.url}
          playing={playing}
          loop={repeatPlay}
          muted={mute}
          volume={volume}
          onProgress={(state) => {
            handleProgress(state);
          }}
          onDuration={(state) => {
            handleDuration(state);
          }}
          onEnded={() => {
            handleEnded();
          }}
          controls={true}
          ref={musicRef}
          style={{ position: 'absolute', top: '-9999px', left: '-9999px' }}
        />
      )}

      <div className="bar">
        <div className="progress">
          <input
            className="progress-bar"
            style={{
              background: `linear-gradient(to right, #576aff ${played * 100}%, #666 ${played * 100}%)`,
            }}
            type="range"
            min={0}
            max={0.999999}
            step="any"
            value={played}
            onMouseDown={() => {
              handleSeekMouseDown();
            }}
            onChange={(state) => {
              handleSeekChange(state);
            }}
            onMouseUp={(state) => {
              handleSeekMouseUp(state);
            }}
          />
        </div>

        <div className="controller">
          <button
            className="controller__openPlayListBtn"
            onClick={() => {
              handleOpenPlayer();
            }}
          />
          <div className="bar__left-area">
            <Link href="/">
              <PlayerThumb size={44} image={currentPlayMusic?.album?.imgList[0].url} radius={4} />
            </Link>
            <div className="music-info">
              <div className="title">{currentPlayMusic?.name}</div>
              <div className="singer">{currentPlayMusic.representationArtist?.name || '재생목록이 비어있습니다.'}</div>
            </div>
            {/* <PlayerButton size={44} image={like ? '/icon_like_on.svg' : '/icon_like_off.svg'} onClick={clickLike}>
              <BlindText text={'좋아요'} />
            </PlayerButton> */}
          </div>

          <div className="bar__center-area">
            <PlayerButton
              size={44}
              image={repeatPlay ? '/icon_repeat_play_active.svg' : '/icon_repeat_play.svg'}
              hover={true}
              onClick={clickRepeatPlay}
            >
              <BlindText text={'반복재생'} />
            </PlayerButton>
            <PlayerButton size={44} image={'/icon_prev.svg'} hover={true} onClick={clickPrev}>
              <BlindText text={'이전곡'} />
            </PlayerButton>
            <PlayerButton
              size={44}
              image={playing ? '/icon_pause.svg' : '/icon_play.svg'}
              hover={true}
              onClick={clickPlay}
            >
              <BlindText text={'재생'} />
            </PlayerButton>
            <PlayerButton size={44} image={'/icon_next.svg'} hover={true} onClick={clickNext}>
              <BlindText text={'다음곡'} />
            </PlayerButton>
            <PlayerButton
              size={44}
              image={randomPlay ? '/icon_random_play_active.svg' : '/icon_random_play.svg'}
              hover={true}
              onClick={clickRandomPlay}
            >
              <BlindText text={'랜덤재생'} />
            </PlayerButton>
            <div className="time">
              <span className="current-time">{playedSecond}</span>
              <span> / </span>
              <span className="total-time">{duration}</span>
            </div>
          </div>

          <div className="bar__right-area">
            <PlayerButton size={35} image={mute ? '/icon_mute.svg' : '/icon_sound.svg'} onClick={clickMute}>
              <BlindText text={'음소거'} />
            </PlayerButton>
            <input
              className="sound-range-input"
              style={{
                background: `linear-gradient(to right, #aaa ${volume * 100}%, #666 ${volume * 100}%)`,
              }}
              type="range"
              onChange={() => {
                handleVolume(event);
              }}
            />
            <PlayerButton
              size={44}
              image={isOpenPlayer ? '/icon_player_active.svg' : '/icon_player.svg'}
              onClick={() => {
                handleOpenPlayer();
              }}
            >
              <BlindText text={'재생목록'} />
            </PlayerButton>
          </div>
        </div>
      </div>

      <style jsx>{`
         {
          /* 플레이어 바 */
        }
        .bar {
          position: fixed;
          left: 0;
          bottom: 0;
          z-index: 1000;
          width: 100%;
          height: 80px;
          color: #ddd;
          background: #000;
        }

        .progress {
          position: relative;
          width: 100%;
          height: 5px;
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
          cursor: pointer;
          transition: all 0.2s;
        }

        .progress-bar:hover {
          height: 8px;
        }

        .progress-bar::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 5px;
          height: 5px;
        }

        .controller {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: 100%;

          padding: 0 20px 5px;
        }

        .controller__openPlayListBtn {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .bar__left-area,
        .bar__center-area,
        .bar__right-area {
          position: relative;
          display: flex;
          align-items: center;
          flex: 0 0 auto;
        }

        .bar__left-area {
          flex: 1 0 auto;
          max-width: 20%;
        }

        .bar__center-area {
          justify-content: center;
          padding-right: 50px;
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
          margin-bottom: 6px;
        }

        .singer {
          font-size: 12px;
          color: #888;
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
          margin-right: 10px;
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
    </>
  );
}

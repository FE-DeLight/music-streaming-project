import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import ReactPlayer from 'react-player';
import PlayerButton from './PlayerButton';
import BlindText from './BlindText';
import PlayerThumb from '@/components/Player/PlayerThumb';

interface PlayerBarProps {
  player: boolean;
  openPlaylist: (e: any) => void;
  currentPlayMusic: {
    url: string;
    album: { imgList: any };
    name: string;
    representationArtist: { name: any };
  };
}

export default function Player({ player, openPlaylist, currentPlayMusic }: PlayerBarProps): JSX.Element {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }
  }, []);

  const [played, setPlayed] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const [duration, setDuration] = useState('00:00');
  const [like, setLike] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [repeatPlay, setRepeatPlay] = useState(false);
  const [randomPlay, setRandomPlay] = useState(false);
  const [playedSecond, setPlayedSecond] = useState('00:00');
  const [mute, setMute] = useState(false);
  const [volume, setVolume] = useState(0.5);

  const musicRef = useRef<ReactPlayer>(null);

  const handleProgress = (state: any) => {
    let playedSeconds = state.playedSeconds;
    handlePlayedSeconds(playedSeconds);
    if (!seeking) {
      setPlayed(state.played);
    }
  };

  const handlePlayedSeconds = (playedSeconds: number) => {
    playedSeconds = Math.floor(playedSeconds);
    if (playedSeconds < 60) {
      setPlayedSecond(`00:${String(playedSeconds).padStart(2, '0')}`);
    } else {
      let minutes = Math.floor(playedSeconds / 60);
      let seconds = Math.floor(playedSeconds % 60);

      setPlayedSecond(`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
    }
  };

  const handleDuration = (state: any) => {
    let minutes = Math.floor(state / 60);
    let seconds = Math.floor(state % 60);
    setDuration(`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
  };

  const handleSeekMouseDown = () => {
    setSeeking(true);
  };

  const handleSeekChange = (e: any) => {
    console.log(e.target);
    setPlayed(parseFloat(e.target.value));
  };

  const handleSeekMouseUp = (e: any) => {
    setSeeking(false);
    musicRef?.current?.seekTo(parseFloat(e.target.value));
  };
  const clickLike = () => {
    setLike(!like);
  };

  const clickPrev = () => {
    setPlayed(0);
    musicRef?.current?.seekTo(0);
  };

  const clickPlay = () => {
    setPlaying(!playing);
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

  return (
    <>
      {/* 플레이어 바 */}
      {hasWindow && (
        <ReactPlayer
          url={currentPlayMusic?.url}
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
          controls={true}
          ref={musicRef}
          width={'1px'}
          height={'1px'}
          style={{ position: 'absolute', top: 0, left: 0, overflow: 'hidden' }}
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
          <button className="controller__openPlayListBtn" onClick={openPlaylist} />
          <div className="bar__left-area">
            <Link href="/">
              <PlayerThumb size={44} image={currentPlayMusic && currentPlayMusic.album.imgList[0].url} radius={4} />
            </Link>
            <div className="music-info">
              <div className="title">{currentPlayMusic && currentPlayMusic.name}</div>
              <div className="singer">
                {currentPlayMusic ? currentPlayMusic.representationArtist.name : '재생목록이 비어있습니다.'}
              </div>
            </div>
            {currentPlayMusic && (
              <PlayerButton size={44} image={like ? '/icon_like_on.svg' : '/icon_like_off.svg'} onClick={clickLike}>
                <BlindText text={'좋아요'} />
              </PlayerButton>
            )}
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
            <PlayerButton size={44} image={'/icon_next.svg'} hover={true}>
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
              image={player ? '/icon_player_active.svg' : '/icon_player.svg'}
              onClick={openPlaylist}
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

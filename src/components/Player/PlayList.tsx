import styled from 'styled-components';
import PlayerButton from '@/components/Player/PlayerButton';
import BlindText from '@/components/Player/BlindText';
import MusicListItem from '@/components/Player/MusicListItem';

const PlayList = styled.div<{}>`
  .play-list {
    margin-bottom: 20px;
    border-radius: 5px;
    background: hsla(0, 0%, 100%, 0.1);
  }

  .play-list--fold .play-list__list-fold-btn {
    transform: rotate(0);
  }

  .play-list--fold .play-list__content {
    display: none;
  }

  .play-list_top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px 10px 15px;
  }

  .play-list__list-title {
    font-size: 14px;
    font-weight: bold;
    color: #fff;
  }

  .play-list_top-right {
    display: flex;
    gap: 15px;
  }

  .play-list__play-btn,
  .play-list__list-fold-btn,
  .play-list__show-more-btn {
    width: 30px;
    height: 30px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }

  .play-list__content {
    padding: 10px 20px 20px 15px;
  }

  .play-list__content--fold {
    display: none;
  }

  .play-list__music {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .play-list__music + .play-list__music {
    margin-top: 20px;
  }

  .play-list__play-btn {
    display: flex;
    align-items: center;
  }

  .play-list__thumb {
    width: 45px;
    height: 45px;
    margin-right: 16px;
    border-radius: 4px;
    background: #ddd;
  }

  .play-list__thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .play-list__info {
    width: 340px;
    text-align: left;
  }

  .play-list__title {
    margin-bottom: 3px;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
  }

  .play-list__singer {
    font-size: 11px;
  }
`;
export default function Button(props: any): JSX.Element {
  return (
    <PlayList {...props}>
      <div className={`play-list ${!props.isOpenPlayList && 'play-list--fold'}`}>
        <div className="play-list_top">
          <div className="play-list_top-left">
            <div className="play-list__list-title">플레이리스트 이름</div>
          </div>
          <div className="play-list_top-right">
            <PlayerButton size={30} image={'/icon_play_list.svg'}>
              <BlindText text={'재생'} />
            </PlayerButton>
            <PlayerButton
              size={30}
              image={'/icon_fold.svg'}
              onClick={props.clickPlayerList}
              style={{ transform: props.isOpenPlayList && 'rotate(180deg)' }}
            >
              <BlindText text={'접기'} />
            </PlayerButton>
          </div>
        </div>
        <ul className="play-list__content">
          {props.copyPlayerList.map((music: any, index: number) => {
            return (
              <MusicListItem
                key={index}
                thumb={music.album.imgList[0].url}
                title={music.name}
                singer={music.representationArtist.name}
                thumbSize={45}
                thumbRadius={4}
              />
            );
          })}
        </ul>
      </div>
    </PlayList>
  );
}

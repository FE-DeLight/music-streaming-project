import styled from 'styled-components';
import PlayerThumb from './PlayerThumb';
import PlayerButton from '@/components/Player/PlayerButton';
import BlindText from '@/components/Player/BlindText';

const MusicListItem = styled.li<{}>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 20px;
  }

  .music-btn {
    display: flex;
    align-items: center;
  }

  .info {
    width: 340px;
    margin-left: 16px;
    text-align: left;
  }

  .title {
    margin-bottom: 6px;
    font-size: 15px;
    font-weight: 500;
    color: #fff;
  }

  .singer {
    font-size: 12px;
  }
`;
export default function Item(props: any): JSX.Element {
  return (
    <MusicListItem {...props}>
      <button className="music-btn" id={props.id}>
        <PlayerThumb size={props.thumbSize} image={props.thumb} radius={props.thumbRadius} id={props.id} />
        <div className="info">
          <div className="title">{props.title}</div>
          <div className="singer">{props.singer}</div>
        </div>
      </button>
      <PlayerButton size={30} image={'/icon_show_more.svg'}>
        <BlindText text={'더보기'} />
      </PlayerButton>
    </MusicListItem>
  );
}

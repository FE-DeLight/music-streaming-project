import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useSelector } from 'react-redux';

const PlayerThumb = styled.div<{ size: number; image?: string; radius: string }>`
  position: relative;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  flex-shrink: 0;
  border-radius: ${(props) => props.radius}px;
  background: #ddd;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .current-play {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
  }
  .current-play img {
   width: 50%;
   height: 50%;
  }
`;
export default function Thumb(props: any): JSX.Element {
  const playing = useSelector((state: any) => state.setPlayingMusic.value);
  const currentPlayMusic = useSelector((state: any) => state.setCurrentMusic.value);

  const { image, size } = props;
  return (
    <PlayerThumb {...props}>
      {image && <Image src={image} alt="앨범 이미지" width={size} height={size} />}
      {playing && currentPlayMusic.id === props.id && (
        <div className="current-play">
          <Image src={'/icon_playing.gif'} alt="재생중" width={30} height={30} />
        </div>
      )}
    </PlayerThumb>
  );
}

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const PlayerThumb = styled.div<{ size: number; image?: string; radius: string }>`
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
`;
export default function Thumb(props: any): JSX.Element {
   const { image, size } = props;
   return (
      <PlayerThumb {...props}>
         {image && <Image src={image} alt="앨범 이미지" width={size} height={size} />}
      </PlayerThumb>
   );
}

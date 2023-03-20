import React from 'react';
import Image from 'next/image';
import * as Style from './index.style';

interface Props {
  title: string;
  playList: any;
  viewLine: number;
}

export default function PlayList(props: Props): JSX.Element {
  const { title, playList, viewLine = 2 } = props;
  console.log(viewLine);
  return (
    <Style.Wrapper>
      <Style.Header>
        <Style.Title>{title}</Style.Title>
      </Style.Header>
      {playList.trackList.length > 0 ? (
        <div>
          <Style.ListWrapper>
            {playList.trackList.map((item: any, index: number) => (
              <Style.ListItem key={`playListItem-${index}`}>
                <Style.ImgWrapper>
                  <Image src={item.album.imgList[2].url} alt={item.name} width={175} height={175} />
                </Style.ImgWrapper>
                <Style.Text color="#333" fontSize={1.5}>
                  {item.name}
                </Style.Text>
                <Style.Text>{item.representationArtist.name}</Style.Text>
              </Style.ListItem>
            ))}
          </Style.ListWrapper>
        </div>
      ) : (
        <span>{title} 내역이 존재하지 않습니다.</span>
      )}
    </Style.Wrapper>
  );
}

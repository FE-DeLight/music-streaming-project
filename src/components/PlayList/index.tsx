import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import React from 'react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import * as Style from './index.style';

interface Props {
  title: string;
  playList: any;
  viewLine: number;
}

export default function PlayList(props: Props): JSX.Element {
  const { title, playList: originPlayList } = props;
  const setSwiperList = (arr: any) => {
    const newArr: any = [];
    arr.trackList.forEach((item: any, index: number) => {
      const arrIndex = Math.floor(index / 10);
      if (index === 0) {
        newArr[0] = [item];
      } else {
        newArr[arrIndex] = newArr[arrIndex] ? [...newArr[arrIndex], item] : [item];
      }
    });

    return newArr;
  };
  const playList = setSwiperList(originPlayList);

  return (
    <Style.Wrapper className="w955">
      <Style.Header>
        <Style.Title>{title}</Style.Title>
      </Style.Header>
      {playList.length > 0 ? (
        <div>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {playList.map((swiperItem: any, swiperIndex: number): any => (
              <SwiperSlide key={swiperIndex}>
                <Style.ListWrapper>
                  {swiperItem.map((item: any, index: number) => (
                    <Style.ListItem key={`playListItem-${index}`}>
                      <Style.ImgWrapper>
                        <Image
                          src={item.album?.imgList.length > 0 ? item.album.imgList[2].url : ''}
                          alt={item.name}
                          width={175}
                          height={175}
                        />
                      </Style.ImgWrapper>
                      <Style.Text color="#333" fontSize={1.5}>
                        {item.name}
                      </Style.Text>
                      <Style.Text>{item.representationArtist?.name}</Style.Text>
                    </Style.ListItem>
                  ))}
                </Style.ListWrapper>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <span>{title} 내역이 존재하지 않습니다.</span>
      )}
    </Style.Wrapper>
  );
}

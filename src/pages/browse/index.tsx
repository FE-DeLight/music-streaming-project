import React, { useEffect, useState } from 'react';
import BrowseList from '@/components/BrowseList/index';

export default function Browse() {
  const [trackList, setTrackList]: any = useState();
  const [BrowseListData, setBrowseListData]: any = useState({
    trackListHeader: [
      {
        key: 'rank',
        label: '순위',
      },
      {
        key: 'album',
        label: '곡/앨범',
      },
      {
        key: 'artist',
        label: '아티스트',
      },
      {
        key: 'listen',
        label: '듣기',
      },
      {
        key: 'playList',
        label: '재생목록',
      },
      {
        key: 'myList',
        label: '내 리스트',
      },
      {
        key: 'more',
        label: '더보기',
      },
    ],
    trackList: [],
  });

  const getData = async () => {
    // try, catch를 통해 에러 핸들링 해줘야 함.
    const res = await fetch('http://localhost:3000/api/categoryList', {
      headers: {
        accept: 'application/json',
      },
    });

    const json = await res.json();
    const jsonTrackList = json.data.playList.trackList;
    // BrowseListData.trackList.splice(0, jsonTrackList.length); // 데이터 변경 시 기존 데이터 초기화
    BrowseListData.trackList = jsonTrackList;
    // jsonTrackList.forEach((el: Object, index: number) => {
    //   BrowseListData.trackList.push({
    //     rank: index + 1,
    //     musicId: el.id,
    //     album: {
    //       imgList: [...el.album.imgList],
    //       title: el.album.title,
    //       id: el.album.id,
    //     },
    //     representationArtist: {
    //       id: el.artistList[0].id,
    //       name: el.artistList[0].name,
    //       type: 'ARTIST',
    //     },
    //     listen: '',
    //     playList: '',
    //     myList: '',
    //     more: '',
    //   });
    // });

    console.log(BrowseListData);

    // api로부터 받아온 데이터에서 trackList만 추출해서 trackList에 저장.
    setTrackList(BrowseListData.trackList);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (trackList) {
      // 추출된 trackList 데이터를 BrowseListData에 저장.
      setBrowseListData((prevState: any) => ({ ...prevState, trackList }));
    }
  }, [trackList]);

  return <BrowseList BrowseListData={BrowseListData} />;
}

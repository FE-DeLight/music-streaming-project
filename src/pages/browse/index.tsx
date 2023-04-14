import React, { useEffect, useState } from 'react';
import BrowseList from '@/components/BrowseList/index';

export default function Browse() {
  const [trackList, setTrackList]: any = useState();
  const [BrowseListData, setBrowseListData]: any = useState({
    trackListHeader: [
      {
        header: 'rank',
        label: '순위',
      },
      {
        header: 'album',
        label: '곡/앨범',
      },
      {
        header: 'artist',
        label: '아티스트',
      },
      {
        header: 'listen',
        label: '듣기',
      },
      {
        header: 'playList',
        label: '재생목록',
      },
      {
        header: 'myList',
        label: '내 리스트',
      },
      {
        header: 'more',
        label: '더보기',
      },
    ],
    trackList: [],
  });

  const getData = async () => {
    // try, catch를 통해 에러 핸들링 해줘야 함.
    const res = await fetch('http://localhost:3000/api/categoryList', {
      headers: {
        Accept: 'application/json',
      },
    });

    const json = await res.json();
    const jsonTrackList = json.data.playList.trackList;

    for (let i = 0; i < jsonTrackList.length; i++) {
      const newArray = {
        rank: i + 1,
        album: {
          art: jsonTrackList[i].album.imgList[4].url,
          title: jsonTrackList[i].album.title,
        },
        artist: jsonTrackList[i].artistList[0].name,
        listen: '',
        playList: '',
        myList: '',
        more: '',
      };
      BrowseListData.trackList.push(newArray);
    }
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

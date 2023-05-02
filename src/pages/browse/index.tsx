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
    try {
      const res = await fetch('http://localhost:3000/api/categoryList', {
        headers: {
          accept: 'application/json',
        },
      });
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const json = await res.json();
      const jsonTrackList = json.data.playList.trackList;
      BrowseListData.trackList.splice(0, BrowseListData.trackList.length); // 데이터 변경 시 기존 데이터 초기화
      BrowseListData.trackList = jsonTrackList; // Player 컴포넌트에 맞게 데이터 리팩토링
      console.log(BrowseListData);
      // api로부터 받아온 데이터에서 trackList만 추출해서 trackList에 저장.
      setTrackList(BrowseListData.trackList);
    } catch (error) {
      console.error(error); // 에러 처리
    }
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

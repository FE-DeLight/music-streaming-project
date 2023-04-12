import React, { useEffect, useState } from 'react';
import BrowseList from '@/components/BrowseList/index';

export default function Browse() {
  const [trackList, setTrackList]: any = useState();
  const [BrowseListData, setBrowseListData]: any = useState({
    trackListHeader: ['순위', '곡/앨범', '아티스트', '듣기', '재생목록', '내 리스트', '더보기'],
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
    // api로부터 받아온 데이터에서 trackList만 추출해서 trackList에 저장.
    setTrackList(json.data.playList.trackList);
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
